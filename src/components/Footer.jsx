import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1E5631] text-[#FFF4E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-[#FFF4E0]">GharSe</span>
              <span className="text-3xl font-bold text-[#FF8C42]">Catering</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Connecting you with authentic home chefs for delicious, homemade food experiences. Perfect for small gatherings, birthdays, poojas, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FF8C42] transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#FF8C42] transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#FF8C42] transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-[#FF8C42] transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/chefs" className="hover:text-[#FF8C42] transition duration-300">Our Chefs</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FF8C42] transition duration-300">Services</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#FF8C42] transition duration-300">Blog</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#FF8C42] transition duration-300">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/birthday" className="hover:text-[#FF8C42] transition duration-300">Birthday Parties</Link>
              </li>
              <li>
                <Link to="/services/pooja" className="hover:text-[#FF8C42] transition duration-300">Pooja & Ceremonies</Link>
              </li>
              <li>
                <Link to="/services/family" className="hover:text-[#FF8C42] transition duration-300">Family Gatherings</Link>
              </li>
              <li>
                <Link to="/services/specials" className="hover:text-[#FF8C42] transition duration-300">Special Occasions</Link>
              </li>
              <li>
                <Link to="/chefs/register" className="hover:text-[#FF8C42] transition duration-300">Become a Chef</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#FF8C42]" />
                <span>123 Foodie Street, Tasty City, India 123456</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#FF8C42]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#FF8C42]" />
                <span>hello@gharsecatering.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FFF4E0]/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm mb-4 sm:mb-0">&copy; {new Date().getFullYear()} GharSeCatering. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm hover:text-[#FF8C42] transition duration-300">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-[#FF8C42] transition duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;