'use client'

import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
  const current = testimonials[index];

  return (
    <section id="testimonials" className="bg-gradient-to-b from-purple-950 to-black text-white px-6 py-20">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">What Customers Say</h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white/5 border border-white/20 rounded-3xl backdrop-blur-md"
            >
              <img
                src={current.photo}
                alt={current.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-lg font-medium text-purple-200 mb-2">
                “{current.quote}”
              </p>
              <p className="text-sm text-gray-300">
                — {current.name}, {current.role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="text-white hover:text-purple-300 transition text-2xl">⬅</button>
            <button onClick={next} className="text-white hover:text-purple-300 transition text-2xl">➡</button>
          </div>
        </div>
      </div>
    </section>
  );
};
