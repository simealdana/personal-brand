"use client";

import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
  width?: number;
  height?: number;
  className?: string;
  title?: string;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  width = 560,
  height = 315,
  className = "",
  title = "YouTube video player",
}) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?si=gjEs85zjLNQBxUOz`;

  return (
    <div className={`youtube-embed-container ${className}`}>
      <iframe
        width={width}
        height={height}
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default YouTubeEmbed;
