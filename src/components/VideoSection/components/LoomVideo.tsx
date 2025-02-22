import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const LoomVideo = ({
  url,
  className = "",
  showPlayButton = true,
  containerClassName = "max-w-4xl mx-auto",
}: {
  url: string;
  className?: string;
  showPlayButton?: boolean;
  containerClassName?: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={containerClassName} id="loom-video">
      <motion.div
        className={`relative rounded-2xl overflow-hidden shadow-2xl ${className}`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
          <iframe
            src={url}
            frameBorder="0"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />

          {showPlayButton && (
            <div
              className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <Button
                onClick={() => setIsPlaying(true)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center group"
              >
                <Play className="w-8 h-8 text-white transition-transform group-hover:scale-110" />
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LoomVideo;
