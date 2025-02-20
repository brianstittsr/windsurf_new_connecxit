import { getServerUser } from '@/lib/auth-server';
import { getSession } from '@/lib/neo4j';
import { logger } from '@/utils/logger';

export async function GET() {
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
        MATCH (u:User {id: $userId})<-[r:SENT_TO]-(m:Message)
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
        ORDER BY m.createdAt DESC
        `,
        { userId: user.id }
      );

      const messages = result.records.map(record => record.get('message'));

      return new Response(JSON.stringify(messages), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } finally {
      if (session) {
        await session.close();
      }
    }
  } catch (error) {
    logger.error('Messages fetch error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch messages' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function POST(req: Request) {
  try {
    const user = await getServerUser();
    
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Not authenticated' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { recipientId, content } = await req.json();

    if (!recipientId || !content) {
      return new Response(
        JSON.stringify({ error: 'Recipient and content are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let session = null;
    try {
      session = await getSession();
      const result = await session.run(
        `
        MATCH (sender:User {id: $senderId})
        MATCH (recipient:User {id: $recipientId})
        CREATE (m:Message {
          id: randomUUID(),
          content: $content,
          createdAt: datetime(),
          read: false
        })
        CREATE (sender)-[:SENT]->(m)
        CREATE (m)-[:SENT_TO]->(recipient)
        SET recipient.unreadMessages = 
          CASE 
            WHEN recipient.unreadMessages IS NULL THEN 1 
            ELSE recipient.unreadMessages + 1 
          END
        RETURN m {
          .id,
          .content,
          .createdAt,
          .read,
          sender: sender {
            .id,
            .firstName,
            .lastName,
            .image
          }
        } as message
        `,
        {
          senderId: user.id,
          recipientId,
          content
        }
      );

      const message = result.records[0]?.get('message');

      if (!message) {
        throw new Error('Failed to create message');
      }

      return new Response(JSON.stringify(message), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    } finally {
      if (session) {
        await session.close();
      }
    }
  } catch (error) {
    logger.error('Message send error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
