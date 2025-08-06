interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  selected?: boolean;
}

export const PricingCard = ({
  title,
  price,
  features,
  selected = false,
}: PricingCardProps) => {
  return (
    <div className="flex flex-col items-center p-8 text-white">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-4xl font-extrabold mb-6">{price}</p>

      <ul className="mb-8 space-y-2 text-sm text-gray-300">
        {features.map((feature, idx) => (
          <li key={idx}>✅ {feature}</li>
        ))}
      </ul>

      <button
        className={`px-6 py-2 rounded-lg text-sm font-semibold transition ${
          selected
            ? "bg-white text-purple-900 hover:bg-gray-100"
            : "bg-purple-700 text-white hover:bg-purple-600"
        }`}
      >
        {selected ? "Current Plan" : "Choose Plan"}
      </button>
    </div>
  );
};
