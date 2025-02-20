import { getServerUser } from "@/lib/auth-server";
import { getSession } from "@/lib/neo4j";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const user = await getServerUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    let session = null;
    try {
      session = await getSession();
      const result = await session.run(
        `
        MATCH (u:User {id: $userId})<-[:SENT_TO]-(m:Message {id: $messageId})
        WHERE NOT m.read
        SET m.read = true
        WITH u, m
        SET u.unreadMessages = 
          CASE 
            WHEN u.unreadMessages IS NULL THEN 0
            WHEN u.unreadMessages <= 1 THEN 0
            ELSE u.unreadMessages - 1 
          END
        RETURN m {
          .id,
          .content,
          .createdAt,
          .read,
          sender: [(m)<-[:SENT]-(s:User) | s {
            .id,
            .firstName,
            .lastName,
            .image
          }][0]
        } as message
        `,
        {
          userId: user.id,
          messageId: params.id,
        },
      );

      const message = result.records[0]?.get("message");

      if (!message) {
        return NextResponse.json(
          { error: "Message not found or already read" },
          { status: 404 },
        );
      }

      return NextResponse.json(message);
    } finally {
      if (session) {
        await session.close();
      }
    }
  } catch (error) {
    console.error(
      "Message read error:",
      error instanceof Error ? error.message : "Unknown error occurred",
    );
    return NextResponse.json(
      { error: "Failed to mark message as read" },
      { status: 500 },
    );
  }
}
