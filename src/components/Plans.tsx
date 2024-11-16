import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Essential Care',
    price: '149',
    features: [
      'Primary care visits',
      'Emergency services',
      'Preventive care',
      'Basic medications',
      'Virtual consultations',
    ],
    isPopular: false,
  },
  {
    name: 'Family Plus',
    price: '299',
    features: [
      'All Essential Care benefits',
      'Specialist visits',
      'Mental health coverage',
      'Dental & vision',
      'Hospital stays',
      'Extended medication coverage',
    ],
    isPopular: true,
  },
  {
    name: 'Complete Care',
    price: '449',
    features: [
      'All Family Plus benefits',
      'Alternative therapies',
      'International coverage',
      'Medical equipment',
      'Rehabilitation services',
      'Premium provider network',
    ],
    isPopular: false,
  },
];

export default function Plans() {
  return (
    <div id="plans" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Perfect Plan</h2>
          <p className="text-xl text-gray-600">Flexible coverage options that grow with your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg ${
                plan.isPopular ? 'ring-2 ring-emerald-600 shadow-xl' : 'border'
              } p-8 relative`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-0 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-md ${
                  plan.isPopular
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}