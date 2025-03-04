import { getServerUser } from "@/lib/auth-server";
import { getSession } from "@/lib/neo4j";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const user = await getServerUser();

    if (!user) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(
      "Profile fetch error:",
      error instanceof Error ? error.message : "Unknown error occurred",
    );
    return new Response(JSON.stringify({ error: "Failed to fetch profile" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = await getServerUser();

    if (!user) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const updates = await request.json();
    let session = null;

    try {
      session = await getSession();
      const result = await session.run(
        `
        MATCH (u:User {id: $id})
        SET u += $updates
        RETURN u {
          .id,
          .email,
          .firstName,
          .lastName,
          .phone,
          .timezone,
          .role,
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
        } as user
        `,
        {
          id: user.id,
          updates: {
            ...updates,
            updatedAt: new Date().toISOString(),
          },
        },
      );

      const updatedUser = result.records[0]?.get("user");

      if (!updatedUser) {
        throw new Error("Failed to update user");
      }

      return new Response(JSON.stringify(updatedUser), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } finally {
      if (session) {
        await session.close();
      }
    }
  } catch (error) {
    console.error(
      "Profile update error:",
      error instanceof Error ? error.message : "Unknown error occurred",
    );
    return new Response(JSON.stringify({ error: "Failed to update profile" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
