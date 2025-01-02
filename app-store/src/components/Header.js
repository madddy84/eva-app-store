import React, { useEffect, useState } from 'react';
import UserMenu from './UserMenu';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation().pathname;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Business SaaS Store </h1>
          <UserMenu />
        </div>
        <div className="flex space-x-6">
          <Link to="/" className={`${location === "/" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"} pb-2 font-medium`}>
            Services
          </Link>
          <Link to="/about" className={`${location === "/about" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"} pb-2 font-medium`}>
            About Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;