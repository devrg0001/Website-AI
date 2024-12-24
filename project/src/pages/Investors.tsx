import React from 'react';
import { TrendingUp, Users, DollarSign, BarChart } from 'lucide-react';

export default function Investors() {
  const metrics = [
    { icon: Users, label: "Healthcare Facilities", value: "500+", growth: "+45% YoY" },
    { icon: BarChart, label: "Diagnostic Accuracy", value: "99.2%", growth: "+2.5% YoY" },
    { icon: DollarSign, label: "Cost Reduction", value: "60%", growth: "Per diagnosis" },
    { icon: TrendingUp, label: "Market Growth", value: "125%", growth: "Projected 2024" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl text-gray-300 mb-8">
              Join us in revolutionizing healthcare diagnostics and creating global impact through AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {metrics.map((Metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Metric.icon className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-600">{Metric.label}</p>
                <p className="text-3xl font-bold text-gray-900">{Metric.value}</p>
                <p className="text-green-600">{Metric.growth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Model Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Financial Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Revenue Model</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Per-scan licensing model</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Enterprise subscriptions</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>API access for integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Market Opportunity</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>$50B+ Global diagnostic imaging market</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Growing at 7% CAGR</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Expanding telemedicine sector</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Interested in Investing?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our investor relations team to learn more about investment opportunities.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
            Request Investor Package
          </button>
        </div>
      </section>
    </div>
  );
}