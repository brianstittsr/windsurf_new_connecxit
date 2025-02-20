import { getSession, closeDriver } from "../lib/neo4j";

async function addUserFields() {
  const session = getSession();
  try {
    // Add constraints to ensure uniqueness where needed
    await session.run(`
      CREATE CONSTRAINT user_id IF NOT EXISTS
      FOR (u:User) REQUIRE u.id IS UNIQUE
    `);

    await session.run(`
      CREATE CONSTRAINT user_email IF NOT EXISTS
      FOR (u:User) REQUIRE u.email IS UNIQUE
    `);

    // Add or update fields for all users
    const result = await session.run(`
      MATCH (u:User)
      SET u += {
        id: COALESCE(u.id, randomUUID()),
        email: COALESCE(u.email, ''),
        firstName: COALESCE(u.firstName, ''),
        lastName: COALESCE(u.lastName, ''),
        phone: COALESCE(u.phone, ''),
        timezone: COALESCE(u.timezone, 'America/New_York'),
        role: COALESCE(u.role, 'user'),
        name: COALESCE(u.firstName, '') + ' ' + COALESCE(u.lastName, ''),
        bio: COALESCE(u.bio, ''),
        location: COALESCE(u.location, ''),
        website: COALESCE(u.website, ''),
        company: COALESCE(u.company, ''),
        title: COALESCE(u.title, ''),
        skills: CASE 
          WHEN u.skills IS NULL 
          THEN []
          ELSE u.skills
        END,
        interests: CASE 
          WHEN u.interests IS NULL 
          THEN []
          ELSE u.interests
        END
      }
      RETURN count(u) as updatedUsers
    `);

    const updatedUsers = result.records[0].get("updatedUsers").toNumber();
    console.log(`Fields added successfully. Updated ${updatedUsers} users.`);
  } catch (error) {
    console.error("Failed to add user fields:", error);
    throw error;
  } finally {
    await session.close();
    await closeDriver();
  }
}

// Run the migration
addUserFields()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
