'use client'

import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Maximizing ROI with AI Marketing Tools",
    description: "Discover how AI is changing the future of content creation, targeting, and conversion rates.",
    link: "#",
  },
  {
    title: "Why SaaS Needs Better UX in 2025",
    description: "A look at top design trends and how they increase trust, reduce churn, and drive signups.",
    link: "#",
  },
  {
    title: "Behind the Build: ADmyBRAND AI Suite",
    description: "How we designed and built this modern SaaS landing page using Next.js and Tailwind.",
    link: "#",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">From the Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-lg text-left shadow-md hover:bg-white/20 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <a href={post.link} className="text-purple-400 hover:underline text-sm font-medium">
                Read more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
