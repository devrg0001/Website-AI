import React from 'react';
import { ArrowRight, Brain, Globe, Clock } from 'lucide-react';
import ImageUpload from '../components/ImageUpload';
import Disclaimer from '../components/Disclaimer';

export default function Home() {
  const testimonials = [
    {
      quote: "HealthAI has revolutionized our diagnostic process, reducing wait times by 60% while maintaining exceptional accuracy.",
      author: "Dr. Sarah Chen",
      role: "Chief of Radiology",
      hospital: "Metropolitan General Hospital"
    },
    {
      quote: "In our rural clinic, access to specialists was always a challenge. HealthAI has been a game-changer for our community.",
      author: "Dr. James Mwangi",
      role: "Medical Director",
      hospital: "Kibera Community Health Center"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
            alt="Medical Technology"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered X-Ray Diagnostics
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Revolutionizing healthcare with advanced machine learning for faster, more accurate diagnoses.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center">
              Learn More <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageUpload />
          <Disclaimer />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HealthAI?</h2>
            <p className="text-xl text-gray-600">Transforming healthcare through innovation and accessibility</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Brain className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Advanced AI Technology</h3>
              <p className="text-gray-600">State-of-the-art machine learning algorithms for accurate disease detection</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Global Accessibility</h3>
              <p className="text-gray-600">Making advanced diagnostics available to healthcare facilities worldwide</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Rapid Results</h3>
              <p className="text-gray-600">Quick and accurate diagnoses to improve patient care efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Trusted by Leading Healthcare Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-blue-600">{testimonial.hospital}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}