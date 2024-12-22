import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonLabel: string;
  onButtonClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>

        {/* Price */}
        <p className="text-4xl font-semibold text-gray-800 mt-4">{price}</p>
        <span className="text-sm text-gray-500">per month</span>

        {/* Features */}
        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 text-teal-300 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5l-3-3 1.5-1.5L9 10.5l3.5-3.5L14 8l-5 5z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          onClick={onButtonClick}
          className="mt-6 w-full bg-cyan-400 text-white py-2 px-4 rounded-md hover:bg-green-400 transition-colors duration-300"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
