"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle } from "lucide-react";

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

const InteractiveHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const targetDate = new Date(currentYear, 5, 30, 23, 59, 59); // June 30th (month is 0-indexed)

      // If we're past June 30 of this year, target next year
      if (now > targetDate) {
        targetDate.setFullYear(currentYear + 1);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const handleApplyNow = () => {
    window.location.href = "/apply";
  };

  return (
    <div
      className="relative min-h-screen bg-blue-950 overflow-hidden w-full"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900"
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
        <div className="w-[90%] mx-auto px-4 pt-16 ">
          {/* Limited spots tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start mb-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 flex items-center gap-2 border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-white text-base font-medium">
                Only 12 spots available
              </span>
            </div>
          </motion.div>

          {/* Main content */}
          <div className="relative text-left">
            {/* Main text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Launch Your First AI <br className="hidden sm:block" />
                Agent — With <br className="hidden sm:block" />
                Personal Guidance
              </h1>

              <p className="text-xl sm:text-2xl text-yellow-400 max-w-2xl px-0">
                Get 40% off the AI Crafter Mentorship + early access bonus
              </p>

              <div className="space-y-4 max-w-md">
                <div className="flex items-center gap-3 text-white text-left">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-lg">
                    Weekly 1:1 sessions to build your project
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white text-left">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-lg">
                    Real automation tools (no fluff)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white text-left">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-lg">
                    Personal guidance from idea to launch
                  </span>
                </div>
              </div>

              <div className="flex justify-start mt-8">
                <button
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-opacity-90 transition-all text-base sm:text-lg"
                  onClick={handleApplyNow}
                >
                  Apply Now — Limited Spots
                </button>
              </div>

              <div className="mt-12">
                <p className="text-white/80 mb-4 text-left font-bold">
                  Offer ends in:
                </p>
                <div className="flex gap-4 text-white">
                  <div className="bg-blue-800/50 backdrop-blur-sm rounded-md px-4 py-2 w-16 text-center">
                    <div className="text-2xl font-bold">
                      {timeLeft.days.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs">Days</div>
                  </div>
                  <div className="text-xl font-bold pt-2">:</div>
                  <div className="bg-blue-800/50 backdrop-blur-sm rounded-md px-4 py-2 w-16 text-center">
                    <div className="text-2xl font-bold">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs">Hours</div>
                  </div>
                  <div className="text-xl font-bold pt-2">:</div>
                  <div className="bg-blue-800/50 backdrop-blur-sm rounded-md px-4 py-2 w-16 text-center">
                    <div className="text-2xl font-bold">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs">Mins</div>
                  </div>
                  <div className="text-xl font-bold pt-2">:</div>
                  <div className="bg-blue-800/50 backdrop-blur-sm rounded-md px-4 py-2 w-16 text-center">
                    <div className="text-2xl font-bold">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs">Secs</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHero;
