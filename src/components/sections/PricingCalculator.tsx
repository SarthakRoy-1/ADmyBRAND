'use client'

import { useState } from "react";

export const PricingCalculator = () => {
  const [users, setUsers] = useState(5);

  const handleChange = (value: number) => {
    const validated = Math.min(Math.max(value, 1), 50); // clamp between 1–50
    setUsers(validated);
  };

  const calculateCost = (plan: string) => {
  switch (plan) {
    case "Basic":
      return 499 + users * 100;
    case "Pro":
      return 999 + users * 200;
    case "Enterprise":
      return 2499 + users * 500;
    default:
      return 0;
  }
};


  return (
    <section id="calculator" className="bg-gradient-to-b from-black to-gray-900 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Pricing Calculator</h2>
        <p className="text-gray-400 mb-8">
          Estimate your monthly cost based on team size and plan.
        </p>

        <div className="flex flex-col gap-6 items-center">
          <label className="text-lg flex flex-col sm:flex-row items-center gap-4">
            <span>Number of users:</span>

            {/* Number input */}
            <input
              type="number"
              min={1}
              max={50}
              value={users}
              onChange={(e) => handleChange(Number(e.target.value))}
              className="w-20 px-2 py-1 rounded bg-white/10 text-white border border-white/20 text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Slider input */}
            <input
              type="range"
              min={1}
              max={50}
              value={users}
              onChange={(e) => handleChange(Number(e.target.value))}
              className="w-64 accent-purple-600"
            />
          </label>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
            {["Basic", "Pro", "Enterprise"].map((plan) => (
              <div key={plan} className="bg-white/10 p-6 rounded-lg text-left shadow-md">
                <h3 className="text-xl font-bold mb-2">{plan} Plan</h3>
                <p className="text-gray-300">Monthly Estimate:</p>
                <p className="text-2xl font-bold text-purple-400">
                  ₹{calculateCost(plan)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
