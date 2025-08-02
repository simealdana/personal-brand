"use client";

import React, { useEffect, useRef } from "react";

interface RedditEmbedProps {
  url: string;
  height?: number;
  className?: string;
}

export const RedditEmbed: React.FC<RedditEmbedProps> = ({
  url,
  height = 316,
  className = "",
}) => {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Reddit embed script
    const script = document.createElement("script");
    script.src = "https://embed.reddit.com/widgets.js";
    script.async = true;
    script.charset = "UTF-8";

    document.head.appendChild(script);

    // Create the embed element
    if (embedRef.current) {
      const blockquote = document.createElement("blockquote");
      blockquote.className = "reddit-embed-bq";
      blockquote.style.height = `${height}px`;
      blockquote.setAttribute("data-embed-height", height.toString());

      const link = document.createElement("a");
      link.href = url;
      link.textContent = "Loading Reddit post...";

      blockquote.appendChild(link);
      embedRef.current.appendChild(blockquote);
    }

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (embedRef.current) {
        embedRef.current.innerHTML = "";
      }
    };
  }, [url, height]);

  return (
    <div
      ref={embedRef}
      className={`reddit-embed-container ${className}`}
      style={{ minHeight: `${height}px` }}
    />
  );
};

export default RedditEmbed;
