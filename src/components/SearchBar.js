import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// SearchBar component for handling search queries
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-1 max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full px-4 py-2 border border-gray-300 rounded-l-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
