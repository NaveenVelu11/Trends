import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

// NavBar component for navigation and search
const NavBar = () => {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold">
          TrendsAura
        </Link>
        <SearchBar />
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
          <Link to="/categories" className="hover:text-gray-200 transition duration-300">Categories</Link>
          <Link to="/cart" className="hover:text-gray-200 transition duration-300">Cart</Link>
          <Link to="/profile" className="hover:text-gray-200 transition duration-300">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
