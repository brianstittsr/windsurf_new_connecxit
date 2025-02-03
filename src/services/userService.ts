const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

interface CreateUserData {
  email: string;
  password: string;
  name?: string;
  image?: string;
  role?: string;
}

async function executeQuery(query: string, params: any) {
  const response = await fetch('/api/db', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, params }),
  });

  if (!response.ok) {
    throw new Error('Database operation failed');
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.error);
  }

  console.log('Query result:', JSON.stringify(result.data, null, 2));
  return result.data;
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
        role: userData.role || 'USER'
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

module.exports = {
  createUser,
  getUserByEmail,
  getUserById
};
