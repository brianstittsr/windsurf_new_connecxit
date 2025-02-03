import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { executeQuery } from './dbService';

interface CreateUserData {
  email: string;
  password: string;
  name?: string;
  image?: string;
  role?: string;
  bio?: string;
  location?: string;
  phone?: string;
  website?: string;
  company?: string;
  title?: string;
  skills?: string[];
  interests?: string[];
}

interface UpdateUserData {
  name?: string;
  image?: string;
  bio?: string;
  location?: string;
  phone?: string;
  website?: string;
  company?: string;
  title?: string;
  skills?: string[];
  interests?: string[];
}

interface UserRecord {
  id: string;
  email: string;
  hashedPassword?: string;
  name?: string;
  image?: string;
  role?: string;
  bio?: string;
  location?: string;
  phone?: string;
  website?: string;
  company?: string;
  title?: string;
  skills?: string[];
  interests?: string[];
  unreadMessages?: number;
  createdAt?: string;
  updatedAt?: string;
}

async function createUser(userData: CreateUserData): Promise<UserRecord> {
  try {
    const existingUserResult = await executeQuery(
      `
      MATCH (u:User {email: $email})
      RETURN u
      `,
      { email: userData.email }
    );

    if (existingUserResult && existingUserResult.length > 0 && existingUserResult[0]._fields?.[0]) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 12);
    const userId = uuidv4();

    const result = await executeQuery(
      `
      CREATE (u:User {
        id: $id,
        email: $email,
        hashedPassword: $hashedPassword,
        name: $name,
        image: $image,
        role: $role,
        bio: $bio,
        location: $location,
        phone: $phone,
        website: $website,
        company: $company,
        title: $title,
        skills: $skills,
        interests: $interests,
        unreadMessages: 0,
        createdAt: datetime(),
        updatedAt: datetime()
      })
      RETURN u
      `,
      {
        id: userId,
        email: userData.email,
        hashedPassword,
        name: userData.name || null,
        image: userData.image || null,
        role: userData.role || 'user',
        bio: userData.bio || null,
        location: userData.location || null,
        phone: userData.phone || null,
        website: userData.website || null,
        company: userData.company || null,
        title: userData.title || null,
        skills: userData.skills || [],
        interests: userData.interests || []
      }
    );

    const user = result[0]._fields[0].properties;
    return {
      ...user,
      skills: user.skills || [],
      interests: user.interests || []
    };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

async function getUserByEmail(email: string): Promise<UserRecord | null> {
  try {
    const result = await executeQuery(
      `
      MATCH (u:User {email: $email})
      RETURN u
      `,
      { email }
    );

    if (!result || result.length === 0 || !result[0]._fields?.[0]) {
      return null;
    }

    const user = result[0]._fields[0].properties;
    return {
      ...user,
      skills: user.skills || [],
      interests: user.interests || []
    };
  } catch (error) {
    console.error('Error getting user by email:', error);
    throw error;
  }
}

async function getUserById(id: string): Promise<UserRecord | null> {
  try {
    const result = await executeQuery(
      `
      MATCH (u:User {id: $id})
      RETURN u
      `,
      { id }
    );

    if (!result || result.length === 0 || !result[0]._fields?.[0]) {
      return null;
    }

    const user = result[0]._fields[0].properties;
    return {
      ...user,
      skills: user.skills || [],
      interests: user.interests || []
    };
  } catch (error) {
    console.error('Error getting user by id:', error);
    throw error;
  }
}

async function updateUser(email: string, userData: UpdateUserData): Promise<UserRecord> {
  try {
    const result = await executeQuery(
      `
      MATCH (u:User {email: $email})
      SET u += {
        name: $name,
        image: $image,
        bio: $bio,
        location: $location,
        phone: $phone,
        website: $website,
        company: $company,
        title: $title,
        skills: $skills,
        interests: $interests,
        updatedAt: datetime()
      }
      RETURN u
      `,
      {
        email,
        name: userData.name || null,
        image: userData.image || null,
        bio: userData.bio || null,
        location: userData.location || null,
        phone: userData.phone || null,
        website: userData.website || null,
        company: userData.company || null,
        title: userData.title || null,
        skills: userData.skills || [],
        interests: userData.interests || []
      }
    );

    if (!result || result.length === 0 || !result[0]._fields?.[0]) {
      throw new Error('User not found');
    }

    const user = result[0]._fields[0].properties;
    return {
      ...user,
      skills: user.skills || [],
      interests: user.interests || []
    };
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

async function incrementUnreadMessages(userId: string): Promise<number> {
  try {
    const result = await executeQuery(
      `
      MATCH (u:User {id: $userId})
      SET u.unreadMessages = coalesce(u.unreadMessages, 0) + 1
      RETURN u.unreadMessages as count
      `,
      { userId }
    );

    return result[0]._fields[0];
  } catch (error) {
    console.error('Error incrementing unread messages:', error);
    throw error;
  }
}

async function resetUnreadMessages(userId: string): Promise<void> {
  try {
    await executeQuery(
      `
      MATCH (u:User {id: $userId})
      SET u.unreadMessages = 0
      `,
      { userId }
    );
  } catch (error) {
    console.error('Error resetting unread messages:', error);
    throw error;
  }
}

export {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
  incrementUnreadMessages,
  resetUnreadMessages,
  type CreateUserData,
  type UpdateUserData,
  type UserRecord
};
