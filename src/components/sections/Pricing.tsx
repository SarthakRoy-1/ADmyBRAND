'use client'

import { useState } from "react";
import { pricingPlans } from "@/data/pricing";
import { PricingCard } from "@/components/ui/PricingCard";

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("Pro");

  return (
    <section id="pricing" className="px-6 py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Choose Your Plan</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Flexible pricing to suit businesses of all sizes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => {
            const isSelected = selectedPlan === plan.title;

            return (
              <div
                key={idx}
                onClick={() => setSelectedPlan(plan.title)}
                className={`cursor-pointer relative rounded-2xl transition transform hover:scale-105 border ${
                  isSelected
                    ? "bg-purple-800 border-purple-400 shadow-lg scale-105"
                    : "bg-white/10 border-white/10"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-3 right-3 text-xs bg-white text-purple-800 font-bold px-2 py-1 rounded">
                    SELECTED
                  </span>
                )}

                <PricingCard
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                  featured={plan.featured}
                  selected={isSelected} // 👈 pass selected flag
                />
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-purple-300">
          Selected Plan: <span className="font-semibold">{selectedPlan}</span>
        </p>
      </div>
    </section>
  );
};
