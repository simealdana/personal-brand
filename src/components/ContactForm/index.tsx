"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Send, Star } from "lucide-react";
import { useContactMe } from "@/hooks/api/useContactMe";

const SparkleEffect = ({ total }: { total: number }) => {
  return [...Array(total)].map((_, i) => {
    const size = Math.random() * 4 + 2;
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 2;

    return (
      <motion.div
        key={`sparkle-form-${i}`}
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
        key={`star-form-${i}`}
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

const ContactForm = () => {
  const { handleContactMe, isLoading: isSubmitting } = useContactMe();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "AI agent",
    message: "",
    subscribe: true,
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    interest?: string;
    message?: string;
    subscribe?: string;
  }>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [submitted, setSubmitted] = useState(false);

  // Validación simple de email
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: {
      name?: string;
      email?: string;
      interest?: string;
      message?: string;
      subscribe?: string;
    } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.interest) newErrors.interest = "Please select your interest";
    if (!formData.subscribe)
      newErrors.subscribe = "You must subscribe to continue";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await handleContactMe(formData);
      setSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          interest: "AI agent",
          message: "",
          subscribe: true,
        });
        setErrors({});
        setSubmitted(false);
      }, 3000);
    } catch {
      setErrors({ message: "Failed to send message. Please try again." });
    }
  };

  // Variantes de animación
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="contact-me"
      className="relative min-h-screen bg-blue-600 py-24 overflow-hidden"
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
        <SparkleEffect total={30} />
        <ShiningStars total={20} />
      </div>

      {/* Content container */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Top floating title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 flex items-center gap-2 border border-white/20">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-base font-medium">
              Get in Touch
            </span>
          </div>
        </motion.div>

        {/* Form container */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="bg-blue-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="bg-green-500/20 p-4 rounded-full mb-4">
                <Star className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-white/80 max-w-md">
                Your message has been sent successfully. I&apos;ll get back to
                you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <>
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-white mb-2 text-center"
              >
                Let&apos;s Work Together
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-white/80 mb-8 text-center"
              >
                Share your project ideas or questions, and I&apos;ll help bring
                your vision to life
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/90 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full p-3 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent placeholder-white/50 text-white"
                  />
                  {errors.name && (
                    <p className="text-yellow-300 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/90 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent placeholder-white/40 text-white"
                  />
                  {errors.email && (
                    <p className="text-yellow-300 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </motion.div>

                {/* Dropdown de interés */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-white/90 mb-1"
                  >
                    What are you interested in?
                  </label>
                  <select
                    name="interest"
                    id="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="block w-full p-3 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent text-white appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1em",
                    }}
                  >
                    <option value="AI agent">AI agent</option>
                    <option value="Aprender a programar con AI">
                      Aprender a programar con AI
                    </option>
                    <option value="saas">SaaS</option>
                    <option value="custom app">Custom app</option>
                    <option value="General consultoria">
                      General consultoria
                    </option>
                  </select>
                  {errors.interest && (
                    <p className="text-yellow-300 text-sm mt-1">
                      {errors.interest}
                    </p>
                  )}
                </motion.div>

                {/* Mensaje */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/90 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent placeholder-white/40 text-white"
                  ></textarea>
                  {errors.message && (
                    <p className="text-yellow-300 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </motion.div>

                {/* Checkbox de Newsletter */}
                <motion.div variants={itemVariants} className="flex flex-col">
                  <div className="flex items-center">
                    <input
                      id="subscribe"
                      name="subscribe"
                      type="checkbox"
                      checked={formData.subscribe}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 border-white/30 rounded bg-white/10 text-yellow-400 focus:ring-yellow-400/50"
                    />
                    <label
                      htmlFor="subscribe"
                      className="ml-2 block text-sm text-white/80"
                    >
                      Subscribe to our newsletter (coming soon!){" "}
                      <span className="text-yellow-400">*</span>
                    </label>
                  </div>
                  {errors.subscribe && (
                    <p className="text-yellow-300 text-sm mt-1">
                      {errors.subscribe}
                    </p>
                  )}
                </motion.div>

                {/* Botón */}
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-full flex items-center justify-center gap-2 font-bold text-blue-600 bg-white hover:bg-white/90 transition-colors relative overflow-hidden group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <>
                        Contact Me
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
