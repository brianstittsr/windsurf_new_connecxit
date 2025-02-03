import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getSession } from "@/lib/neo4j";

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

          if (!user.hashedPassword) {
            console.error('User has no password set:', credentials.email);
            throw new Error('Invalid account configuration');
          }

          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          if (!isCorrectPassword) {
            console.error('Invalid password for user:', credentials.email);
            throw new Error('Invalid email or password');
          }

          console.log('Successfully authenticated user:', credentials.email);

          // Remove sensitive data before returning
          const { hashedPassword, ...userWithoutPassword } = user;
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
