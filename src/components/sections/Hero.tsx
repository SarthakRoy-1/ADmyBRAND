'use client'

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-black via-purple-900 to-black text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        ADmyBRAND AI Suite
      </motion.h1>

      <p className="max-w-xl text-lg text-gray-300 mb-8">
        Supercharge your marketing campaigns with real-time insights, AI-generated content, and automated optimizations.
      </p>

      <Button>Get Started</Button>
    </section>
  );
};
