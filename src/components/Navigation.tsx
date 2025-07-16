
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-poppins font-bold text-xl text-navy-900">
            Sales Hub Marketing Team
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className={`transition-colors font-medium ${
                isActive('/about') 
                  ? 'text-coral-500' 
                  : 'text-navy-700 hover:text-coral-500'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`transition-colors font-medium ${
                isActive('/services') 
                  ? 'text-coral-500' 
                  : 'text-navy-700 hover:text-coral-500'
              }`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`transition-colors font-medium ${
                isActive('/portfolio') 
                  ? 'text-coral-500' 
                  : 'text-navy-700 hover:text-coral-500'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`transition-colors font-medium ${
                isActive('/contact') 
                  ? 'text-coral-500' 
                  : 'text-navy-700 hover:text-coral-500'
              }`}
            >
              Contact
            </Link>
            <Link to="/contact">
              <Button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                Let's Talk
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy-700 hover:text-coral-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium w-full text-left ${
                  isActive('/about') 
                    ? 'text-coral-500' 
                    : 'text-navy-700 hover:text-coral-500'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium w-full text-left ${
                  isActive('/services') 
                    ? 'text-coral-500' 
                    : 'text-navy-700 hover:text-coral-500'
                }`}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium w-full text-left ${
                  isActive('/portfolio') 
                    ? 'text-coral-500' 
                    : 'text-navy-700 hover:text-coral-500'
                }`}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium w-full text-left ${
                  isActive('/contact') 
                    ? 'text-coral-500' 
                    : 'text-navy-700 hover:text-coral-500'
                }`}
              >
                Contact
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full font-medium w-full mt-2">
                  Let's Talk
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
