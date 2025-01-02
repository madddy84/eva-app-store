import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import AppCard from './AppCard';
import { getApps } from '../services/appDataService';

const AppList = ({ }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  const calculateFilteredApps = () => {
    setFilteredApps(apps.filter(app =>
      (selectedCategory === "all" || app.category.toLowerCase() === selectedCategory) &&
      (app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.developer.toLowerCase().includes(searchQuery.toLowerCase()))
    ))
  };

  React.useEffect(() => {
    calculateFilteredApps();
    console.log('filteredApps', filteredApps);
    
  }, [apps, selectedCategory, searchQuery]);

  React.useEffect(() => {
    getApps().then((data) => {
      setApps(data);
    });
  }, []);


  return (
      <main className="max-w-7xl mx-auto">

      <SearchBar onSearchChange={setSearchQuery} setShowFilters={() => setShowFilters(!showFilters)} />
      {showFilters && (
        <CategoryFilter
          onChange={(name) => {
            setSelectedCategory(name.toLowerCase());
            calculateFilteredApps();
          }}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </main>
  );
};

export default AppList;