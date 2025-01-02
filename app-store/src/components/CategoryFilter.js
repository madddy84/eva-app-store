import {React, use, useState} from 'react';
import { useEffect } from 'react';
import { getCategories } from '../services/appDataService';


const CategoryFilter = ({ onChange }) => {
  
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => { 
    onChange(selectedCategory);
  }, [selectedCategory]);

  return (
  <div className="flex flex-wrap justify-center gap-2 p-2 bg-white rounded-lg shadow-sm mb-6">
    {categories.map((category) => (
      <button
        key={category.id}
        onClick={() => {
          setSelectedCategory(category.name.toLowerCase())
          
        }}
        className={`px-3 py-1 text-sm rounded-full transition-colors ${
          selectedCategory === category.name.toLowerCase()
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        {category.name}
      </button>
    ))}
  </div>
)};

export default CategoryFilter;