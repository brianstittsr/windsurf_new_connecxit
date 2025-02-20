import { getServerUser } from '@/lib/auth-server';
import { getSession } from '@/lib/neo4j';


export async function POST(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getServerUser();
    
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Not authenticated' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
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
          messageId: params.id
        }
      );

      const message = result.records[0]?.get('message');

      if (!message) {
        return new Response(
          JSON.stringify({ error: 'Message not found or already read' }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }

      return new Response(JSON.stringify(message), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } finally {
      if (session) {
        await session.close();
      }
    }
  } catch (error) {
    console.error('Message read error:', error instanceof Error ? error.message : 'Unknown error occurred');
    return new Response(
      JSON.stringify({ error: 'Failed to mark message as read' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
