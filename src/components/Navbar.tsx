import React from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Lumion Health</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#plans" className="text-gray-600 hover:text-emerald-600">Plans</a>
            <a href="#benefits" className="text-gray-600 hover:text-emerald-600">Benefits</a>
            <a href="#coverage" className="text-gray-600 hover:text-emerald-600">Coverage</a>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-emerald-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#plans" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Plans</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Benefits</a>
            <a href="#coverage" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Coverage</a>
            <button className="w-full text-left px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}