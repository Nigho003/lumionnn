import React from 'react';
import { Shield, Users, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Affordable Health Coverage for Every Family
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Quality healthcare shouldn't be a luxury. Join thousands of families who trust Lumion Health for their medical coverage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 shadow-lg">
              Get Your Quote
            </button>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-md border-2 border-emerald-600 hover:bg-emerald-50">
              View Plans
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
            <p className="text-gray-600">Full medical coverage including preventive care, medications, and specialists.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <DollarSign className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Affordable Plans</h3>
            <p className="text-gray-600">Flexible payment options and subsidies available for eligible families.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Family First</h3>
            <p className="text-gray-600">Coverage for your entire family with special benefits for children.</p>
          </div>
        </div>
      </div>
    </div>
  );
}