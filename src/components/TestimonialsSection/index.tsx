"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Client A",
    role: "Founder at Startup A",
    text: "They delivered beyond expectations!",
    image: "/images/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Client B",
    role: "CEO at Company B",
    text: "An outstanding experience from start to finish.",
    image: "/images/testimonial2.jpg",
  },
  {
    id: 3,
    name: "Client C",
    role: "CTO at Tech C",
    text: "Innovative solutions that boosted our growth.",
    image: "/images/testimonial3.jpg",
  },
  {
    id: 4,
    name: "Client D",
    role: "Product Lead at D-Tech",
    text: "Remarkable insights and hands-on guidance.",
    image: "/images/testimonial4.jpg",
  },
  {
    id: 5,
    name: "Client E",
    role: "Entrepreneur at E Ventures",
    text: "Professional and creative. Highly recommended!",
    image: "/images/testimonial5.jpg",
  },
  {
    id: 6,
    name: "Client F",
    role: "Investor at Fund F",
    text: "A game-changer for our portfolio companies.",
    image: "/images/testimonial6.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          What Clients Are Saying
        </h2>
        <p className="text-xl text-gray-600 mt-4">
          A glimpse into real success stories
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.id}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>
            <p className="text-gray-600 text-center italic">
              &quot;{testimonial.text}&quot;
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
