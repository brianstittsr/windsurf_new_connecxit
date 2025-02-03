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

async function createUser(userData: CreateUserData) {
  try {
    // Check if user already exists
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

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 12);

    // Create user
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
        id: uuidv4(),
        email: userData.email,
        hashedPassword,
        name: userData.name || null,
        image: userData.image || null,
        role: userData.role || 'USER',
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

    if (!result || !result[0]) {
      console.error('Create user failed: No result returned');
      throw new Error('Failed to create user - no result returned');
    }

    console.log('Raw result:', result[0]);
    
    if (!result[0]._fields?.[0]?.properties) {
      console.error('Create user failed: Invalid result structure:', result);
      throw new Error('Failed to create user - invalid result structure');
    }

    const user = { ...result[0]._fields[0].properties };
    if (user.hashedPassword) {
      delete user.hashedPassword;
    }
    return user;
  } catch (error) {
    console.error('Create user error:', error);
    throw error;
  }
}

async function getUserByEmail(email: string) {
  try {
    const result = await executeQuery(
      `
      MATCH (u:User {email: $email})
      RETURN u
      `,
      { email }
    );

    if (!result || !result[0] || !result[0]._fields?.[0]?.properties) {
      return null;
    }

    const user = { ...result[0]._fields[0].properties };
    if (user.hashedPassword) {
      delete user.hashedPassword;
    }
    return user;
  } catch (error) {
    console.error('Get user by email error:', error);
    throw error;
  }
}

async function getUserById(id: string) {
  try {
    const result = await executeQuery(
      `
      MATCH (u:User {id: $id})
      RETURN u
      `,
      { id }
    );

    if (!result || !result[0] || !result[0]._fields?.[0]?.properties) {
      return null;
    }

    const user = { ...result[0]._fields[0].properties };
    if (user.hashedPassword) {
      delete user.hashedPassword;
    }
    return user;
  } catch (error) {
    console.error('Get user by id error:', error);
    throw error;
  }
}

async function updateUser(id: string, userData: UpdateUserData) {
  try {
    const result = await executeQuery(
      `
      MATCH (u:User {id: $id})
      SET u += $updates,
          u.updatedAt = datetime()
      RETURN u
      `,
      {
        id,
        updates: {
          ...userData,
          updatedAt: new Date().toISOString()
        }
      }
    );

    if (!result || !result[0] || !result[0]._fields?.[0]?.properties) {
      throw new Error('User not found');
    }

    const user = { ...result[0]._fields[0].properties };
    delete user.hashedPassword;
    return user;
  } catch (error) {
    console.error('Update user error:', error);
    throw error;
  }
}

async function incrementUnreadMessages(userId: string) {
  try {
    const result = await executeQuery(
      `
      MATCH (u:User {id: $userId})
      SET u.unreadMessages = coalesce(u.unreadMessages, 0) + 1
      RETURN u
      `,
      { userId }
    );

    return result[0]?._fields[0]?.properties?.unreadMessages || 0;
  } catch (error) {
    console.error('Increment unread messages error:', error);
    throw error;
  }
}

async function resetUnreadMessages(userId: string) {
  try {
    await executeQuery(
      `
      MATCH (u:User {id: $userId})
      SET u.unreadMessages = 0
      `,
      { userId }
    );
  } catch (error) {
    console.error('Reset unread messages error:', error);
    throw error;
  }
}

export {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
  incrementUnreadMessages,
  resetUnreadMessages
};
