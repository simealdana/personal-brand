"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle } from "lucide-react";
import StarBackground from "../StarBackground";
import Image from "next/image";

const InteractiveHero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const handleApplyNow = () => {
    window.location.href = "/apply";
  };

  return (
    <StarBackground className="min-h-screen bg-blue-950">
      <div className="relative min-h-screen w-full">
        {/* Content container */}
        <div className="relative flex items-center justify-center min-h-screen">
          <div className="w-[90%] mx-auto px-4 pt-16">
            {/* Limited spots tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start mb-4 "
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 flex items-center gap-2 border border-white/20">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-white text-base font-medium">
                  Only 12 spots available
                </span>
              </div>
            </motion.div>

            {/* Main content */}
            <div className="relative text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Main text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
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
                    Get Access
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

              {/* Instructor Image with Blob Shape */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden lg:flex justify-center items-center"
              >
                <div className="relative w-full max-w-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/0 via-blue-500/10 to-blue-950/0 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-950/0 rounded-full blur-2xl"></div>
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: "120%",
                      height: "120%",
                      borderRadius: "60% 40% 70% 30% / 60% 30% 70% 40%",
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-full h-full bg-gradient-to-r from-blue-800/30 to-blue-600/30 animate-pulse"
                          style={{
                            borderRadius: "60% 40% 70% 30% / 60% 30% 70% 40%",
                          }}
                        >
                          <div
                            className="h-full w-full bg-gradient-to-tr from-blue-500/10 to-transparent animate-pulse"
                            style={{
                              animationDuration: "1.5s",
                              animationDelay: "0.2s",
                            }}
                          ></div>
                          <div
                            className="absolute inset-0 bg-gradient-to-bl from-transparent to-blue-500/10 animate-pulse"
                            style={{
                              animationDuration: "2s",
                              animationDelay: "0.5s",
                            }}
                          ></div>
                        </div>
                      </div>
                    )}
                    <Image
                      src="/images/instructor.jpeg"
                      alt="Simeon - AI Instructor"
                      width={700}
                      height={900}
                      className={`object-cover w-full h-full transition-opacity duration-500 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      priority
                      onLoad={() => setImageLoaded(true)}
                      onError={() => {
                        console.log("Image failed to load");
                        setImageLoaded(true); // Show error state instead of infinite loading
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-blue-950/80"></div>
                  </div>
                  <div className="absolute -inset-10 bg-blue-500/5 blur-3xl rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </StarBackground>
  );
};

export default InteractiveHero;
