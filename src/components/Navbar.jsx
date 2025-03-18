import React, { useState } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#FF8C42]">GharSe</span>
              <span className="text-2xl font-bold text-[#1E5631]">Catering</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#2E2E2E] hover:text-[#FF8C42] px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link to="/chefs" className="text-[#2E2E2E] hover:text-[#FF8C42] px-3 py-2 rounded-md font-medium">
              Chefs
            </Link>
            <Link to="/services" className="text-[#2E2E2E] hover:text-[#FF8C42] px-3 py-2 rounded-md font-medium">
              Services
            </Link>
            <Link to="/about" className="text-[#2E2E2E] hover:text-[#FF8C42] px-3 py-2 rounded-md font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-[#2E2E2E] hover:text-[#FF8C42] px-3 py-2 rounded-md font-medium">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8C42]"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <Link to="/cart" className="text-[#2E2E2E] hover:text-[#FF8C42]">
              <ShoppingBag className="h-6 w-6" />
            </Link>
            <Link to="/login" className="bg-[#FF8C42] text-white px-4 py-2 rounded-full font-medium hover:bg-[#e67e3a] transition duration-300">
              <User className="h-5 w-5 inline mr-1" />
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2E2E2E] hover:text-[#FF8C42] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-[#2E2E2E] hover:text-[#FF8C42] px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link to="/chefs" className="block text-[#2E2E2E] hover:text-[#FF8C42] px-3 py-2 rounded-md font-medium">
              Chefs
            </Link>
            <Link to="/services" className="block text-[#2E2E2E] hover:text-[#FF8C42] px-3 py-2 rounded-md font-medium">
              Services
            </Link>
            <Link to="/about" className="block text-[#2E2E2E] hover:text-[#FF8C42] px-3 py-2 rounded-md font-medium">
              About Us
            </Link>
            <Link to="/contact" className="block text-[#2E2E2E] hover:text-[#FF8C42] px-3 py-2 rounded-md font-medium">
              Contact
            </Link>
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8C42]"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="flex space-x-4 mt-4">
              <Link to="/cart" className="text-[#2E2E2E] hover:text-[#FF8C42]">
                <ShoppingBag className="h-6 w-6" />
              </Link>
              <Link to="/login" className="bg-[#FF8C42] text-white px-4 py-2 rounded-full font-medium hover:bg-[#e67e3a] transition duration-300">
                <User className="h-5 w-5 inline mr-1" />
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;