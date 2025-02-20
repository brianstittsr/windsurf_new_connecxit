import { executeQuery, type QueryParams } from "./dbService";
import { incrementUnreadMessages } from "./userService";

interface CreateMessageData extends QueryParams {
  content: string;
  fromUserId: string;
  toUserId: string;
}

interface MessageRecord {
  id: string;
  content: string;
  createdAt: string;
  read: boolean;
  from: {
    id: string;
    name: string;
    email: string;
    image?: string;
  };
  to: {
    id: string;
    name: string;
    email: string;
    image?: string;
  };
}

async function createMessage(
  messageData: CreateMessageData,
): Promise<MessageRecord> {
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
      messageData as QueryParams,
    );

    if (!result || !result[0] || !result[0].get(0)?.properties) {
      throw new Error("Failed to create message");
    }

    // Increment unread message count for recipient
    await incrementUnreadMessages(messageData.toUserId);

    return result[0].get(0).properties as MessageRecord;
  } catch (error) {
    console.error("Create message error:", error);
    throw error;
  }
}

async function getUnreadMessageCount(userId: string): Promise<number> {
  try {
    const result = await executeQuery(
      `
      MATCH (u:User {id: $userId})
      RETURN u.unreadMessages as count
      `,
      { userId },
    );

    return result[0]?.get(0) || 0;
  } catch (error) {
    console.error("Get unread message count error:", error);
    throw error;
  }
}

async function getUserMessages(userId: string): Promise<MessageRecord[]> {
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
      { userId },
    );

    return result.map((record) => ({
      ...record.get(0).properties,
      from: record.get(1).properties,
      to: record.get(2).properties,
    })) as MessageRecord[];
  } catch (error) {
    console.error("Get user messages error:", error);
    throw error;
  }
}

async function markMessageAsRead(messageId: string): Promise<void> {
  try {
    await executeQuery(
      `
      MATCH (m:Message {id: $messageId})
      SET m.read = true
      `,
      { messageId },
    );
  } catch (error) {
    console.error("Mark message as read error:", error);
    throw error;
  }
}

export {
  createMessage,
  getUnreadMessageCount,
  getUserMessages,
  markMessageAsRead,
  type MessageRecord,
  type CreateMessageData,
};
