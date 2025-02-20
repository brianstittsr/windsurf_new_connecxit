import { getSession, closeDriver } from "@/lib/neo4j";

async function migrateUserSchema() {
  const session = getSession();
  try {
    // Add new properties to existing users
    const result = await session.run(`
      MATCH (u:User)
      SET u += {
        firstName: CASE 
          WHEN u.name IS NOT NULL THEN split(u.name, ' ')[0]
          ELSE ''
        END,
        lastName: CASE 
          WHEN u.name IS NOT NULL AND size(split(u.name, ' ')) > 1 
          THEN split(u.name, ' ')[1]
          ELSE ''
        END,
        timezone: CASE 
          WHEN u.timezone IS NULL 
          THEN 'America/New_York'
          ELSE u.timezone
        END
      }
      REMOVE u.name
      RETURN count(u) as updatedUsers
    `);

    const updatedUsers = result.records[0].get("updatedUsers").toNumber();
    console.log(
      `Migration completed successfully. Updated ${updatedUsers} users.`,
    );
  } catch (error) {
    console.error("Migration failed:", error);
    throw error;
  } finally {
    await session.close();
    await closeDriver();
  }
}

// Run the migration
migrateUserSchema()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
