'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { getVideoType, getYoutubeVideoId, getVimeoVideoId, allowedVideoTypes } from '@/utils/videoUtils';

interface EventDetailVideoProps {
  initialVideoUrl?: string;
  title: string;
  onVideoChange?: (videoData: { url?: string; file?: File }) => void;
}

export default function EventDetailVideo({
  initialVideoUrl,
  title = 'Find a Job at Best Hire Career Fairs - Job Fairs & Hiring Events',
  onVideoChange
}: EventDetailVideoProps) {
  const [videoUrl, setVideoUrl] = useState(initialVideoUrl || '');
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setVideoUrl(url);
    setUploadedVideo(null);
    setError('');

    if (url && onVideoChange) {
      onVideoChange({ url });
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!allowedVideoTypes.includes(file.type)) {
      setError('Please upload a valid video file (MP4, WebM, or OGG)');
      return;
    }

    setUploadedVideo(file);
    setVideoUrl('');
    setError('');

    if (onVideoChange) {
      onVideoChange({ file });
    }
  };

  const renderVideo = () => {
    if (uploadedVideo) {
      return (
        <video
          className="absolute top-0 left-0 w-full h-full"
          controls
          src={URL.createObjectURL(uploadedVideo)}
        >
          Your browser does not support the video tag.
        </video>
      );
    }

    if (videoUrl) {
      const videoType = getVideoType(videoUrl);
      
      if (videoType === 'youtube') {
        const videoId = getYoutubeVideoId(videoUrl);
        if (!videoId) return null;
        
        return (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
      }
      
      if (videoType === 'vimeo') {
        const videoId = getVimeoVideoId(videoUrl);
        if (!videoId) return null;
        
        return (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://player.vimeo.com/video/${videoId}`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        );
      }
      
      if (videoType === 'direct') {
        return (
          <video
            className="absolute top-0 left-0 w-full h-full"
            controls
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        );
      }
    }

    return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">No video selected</p>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Input Controls */}
        <div className="space-y-4">
          <div>
            <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700">
              Video URL (YouTube, Vimeo, or direct video link)
            </label>
            <input
              type="url"
              id="videoUrl"
              value={videoUrl}
              onChange={handleUrlChange}
              placeholder="https://youtube.com/..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-500 text-sm mx-4">OR</span>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Video
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 cursor-pointer"
                 onClick={() => fileInputRef.current?.click()}>
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Upload a file</span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="sr-only"
                      accept="video/*"
                      onChange={handleFileUpload}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">MP4, WebM, or OGG</p>
              </div>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
        </div>

        {/* Video Container */}
        <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg bg-black">
          {renderVideo()}
        </div>
      </div>
    </div>
  );
}
