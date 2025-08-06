import { ElementType } from "react";

interface FeatureCardProps {
  icon: ElementType; // ✅ Accepts a component, NOT a string
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white/10 border border-white/20 p-6 rounded-2xl text-white backdrop-blur-md shadow-lg hover:shadow-xl transition-all">
      <Icon className="h-8 w-8 text-purple-400 mb-4" /> {/* ✅ THIS LINE */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};
