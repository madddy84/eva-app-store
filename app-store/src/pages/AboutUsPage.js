import React from 'react';

const AboutUs = () => (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-gray-700 mb-4">
          Welcome to Business SaaS Store, your one-stop destination for enterprise-grade software solutions. We carefully curate and offer the best business applications to help your organization thrive in the digital age.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to simplify the software procurement process for businesses of all sizes. We partner with leading developers to bring you reliable, scalable, and innovative solutions at competitive prices.
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Curated selection of premium business applications</li>
            <li>Competitive pricing and flexible subscription plans</li>
            <li>Dedicated customer support</li>
            <li>Secure payment processing</li>
            <li>Regular updates and new additions to our catalog</li>
          </ul>
        </div>
      </div>
    </div>
);

export default AboutUs;