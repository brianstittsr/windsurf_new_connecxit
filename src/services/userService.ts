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

    const rawUser = result[0]._fields[0];
    console.log('getUserById - Raw user data:', rawUser);
    
    // Ensure all properties have proper default values
    const user: UserRecord = {
      id: rawUser.id,
      email: rawUser.email,
      firstName: rawUser.firstName || '',
      lastName: rawUser.lastName || '',
      phone: rawUser.phone || '',
      timezone: rawUser.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
      role: rawUser.role || 'user',
      name: rawUser.name || '',
      image: rawUser.image || '',
      bio: rawUser.bio || '',
      location: rawUser.location || '',
      website: rawUser.website || '',
      company: rawUser.company || '',
      title: rawUser.title || '',
      skills: Array.isArray(rawUser.skills) ? rawUser.skills : [],
      interests: Array.isArray(rawUser.interests) ? rawUser.interests : [],
      unreadMessages: typeof rawUser.unreadMessages === 'number' ? rawUser.unreadMessages : 0,
      createdAt: rawUser.createdAt || new Date().toISOString(),
      updatedAt: rawUser.updatedAt || new Date().toISOString()
    };

    console.log('getUserById - Processed user data:', user);
    return user;
  } catch (error) {
    console.error('Error getting user by id:', error);
    throw error;
  }
}

async function updateUser(id: string, userData: UpdateUserData): Promise<UserRecord> {
  try {
    // Build dynamic SET clause based on provided fields
    const setFields = [];
    const params: { id: string } & Partial<UpdateUserData> = { id };

    // Only include fields that are actually provided
    if (userData.firstName !== undefined) {
      setFields.push('u.firstName = $firstName');
      params.firstName = userData.firstName;
    }
    if (userData.lastName !== undefined) {
      setFields.push('u.lastName = $lastName');
      params.lastName = userData.lastName;
    }
    if (userData.phone !== undefined) {
      setFields.push('u.phone = $phone');
      params.phone = userData.phone;
    }
    if (userData.timezone !== undefined) {
      setFields.push('u.timezone = $timezone');
      params.timezone = userData.timezone;
    }
    if (userData.name !== undefined) {
      setFields.push('u.name = $name');
      params.name = userData.name;
    }
    if (userData.image !== undefined) {
      setFields.push('u.image = $image');
      params.image = userData.image;
    }
    if (userData.bio !== undefined) {
      setFields.push('u.bio = $bio');
      params.bio = userData.bio;
    }
    if (userData.location !== undefined) {
      setFields.push('u.location = $location');
      params.location = userData.location;
    }
    if (userData.website !== undefined) {
      setFields.push('u.website = $website');
      params.website = userData.website;
    }
    if (userData.company !== undefined) {
      setFields.push('u.company = $company');
      params.company = userData.company;
    }
    if (userData.title !== undefined) {
      setFields.push('u.title = $title');
      params.title = userData.title;
    }
    if (userData.skills !== undefined) {
      setFields.push('u.skills = $skills');
      params.skills = userData.skills;
    }
    if (userData.interests !== undefined) {
      setFields.push('u.interests = $interests');
      params.interests = userData.interests;
    }

    // Always update the updatedAt timestamp
    setFields.push('u.updatedAt = datetime()');

    const query = `
      MATCH (u:User {id: $id})
      SET ${setFields.join(', ')}
      RETURN u
    `;

    const result = await executeQuery(query, params);

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
