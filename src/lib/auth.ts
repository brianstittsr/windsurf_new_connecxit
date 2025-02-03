import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { getSession } from '@/lib/neo4j';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
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
              .firstName,
              .lastName,
              .phone,
              .timezone,
              .role,
              .name,
              .image,
              .bio,
              .location,
              .website,
              .company,
              .title,
              .skills,
              .interests,
              .hashedPassword,
              .unreadMessages,
              .createdAt,
              .updatedAt
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
            console.error('Invalid account configuration for user:', credentials.email);
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Include all user fields in the token
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
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        // Include all user fields in the session
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
      }
      return session;
    }
  },
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
  }
};
