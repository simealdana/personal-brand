"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  Star,
  CheckCircle,
  Clock,
  Users,
  Target,
} from "lucide-react";

const SparkleEffect = ({ total }: { total: number }) => {
  return [...Array(total)].map((_, i) => {
    const size = Math.random() * 4 + 2;
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 2;

    return (
      <motion.div
        key={`sparkle-${i}`}
        className={`absolute rounded-full ${
          Math.random() > 0.5 ? "bg-white" : "bg-yellow-300"
        }`}
        style={{
          width: size,
          height: size,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.2,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
          scale: [1, Math.random() + 0.2],
          opacity: [null, 0.1, 0.5],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
          delay: delay,
          ease: "easeInOut",
        }}
      />
    );
  });
};

const ShiningStars = ({ total }: { total: number }) => {
  return [...Array(total)].map((_, i) => {
    const size = Math.random() * 3 + 1;
    return (
      <motion.div
        key={`star-${i}`}
        className="absolute bg-white rounded-full"
        style={{
          width: size,
          height: size,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    );
  });
};

const FloatingTag = ({
  icon: Icon,
  text,
  className = "",
}: {
  icon: React.ElementType;
  text: string;
  className?: string;
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ y: [-5, 5] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <div className="bg-white/10 backdrop-blur-sm rounded-full py-2 px-4 flex items-center gap-2 border border-white/20 shadow-lg whitespace-nowrap">
      <Icon className="w-4 h-4 text-yellow-400" />
      <span className="text-white text-sm font-medium">{text}</span>
    </div>
  </motion.div>
);

const InteractiveHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [words] = useState([
    "App Developer",
    "AI Innovator",
    "Digital Creator",
    "Tech Entrepreneur",
    "Startup Founder",
  ]);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const handleContactMe = () => {
    const currentUrl = window.location.href;
    if (currentUrl.includes("#contact-me")) {
      window.location.href = currentUrl.replace("#contact-me", "");
    } else {
      window.location.href = `${currentUrl}#contact-me`;
    }
  };

  return (
    <div
      className="relative min-h-screen bg-blue-600 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-500"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${
            mousePosition.y * 10
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Sparkle effects */}
      <div className="absolute inset-0">
        <SparkleEffect total={40} />
        <ShiningStars total={30} />
      </div>

      {/* Content container */}
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 pt-16">
          {/* Top floating tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 flex items-center gap-2 border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-white text-base font-medium">
                Digital Product Consulting
              </span>
            </div>
          </motion.div>

          {/* Main content with floating tags */}
          <div className="relative text-center">
            {/* Floating tags for large screens */}
            <FloatingTag
              icon={Star}
              text="Innovation"
              className="hidden lg:flex -top-32 -left-32"
            />
            <FloatingTag
              icon={Clock}
              text="Expert Guidance"
              className="hidden lg:flex -top-40 -right-32"
            />
            <FloatingTag
              icon={Rocket}
              text="Digital Strategy"
              className="hidden lg:flex top-1/3 -right-48"
            />
            <FloatingTag
              icon={Users}
              text="Creative Solutions"
              className="hidden lg:flex -bottom-24 -left-24"
            />
            <FloatingTag
              icon={CheckCircle}
              text="Proven Results"
              className="hidden lg:flex bottom-1/3 -left-48"
            />
            <FloatingTag
              icon={Target}
              text="Growth Focus"
              className="hidden lg:flex -bottom-24 -right-24"
            />

            {/* Floating tags for mobile */}
            <div className="grid grid-cols-2 gap-3 mb-8 lg:hidden">
              <FloatingTag
                icon={Star}
                text="Innovation"
                className="relative !static"
              />
              <FloatingTag
                icon={Clock}
                text="Expert Guidance"
                className="relative !static"
              />
              <FloatingTag
                icon={Rocket}
                text="Digital Strategy"
                className="relative !static"
              />
              <FloatingTag
                icon={Users}
                text="Creative Solutions"
                className="relative !static"
              />
            </div>

            {/* Main text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I&apos;m Simeon
              </h1>
              <div className="h-20 sm:h-24 flex items-center justify-center">
                <motion.div
                  key={currentWord}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
                >
                  {words[currentWord]}
                </motion.div>
              </div>

              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto px-4">
                Welcome to my consulting hub. I help digital creators turn ideas
                into successful digital products. Whether you&apos;re building
                an app, an AI agent, or any innovative solution, let&apos;s
                collaborate to bring your vision to life.
              </p>

              <div className="flex justify-center gap-4 px-4">
                <button
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-opacity-90 transition-all text-base sm:text-lg"
                  onClick={handleContactMe}
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHero;
