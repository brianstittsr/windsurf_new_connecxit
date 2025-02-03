import { executeQuery } from './dbService';
import { incrementUnreadMessages } from './userService';

interface CreateMessageData {
  content: string;
  fromUserId: string;
  toUserId: string;
}

async function createMessage(messageData: CreateMessageData) {
  try {
    const result = await executeQuery(
      `
      MATCH (from:User {id: $fromUserId})
      MATCH (to:User {id: $toUserId})
      CREATE (m:Message {
        id: randomUUID(),
        content: $content,
        createdAt: datetime(),
        read: false
      })
      CREATE (from)-[:SENT]->(m)
      CREATE (m)-[:TO]->(to)
      RETURN m
      `,
      messageData
    );

    if (!result || !result[0] || !result[0]._fields?.[0]?.properties) {
      throw new Error('Failed to create message');
    }

    // Increment unread message count for recipient
    await incrementUnreadMessages(messageData.toUserId);

    return result[0]._fields[0].properties;
  } catch (error) {
    console.error('Create message error:', error);
    throw error;
  }
}

async function getUnreadMessageCount(userId: string) {
  try {
    const result = await executeQuery(
      `
      MATCH (u:User {id: $userId})
      RETURN u.unreadMessages as count
      `,
      { userId }
    );

    return result[0]?._fields?.[0] || 0;
  } catch (error) {
    console.error('Get unread message count error:', error);
    throw error;
  }
}

async function getUserMessages(userId: string) {
  try {
    const result = await executeQuery(
      `
      MATCH (m:Message)
      WHERE (:User {id: $userId})<-[:TO]-(m) OR (:User {id: $userId})-[:SENT]->(m)
      MATCH (from:User)-[:SENT]->(m)
      MATCH (m)-[:TO]->(to:User)
      RETURN m, from, to
      ORDER BY m.createdAt DESC
      `,
      { userId }
    );

    return result.map(record => ({
      ...record._fields[0].properties,
      from: record._fields[1].properties,
      to: record._fields[2].properties
    }));
  } catch (error) {
    console.error('Get user messages error:', error);
    throw error;
  }
}

async function markMessageAsRead(messageId: string) {
  try {
    await executeQuery(
      `
      MATCH (m:Message {id: $messageId})
      SET m.read = true
      `,
      { messageId }
    );
  } catch (error) {
    console.error('Mark message as read error:', error);
    throw error;
  }
}

export {
  createMessage,
  getUnreadMessageCount,
  getUserMessages,
  markMessageAsRead
};
