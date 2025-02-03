import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getDriver } from "@/lib/neo4j";

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
          throw new Error('Invalid credentials');
        }

        const driver = getDriver();
        const session = driver.session();

        try {
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

          if (!user || !user.hashedPassword) {
            throw new Error('Invalid credentials');
          }

          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          if (!isCorrectPassword) {
            throw new Error('Invalid credentials');
          }

          // Remove hashedPassword from the returned user object
          delete user.hashedPassword;

          return user;
        } catch (error) {
          console.error('Authentication error:', error);
          throw new Error('Authentication failed');
        } finally {
          await session.close();
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
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
