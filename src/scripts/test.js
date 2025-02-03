import neo4j from 'neo4j-driver';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

async function createTestUser() {
  const uri = process.env.NEO4J_URI;
  const user = process.env.NEO4J_USER;
  const password = process.env.NEO4J_PASSWORD;

  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  const session = driver.session();

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash('Test123!@#', 12);

    // Create user
    const result = await session.run(
      `
      CREATE (u:User {
        id: $id,
        email: $email,
        hashedPassword: $hashedPassword,
        name: $name,
        role: $role,
        createdAt: datetime(),
        updatedAt: datetime()
      })
      RETURN u
      `,
      {
        id: uuidv4(),
        email: 'test@example.com',
        hashedPassword,
        name: 'Test User',
        role: 'USER'
      }
    );

    const user = result.records[0].get('u').properties;
    console.log('Test user created successfully:', user);
  } catch (error) {
    console.error('Failed to create test user:', error);
  } finally {
    await session.close();
    await driver.close();
  }
}

createTestUser();
