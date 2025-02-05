const { getSession } = require('../src/lib/neo4j');

async function updateUserFields() {
  let session = null;
  try {
    session = await getSession();
    
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
  } finally {
    if (session) {
      await session.close();
    }
  }
}

updateUserFields()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Script error:', error);
    process.exit(1);
  });
