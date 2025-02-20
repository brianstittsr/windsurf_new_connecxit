import { createUser } from "@/services/userService";

async function createTestUser() {
  try {
    const user = await createUser({
      email: "test@example.com",
      password: "Test123!@#",
      firstName: "Test",
      lastName: "User",
      phone: "+1234567890",
      timezone: "America/New_York",
      name: "Test User",
      role: "USER",
    });
    console.log("Test user created successfully:", user);
  } catch (error) {
    console.error("Failed to create test user:", error);
  }
}

createTestUser();
