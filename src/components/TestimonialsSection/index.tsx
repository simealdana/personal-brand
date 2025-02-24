"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alex",
    role: "Founder at SimpleTech",
    text: "Simeon's consultation on our AI agent really helped us get started. His advice was practical and easy to implement.",
    image: "/images/testimonial1.png",
  },
  {
    id: 2,
    name: "Beth",
    role: "CEO at Startup Hub",
    text: "Thanks to Simeon's guidance, our SaaS platform launch was smooth and efficient.",
    image: "/images/testimonial2.jpg",
  },
  {
    id: 3,
    name: "Carlos",
    role: "CTO at DevWorks",
    text: "Simeon's insights were exactly what we needed to develop our custom app effectively.",
    image: "/images/testimonial3.jpg",
  },
  {
    id: 4,
    name: "Dana",
    role: "Product Manager at InnovateX",
    text: "I appreciated Simeon's friendly approach and clear advice, which really made a difference for our project.",
    image: "/images/testimonial4.jpg",
  },
  {
    id: 5,
    name: "Eric",
    role: "Entrepreneur at StartSimple",
    text: "Simeon's consultation was straightforward and helpful. It gave us a solid starting point for our digital venture.",
    image: "/images/testimonial5.jpg",
  },
  {
    id: 6,
    name: "Fiona",
    role: "Investor at FutureFund",
    text: "I found Simeon's consulting very promising. His practical tips helped us streamline our digital strategy.",
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
