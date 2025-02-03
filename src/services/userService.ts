import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { executeQuery } from './dbService';

interface CreateUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  timezone: string;
  role?: string;
  name?: string;
  image?: string;
  bio?: string;
  location?: string;
  website?: string;
  company?: string;
  title?: string;
  skills?: string[];
  interests?: string[];
}

interface UpdateUserData {
  firstName?: string;
  lastName?: string;
  phone?: string;
  timezone?: string;
  name?: string;
  image?: string;
  bio?: string;
  location?: string;
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
  firstName: string;
  lastName: string;
  phone: string;
  timezone: string;
  role?: string;
  name?: string;
  image?: string;
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
        firstName: $firstName,
        lastName: $lastName,
        phone: $phone,
        timezone: $timezone,
        role: $role,
        name: $name,
        image: $image,
        bio: $bio,
        location: $location,
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
        firstName: userData.firstName,
        lastName: userData.lastName,
        phone: userData.phone,
        timezone: userData.timezone,
        role: userData.role || 'user',
        name: userData.name || null,
        image: userData.image || null,
        bio: userData.bio || null,
        location: userData.location || null,
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
    console.log('getUserById - Fetching user with ID:', id);
    const result = await executeQuery(
      `
      MATCH (u:User {id: $id})
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
        .unreadMessages,
        .createdAt,
        .updatedAt
      }
      `,
      { id }
    );

    console.log('getUserById - Raw query result:', result);

    if (!result || result.length === 0 || !result[0]._fields?.[0]) {
      console.log('getUserById - No user found');
      return null;
    }

    const user = result[0]._fields[0];
    console.log('getUserById - Parsed user data:', user);
    
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
        firstName: $firstName,
        lastName: $lastName,
        phone: $phone,
        timezone: $timezone,
        name: $name,
        image: $image,
        bio: $bio,
        location: $location,
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
        firstName: userData.firstName || null,
        lastName: userData.lastName || null,
        phone: userData.phone || null,
        timezone: userData.timezone || null,
        name: userData.name || null,
        image: userData.image || null,
        bio: userData.bio || null,
        location: userData.location || null,
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
