import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: string;
      firstName: string;
      lastName: string;
      email: string;
      phone?: string | null;
      timezone?: string | null;
      name?: string | null;
      image?: string | null;
      bio?: string | null;
      location?: string | null;
      website?: string | null;
      company?: string | null;
      title?: string | null;
      skills?: string[];
      interests?: string[];
      unreadMessages?: number;
      createdAt?: string;
      updatedAt?: string;
    };
  }

  interface User {
    id: string;
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    timezone?: string | null;
    name?: string | null;
    image?: string | null;
    bio?: string | null;
    location?: string | null;
    website?: string | null;
    company?: string | null;
    title?: string | null;
    skills?: string[];
    interests?: string[];
    unreadMessages?: number;
    createdAt?: string;
    updatedAt?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    timezone?: string | null;
    name?: string | null;
    image?: string | null;
    bio?: string | null;
    location?: string | null;
    website?: string | null;
    company?: string | null;
    title?: string | null;
    skills?: string[];
    interests?: string[];
    unreadMessages?: number;
    createdAt?: string;
    updatedAt?: string;
  }
}
