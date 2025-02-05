'use client';

import { useState } from 'react';
import { tagCategories } from '@/utils/eventTags';

interface EventDetailEventTagsProps {
  initialTags?: string[];
  onTagsChange?: (tags: string[]) => void;
}

export default function EventDetailEventTags({
  initialTags = [],
  onTagsChange
}: EventDetailEventTagsProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [customTag, setCustomTag] = useState('');

  const handleTagClick = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newTags);
    onTagsChange?.(newTags);
  };

  const handleAddCustomTag = () => {
    if (customTag && !selectedTags.includes(customTag)) {
      const newTags = [...selectedTags, customTag.startsWith('#') ? customTag : `#${customTag}`];
      setSelectedTags(newTags);
      onTagsChange?.(newTags);
      setCustomTag('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddCustomTag();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tags</h2>
        
        {/* Selected Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800 hover:bg-purple-200"
            >
              {tag}
              <span className="ml-2 text-purple-600">&times;</span>
            </button>
          ))}
        </div>

        {/* Add Custom Tag */}
        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={customTag}
              onChange={(e) => setCustomTag(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add custom tag..."
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
            <button
              onClick={handleAddCustomTag}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Add Tag
            </button>
          </div>
        </div>

        {/* Tag Categories */}
        <div className="space-y-6">
          {tagCategories.map((category) => (
            <div key={category.id} className="space-y-2">
              <button
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                <span className="ml-2 text-gray-500">
                  {selectedCategory === category.id ? '−' : '+'}
                </span>
              </button>
              
              {selectedCategory === category.id && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        selectedTags.includes(tag)
                          ? 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
