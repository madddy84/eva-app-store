import React, { useState, useRef } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const SearchBar = ({ onSearchChange, setShowFilters }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);

  return (
    <div className="w-full max-w-xl mx-auto p-4 relative">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search apps by name, description, or developer..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setTimeout(() => onSearchChange(e.target.value), 500);
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <button
          onClick={setShowFilters}
          className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          title="Toggle Filters"
        >
          <FaFilter className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;