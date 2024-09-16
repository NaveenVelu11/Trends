import React from 'react';
import { Link } from 'react-router-dom';

// Footer component with enhanced design and additional sections
const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] from-blue-800 via-purple-800 to-indigo-800 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Brand and Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-4xl font-bold text-black hover:text-yellow-400 transition duration-300">
              TrendsAura
            </Link>
          </div>
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <Link to="/" className="text-sm font-medium text-black hover:text-yellow-400 transition duration-300">
              Home
            </Link>
            <Link to="/categories" className="text-sm font-medium text-black hover:text-yellow-400 transition duration-300">
              Categories
            </Link>
            <Link to="/cart" className="text-sm font-medium text-black hover:text-yellow-400 transition duration-300">
              Cart
            </Link>
            <Link to="/profile" className="text-sm font-medium text-black hover:text-yellow-400 transition duration-300">
              Profile
            </Link>
          </nav>
        </div>
        
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Online Shopping */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">ONLINE SHOPPING</h4>
            <ul className="space-y-2">
              <li><Link to="/men" className="text-sm text-black hover:text-yellow-400 transition duration-300">Men</Link></li>
              <li><Link to="/women" className="text-sm text-black hover:text-yellow-400 transition duration-300">Women</Link></li>
              <li><Link to="/kids" className="text-sm text-black hover:text-yellow-400 transition duration-300">Kids</Link></li>
              <li><Link to="/home-living" className="text-sm text-black hover:text-yellow-400 transition duration-300">Home & Living</Link></li>
              <li><Link to="/beauty" className="text-sm text-black hover:text-yellow-400 transition duration-300">Beauty</Link></li>
              <li><Link to="/gift-cards" className="text-sm text-black hover:text-yellow-400 transition duration-300">Gift Cards</Link></li>
              <li><Link to="/myntra-insider" className="text-sm text-black hover:text-yellow-400 transition duration-300">Fashion Insider</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">USEFUL LINKS</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-sm text-black hover:text-yellow-400 transition duration-300">Blog</Link></li>
              <li><Link to="/careers" className="text-sm text-black hover:text-yellow-400 transition duration-300">Careers</Link></li>
              <li><Link to="/site-map" className="text-sm text-black hover:text-yellow-400 transition duration-300">Site Map</Link></li>
              <li><Link to="/corporate-information" className="text-sm text-black hover:text-yellow-400 transition duration-300">Corporate Information</Link></li>
              <li><Link to="/whitehat" className="text-sm text-black hover:text-yellow-400 transition duration-300">Whitehat</Link></li>
              <li><Link to="/cleartrip" className="text-sm text-black hover:text-yellow-400 transition duration-300">Cleartrip</Link></li>
            </ul>
          </div>

          {/* Customer Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">CUSTOMER POLICIES</h4>
            <ul className="space-y-2">
              <li><Link to="/contact-us" className="text-sm text-black hover:text-yellow-400 transition duration-300">Contact Us</Link></li>
              <li><Link to="/faq" className="text-sm text-black hover:text-yellow-400 transition duration-300">FAQ</Link></li>
              <li><Link to="/terms-and-conditions" className="text-sm text-black hover:text-yellow-400 transition duration-300">T&C</Link></li>
              <li><Link to="/terms-of-use" className="text-sm text-black hover:text-yellow-400 transition duration-300">Terms Of Use</Link></li>
              <li><Link to="/track-orders" className="text-sm text-black hover:text-yellow-400 transition duration-300">Track Orders</Link></li>
              <li><Link to="/shipping" className="text-sm text-black hover:text-yellow-400 transition duration-300">Shipping</Link></li>
              <li><Link to="/cancellation" className="text-sm text-black hover:text-yellow-400 transition duration-300">Cancellation</Link></li>
              <li><Link to="/returns" className="text-sm text-black hover:text-yellow-400 transition duration-300">Returns</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-black hover:text-yellow-400 transition duration-300">Privacy Policy</Link></li>
              <li><Link to="/grievance-officer" className="text-sm text-black hover:text-yellow-400 transition duration-300">Grievance Officer</Link></li>
            </ul>
          </div>
        </div>

        {/* Keep in Touch */}
        <div className="text-center text-sm text-black mb-8">
          <p className="mb-2">100% ORIGINAL guarantee for all products at TrendsAura.com</p>
          <p>Return within 14 days of receiving your order</p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} TrendsAura. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
