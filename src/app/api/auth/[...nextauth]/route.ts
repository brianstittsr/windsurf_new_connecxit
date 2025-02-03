import NextAuth, { AuthOptions } from "next-auth";
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

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error('Missing credentials');
          throw new Error('Please provide both email and password');
        }

        let session = null;
        try {
          session = await getSession();
          console.log('Auth - Attempting to authenticate user:', credentials.email);

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

          const user = result.records[0]?.get('user') as CustomUser;

          if (!user) {
            console.error('Auth - User not found:', credentials.email);
            throw new Error('Invalid email or password');
          }

          const email = credentials.email;
          const password = credentials.password;

          if (!user.hashedPassword) {
            console.error('Auth - Invalid account configuration for user:', email);
            throw new Error('Invalid account configuration');
          }

          const isCorrectPassword = await bcrypt.compare(password, user.hashedPassword);

          if (!isCorrectPassword) {
            console.error('Auth - Invalid password for user:', email);
            throw new Error('Invalid email or password');
          }

          console.log('Auth - Successfully authenticated user:', email);
          console.log('Auth - Raw user data:', user);

          // Remove sensitive data before returning
          const userWithoutPassword = { ...user };
          delete userWithoutPassword.hashedPassword;
          console.log('Auth - Returning user data:', userWithoutPassword);
          return userWithoutPassword;

        } catch (error) {
          console.error('Auth - Authentication error:', error);
          throw error;
        } finally {
          if (session) {
            await session.close();
          }
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log('Auth - JWT Callback - Raw user:', user);
        token.id = user.id;
        token.role = user.role;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.phone = user.phone;
        token.timezone = user.timezone;
        token.bio = user.bio;
        token.location = user.location;
        token.website = user.website;
        token.company = user.company;
        token.title = user.title;
        token.skills = user.skills;
        token.interests = user.interests;
      }
      console.log('Auth - JWT Callback - Final token:', token);
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        console.log('Auth - Session Callback - Initial session:', session);
        console.log('Auth - Session Callback - Token:', token);
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.phone = token.phone as string;
        session.user.timezone = token.timezone as string;
        session.user.bio = token.bio as string;
        session.user.location = token.location as string;
        session.user.website = token.website as string;
        session.user.company = token.company as string;
        session.user.title = token.title as string;
        session.user.skills = token.skills as string[];
        session.user.interests = token.interests as string[];
        console.log('Auth - Session Callback - Final session:', session);
      }
      return session;
    }
  },
  pages: {
    signIn: '/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  }
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
