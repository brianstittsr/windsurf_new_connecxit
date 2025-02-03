import NextAuth, { AuthOptions, User as NextAuthUser, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getSession } from "@/lib/neo4j";

interface User extends NextAuthUser {
  id: string;
  role: string;
  email: string;
  name: string;
  hashedPassword: string;
  image: string;
}

interface CustomSession extends Session {
  user: {
    id: string;
    role: string;
    email?: string | null;
    name?: string | null;
    image?: string | null;
  };
}

const authOptions: AuthOptions = {
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
          console.log('Attempting to authenticate user:', credentials.email);

          const result = await session.run(
            `
            MATCH (u:User {email: $email})
            RETURN u {
              .id,
              .email,
              .name,
              .hashedPassword,
              .role,
              .image
            } as user
            `,
            { email: credentials.email }
          );

          const user = result.records[0]?.get('user');

          if (!user) {
            console.error('User not found:', credentials.email);
            throw new Error('Invalid email or password');
          }

          const email = credentials.email;
          const password = credentials.password;

          if (!user.hashedPassword) {
            console.error('Invalid account configuration for user:', email);
            throw new Error('Invalid account configuration');
          }

          const isCorrectPassword = await bcrypt.compare(password, user.hashedPassword);

          if (!isCorrectPassword) {
            console.error('Invalid password for user:', email);
            throw new Error('Invalid email or password');
          }

          console.log('Successfully authenticated user:', email);

          // Remove sensitive data before returning
          const userWithoutPassword = { ...user };
          delete userWithoutPassword.hashedPassword;
          return userWithoutPassword;

        } catch (error) {
          console.error('Authentication error:', error);
          throw error;
        } finally {
          if (session) {
            await session.close();
          }
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as User).role;
      }
      return token;
    },
    async session({ session, token }) {
      const customSession = session as CustomSession;
      if (customSession.user) {
        customSession.user.id = token.id as string;
        customSession.user.role = token.role as string;
      }
      return customSession;
    }
  },
  pages: {
    signIn: '/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
