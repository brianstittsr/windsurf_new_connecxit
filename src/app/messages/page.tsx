'use client';

import React, { useState } from 'react';
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

interface Message {
  id: number;
  content: string;
  timestamp: string;
  sender: 'user' | 'other';
  read: boolean;
  attachments?: {
    type: 'image' | 'file';
    url: string;
    name: string;
  }[];
}

interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
  typing?: boolean;
}

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [messageInput, setMessageInput] = useState('');
  const [showAttachMenu, setShowAttachMenu] = useState(false);

  const conversations: Conversation[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/images/avatars/sarah.jpg",
      lastMessage: "Perfect, I'll see you then!",
      timestamp: "10:30 AM",
      unread: 2,
      online: true,
      typing: true
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/images/avatars/michael.jpg",
      lastMessage: "Could you share the event details?",
      timestamp: "Yesterday",
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: "Emma Wilson",
      avatar: "/images/avatars/emma.jpg",
      lastMessage: "The photos look amazing!",
      timestamp: "2 days ago",
      unread: 0,
      online: true
    }
  ];

  const messages: Message[] = [
    {
      id: 1,
      content: "Hi! I'm interested in your wedding photography services",
      timestamp: "10:00 AM",
      sender: "other",
      read: true
    },
    {
      id: 2,
      content: "I'd love to help! When is your wedding date?",
      timestamp: "10:05 AM",
      sender: "user",
      read: true
    },
    {
      id: 3,
      content: "It's on June 15th, 2025. Here are some inspiration photos:",
      timestamp: "10:15 AM",
      sender: "other",
      read: true,
      attachments: [
        {
          type: 'image',
          url: '/images/messages/inspiration1.jpg',
          name: 'Wedding Inspiration 1'
        },
        {
          type: 'image',
          url: '/images/messages/inspiration2.jpg',
          name: 'Wedding Inspiration 2'
        }
      ]
    },
    {
      id: 4,
      content: "These are beautiful! I'm available on that date. Would you like to schedule a consultation to discuss your vision in detail?",
      timestamp: "10:25 AM",
      sender: "user",
      read: true
    },
    {
      id: 5,
      content: "Perfect, I'll see you then!",
      timestamp: "10:30 AM",
      sender: "other",
      read: false
    }
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle sending message
      setMessageInput('');
    }
  };

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
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`w-full p-4 flex items-start space-x-3 hover:bg-gray-50 ${
                    selectedConversation === conversation.id ? 'bg-indigo-50' : ''
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={conversation.avatar}
                      alt={conversation.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                    )}
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
                        {conversation.typing ? 'Typing...' : conversation.lastMessage}
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
                    src={conversations[0].avatar}
                    alt={conversations[0].name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h2 className="font-medium text-gray-900">
                      {conversations[0].name}
                    </h2>
                    {conversations[0].online && (
                      <span className="text-sm text-green-500">Online</span>
                    )}
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
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[70%] ${
                        message.sender === 'user'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      } rounded-lg px-4 py-2`}
                    >
                      {message.content}
                      {message.attachments && (
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          {message.attachments.map((attachment, index) => (
                            <div
                              key={index}
                              className="relative h-24 rounded-lg overflow-hidden"
                            >
                              <Image
                                src={attachment.url}
                                alt={attachment.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      <div
                        className={`text-xs mt-1 ${
                          message.sender === 'user'
                            ? 'text-indigo-200'
                            : 'text-gray-500'
                        }`}
                      >
                        {message.timestamp}
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
