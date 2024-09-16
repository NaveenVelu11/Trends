import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaUserCircle, FaHeart, FaSearch } from 'react-icons/fa'; // Import the bag icon
import logo from '../Assets/brand.png'; // Importing the logo

const Header = () => {
  return (
    <header className="bg-white shadow-lg py-2 sticky top-0 z-50 border-b border-gray-200">
      <div className="bg-[#F5F5F5] py-1 px-6 rounded-lg max-w-screen-xl mx-auto flex items-center justify-between">
        
        {/* Logo with increased spacing */}
        <Link to="/" className="flex items-center mr-8">
          <img src={logo} alt="TrendAura Logo" className="h-12" />
        </Link>

        {/* Navigation links for categories */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-800 flex-grow">
          <Link to="/men" className="hover:text-[#3454D1] transition duration-300">MEN</Link>
          <Link to="/women" className="hover:text-[#3454D1] transition duration-300">WOMEN</Link>
          <Link to="/kids" className="hover:text-[#3454D1] transition duration-300">KIDS</Link>
        </nav>

        {/* Centered caption */}
        <div className="flex-grow text-center">
          <span className="text-3xl lg:text-4xl  font-semibold text-gray-800">TrendAura</span>
        </div>

        {/* Search Bar with reduced width and search icon */}
        <div className="flex items-center space-x-4 flex-grow justify-center md:justify-end">
          <div className="relative flex items-center w-full max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3454D1] focus:border-transparent"
            />
            <FaSearch className="absolute left-3 text-gray-500" />
          </div>

          {/* Icons for Profile, Wishlist, and Bag */}
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="flex items-center text-gray-600 hover:text-[#3454D1] transition duration-300">
              <FaUserCircle className="text-xl md:text-1xl" />
              <span className="ml-2 text-sm hidden md:inline">Profile</span>
            </Link>
            <Link to="/wishlist" className="flex items-center text-gray-600 hover:text-[#3454D1] transition duration-300">
              <FaHeart className="text-xl md:text-1xl" />
              <span className="ml-2 text-sm hidden md:inline">Wishlist</span>
            </Link>
            <Link to="/cart" className="relative flex items-center text-gray-600 hover:text-[#3454D1] transition duration-300">
              <FaShoppingBag className="text-xl md:text-1xl" />
              {/* Improved bag item display */}
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2 py-0.5"></span>
              <span className="ml-2 text-sm hidden md:inline">Bag</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
