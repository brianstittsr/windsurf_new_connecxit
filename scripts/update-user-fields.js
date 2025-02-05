const neo4j = require('neo4j-driver');

async function updateUserFields() {
  const uri = 'neo4j+s://de2a40da.databases.neo4j.io:7687';
  const user = 'neo4j';
  const password = 'uoxoZqnGJf5ed0GLI0BehuNkiZnOEpH4q9_HsEXJDx8';

  console.log('Connecting to Neo4j...');
  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH (u:User {id: $id})
      SET u.role = $role,
          u.firstName = $firstName,
          u.lastName = $lastName,
          u.phone = $phone,
          u.timezone = $timezone,
          u.bio = $bio,
          u.location = $location,
          u.website = $website,
          u.company = $company,
          u.title = $title,
          u.skills = $skills,
          u.interests = $interests
      RETURN u
      `,
      {
        id: 'b2dbbde2-7fba-45b8-85dd-d47307e34de9',
        role: 'USER',
        firstName: null,
        lastName: null,
        phone: null,
        timezone: null,
        bio: null,
        location: null,
        website: null,
        company: null,
        title: null,
        skills: [],
        interests: []
      }
    );

    console.log('User updated:', result.records[0]?.get('u').properties);
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  } finally {
    await session.close();
    await driver.close();
  }
}

updateUserFields()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Script error:', error);
    process.exit(1);
  });
