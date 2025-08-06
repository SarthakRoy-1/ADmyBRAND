'use client'
import { features } from "@/data/features";
import { FeatureCard } from "@/components/ui/FeatureCard";

export const Features = () => {
  return (
    <section id="features" className="px-6 py-20 bg-gradient-to-b from-black to-purple-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Powerful AI Features</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          ADmyBRAND AI Suite offers everything you need to automate and scale your marketing.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
