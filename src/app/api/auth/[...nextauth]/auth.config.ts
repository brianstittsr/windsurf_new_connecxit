import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getSession } from "@/lib/neo4j";

type CustomUser = {
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  timezone: string;
  hashedPassword: string;
  image: string;
  bio?: string;
  location?: string;
  website?: string;
  company?: string;
  title?: string;
  skills?: string[];
  interests?: string[];
  unreadMessages?: number;
  createdAt?: string;
  updatedAt?: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please provide both email and password');
        }

        let session = null;
        try {
          // Validate environment variables
          const requiredEnvVars = {
            NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
            NEXTAUTH_URL: process.env.NEXTAUTH_URL,
            NEO4J_URI: process.env.NEO4J_URI,
            NEO4J_USER: process.env.NEO4J_USER,
            NEO4J_PASSWORD: process.env.NEO4J_PASSWORD
          };

          const missingVars = Object.entries(requiredEnvVars)
            .filter(([, value]) => !value)
            .map(([key]) => key);

          if (missingVars.length > 0) {
            throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
          }

          console.log('Attempting to get Neo4j session...');
          session = await getSession();
          console.log('Successfully got Neo4j session');

          const result = await session.run(
            `
            MATCH (u:User {email: $email})
            RETURN u {
              .id,
              .email,
              .firstName,
              .lastName,
              .phone,
              .timezone,
              .hashedPassword,
              .role,
              .image,
              .bio,
              .location,
              .website,
              .company,
              .title,
              .skills,
              .interests,
              .unreadMessages,
              .createdAt,
              .updatedAt
            } as user
            `,
            { email: credentials.email }
          );

          console.log('Query result:', result.records);
          const user = result.records[0]?.get('user') as CustomUser | null;
          console.log('Retrieved user:', user);

          if (!user) {
            throw new Error('Invalid email or password');
          }

          if (!user.hashedPassword) {
            throw new Error('Invalid account configuration');
          }

          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          if (!isCorrectPassword) {
            throw new Error('Invalid email or password');
          }

          // Remove sensitive data before returning
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { hashedPassword, ...userWithoutPassword } = user;
          return userWithoutPassword;
        } catch (error) {
          console.error('Authentication error:', error);
          console.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
          throw new Error('Authentication failed: ' + (error instanceof Error ? error.message : 'Unknown error'));
        } finally {
          if (session) {
            await session.close();
          }
        }
      }
    })
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log('NextAuth - JWT Callback:', {
        hasUser: !!user,
        tokenBefore: token,
        userData: user
      });

      if (user) {
        // Copy all user properties to token
        token.id = user.id;
        token.role = user.role;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.phone = user.phone;
        token.timezone = user.timezone;
        token.name = user.name;
        token.image = user.image;
        token.bio = user.bio;
        token.location = user.location;
        token.website = user.website;
        token.company = user.company;
        token.title = user.title;
        token.skills = user.skills;
        token.interests = user.interests;
        token.unreadMessages = user.unreadMessages;
        token.createdAt = user.createdAt;
        token.updatedAt = user.updatedAt;
      }

      console.log('NextAuth - JWT Callback - Updated token:', token);
      return token;
    },
    async session({ session, token }) {
      console.log('NextAuth - Session Callback:', {
        hasToken: !!token,
        sessionBefore: session,
        token
      });

      if (token && session.user) {
        // Copy all token properties to session.user
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.email = token.email as string;
        session.user.phone = token.phone as string;
        session.user.timezone = token.timezone as string;
        session.user.name = token.name as string;
        session.user.image = token.image as string;
        session.user.bio = token.bio as string;
        session.user.location = token.location as string;
        session.user.website = token.website as string;
        session.user.company = token.company as string;
        session.user.title = token.title as string;
        session.user.skills = token.skills as string[];
        session.user.interests = token.interests as string[];
        session.user.unreadMessages = token.unreadMessages as number;
        session.user.createdAt = token.createdAt as string;
        session.user.updatedAt = token.updatedAt as string;
      }

      console.log('NextAuth - Session Callback - Updated session:', session);
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
}
