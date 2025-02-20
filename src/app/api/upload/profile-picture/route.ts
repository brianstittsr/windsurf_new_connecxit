import { getServerUser } from "@/lib/auth-server";
import { getSession } from "@/lib/neo4j";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const user = await getServerUser();

    if (!user) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // TODO: Implement file upload to your storage service
    // For now, we'll just return a mock URL
    const imageUrl = `/uploads/${user.id}/${file.name}`;

    let session = null;
    try {
      session = await getSession();
      await session.run(
        `
        MATCH (u:User {id: $userId})
        SET u.image = $imageUrl
        `,
        {
          userId: user.id,
          imageUrl,
        },
      );

      return new Response(JSON.stringify({ imageUrl }), {
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
      "Profile picture upload error:",
      error instanceof Error ? error.message : "Unknown error occurred",
    );
    return new Response(
      JSON.stringify({ error: "Failed to upload profile picture" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
