'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPaperclip,
  faPaperPlane,
  faEllipsisV,
  faVideo,
  faPhone,
  faImage,
  faFile,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { getUserMessages, createMessage, markMessageAsRead } from '@/services/messageService';
import { resetUnreadMessages } from '@/services/userService';

interface CustomSession extends Session {
  user: {
    id: string;
    role: string;
    email?: string | null;
    name?: string | null;
    image?: string | null;
  };
}

interface Message {
  id: string;
  content: string;
  createdAt: string;
  read: boolean;
  from: {
    id: string;
    name: string;
    image: string;
  };
  to: {
    id: string;
    name: string;
    image: string;
  };
}

interface Conversation {
  userId: string;
  name: string;
  image: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

export default function MessagesPage() {
  const { data: session, status } = useSession() as { data: CustomSession | null, status: string };
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMessages = useCallback(async () => {
    if (!session?.user?.id) return;
    
    try {
      const allMessages = await getUserMessages(session.user.id);
      
      // Group messages by conversation
      const conversationsMap = new Map<string, Conversation>();
      
      allMessages.forEach((message: Message) => {
        const otherUser = message.from.id === session.user.id ? message.to : message.from;
        const conversationId = otherUser.id;
        
        if (!conversationsMap.has(conversationId)) {
          conversationsMap.set(conversationId, {
            userId: otherUser.id,
            name: otherUser.name,
            image: otherUser.image || '/images/avatars/default.jpg',
            lastMessage: message.content,
            timestamp: new Date(message.createdAt).toLocaleString(),
            unread: message.from.id !== session.user.id && !message.read ? 1 : 0
          });
        } else {
          const conv = conversationsMap.get(conversationId)!;
          if (message.from.id !== session.user.id && !message.read) {
            conv.unread += 1;
          }
        }
      });
      
      setConversations(Array.from(conversationsMap.values()));
      
      if (selectedConversation) {
        const conversationMessages = allMessages.filter((message: Message) => 
          message.from.id === selectedConversation || message.to.id === selectedConversation
        );
        setMessages(conversationMessages);
      }
      setError(null);
    } catch (err) {
      console.error('Error loading messages:', err);
      setError('Failed to load messages');
    } finally {
      setLoading(false);
    }
  }, [session, selectedConversation]);

  useEffect(() => {
    if (status === 'authenticated') {
      loadMessages();
    }
  }, [status, loadMessages]);

  useEffect(() => {
    if (selectedConversation) {
      resetUnreadMessages(session?.user?.id).catch(console.error);
    }
  }, [selectedConversation, session?.user?.id]);

  const handleSendMessage = async () => {
    if (!messageInput.trim() || !selectedConversation || !session?.user?.id) return;

    try {
      await createMessage({
        content: messageInput,
        fromUserId: session.user.id,
        toUserId: selectedConversation
      });
      
      setMessageInput('');
      loadMessages();
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleConversationSelect = async (userId: string) => {
    setSelectedConversation(userId);
    try {
      const conversationMessages = messages.filter(message => 
        message.from.id === userId || message.to.id === userId
      );
      
      // Mark unread messages as read
      const unreadMessages = conversationMessages.filter(message => 
        !message.read && message.from.id === userId
      );
      
      await Promise.all(unreadMessages.map(message => markMessageAsRead(message.id)));
      
      loadMessages();
    } catch (error) {
      console.error('Failed to load conversation:', error);
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return <div>Please sign in to view messages</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="h-[calc(100vh-4rem)] flex">
          {/* Conversations Sidebar */}
          <div className="w-80 bg-white border-r">
            {/* Search */}
            <div className="p-4 border-b">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            {/* Conversations List */}
            <div className="overflow-y-auto h-[calc(100vh-8rem)]">
              {conversations.map((conversation) => (
                <button
                  key={conversation.userId}
                  onClick={() => handleConversationSelect(conversation.userId)}
                  className={`w-full p-4 flex items-start space-x-3 hover:bg-gray-50 ${
                    selectedConversation === conversation.userId ? 'bg-indigo-50' : ''
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={conversation.image}
                      alt={conversation.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">
                        {conversation.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {conversation.timestamp}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 truncate">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread > 0 && (
                        <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-indigo-600 rounded-full">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          {selectedConversation ? (
            <div className="flex-1 flex flex-col bg-white">
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src={conversations.find(conv => conv.userId === selectedConversation)?.image}
                    alt={conversations.find(conv => conv.userId === selectedConversation)?.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h2 className="font-medium text-gray-900">
                      {conversations.find(conv => conv.userId === selectedConversation)?.name}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="p-2 text-gray-500 hover:text-gray-600 rounded-full hover:bg-gray-100">
                    <FontAwesomeIcon icon={faPhone} />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-600 rounded-full hover:bg-gray-100">
                    <FontAwesomeIcon icon={faVideo} />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-600 rounded-full hover:bg-gray-100">
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.from.id === session?.user?.id ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[70%] ${
                        message.from.id === session?.user?.id
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      } rounded-lg px-4 py-2`}
                    >
                      {message.content}
                      <div
                        className={`text-xs mt-1 ${
                          message.from.id === session?.user?.id
                            ? 'text-indigo-200'
                            : 'text-gray-500'
                        }`}
                      >
                        {new Date(message.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex items-end space-x-4">
                  <div className="relative">
                    <button
                      onClick={() => setShowAttachMenu(!showAttachMenu)}
                      className="p-2 text-gray-500 hover:text-gray-600 rounded-full hover:bg-gray-100"
                    >
                      <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                    {showAttachMenu && (
                      <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg border p-2">
                        <div className="space-y-2">
                          <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                            <FontAwesomeIcon icon={faImage} />
                            <span>Image</span>
                          </button>
                          <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                            <FontAwesomeIcon icon={faFile} />
                            <span>File</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex items-end">
                    <div className="flex-1 relative">
                      <textarea
                        rows={1}
                        placeholder="Type a message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                      />
                      <button className="absolute right-2 bottom-2 p-1 text-gray-400 hover:text-gray-600">
                        <FontAwesomeIcon icon={faSmile} />
                      </button>
                    </div>
                    <button
                      onClick={handleSendMessage}
                      className="ml-4 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-white">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Select a conversation
                </h3>
                <p className="text-gray-500">
                  Choose a conversation from the list to start messaging
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
