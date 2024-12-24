import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">HealthAI</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              About
            </Link>
            <Link to="/investors" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Investors
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}