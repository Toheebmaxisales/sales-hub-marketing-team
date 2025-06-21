
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-poppins font-bold text-xl text-navy-900">
            Sales Hub Marketing Team
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-navy-700 hover:text-coral-500 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-navy-700 hover:text-coral-500 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-navy-700 hover:text-coral-500 transition-colors font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-navy-700 hover:text-coral-500 transition-colors font-medium"
            >
              Testimonials
            </button>
            <Button
              onClick={() => {
                // Scroll to footer where the email is located
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Let's Talk
            </Button>
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
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-navy-700 hover:text-coral-500 font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-navy-700 hover:text-coral-500 font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block px-3 py-2 text-navy-700 hover:text-coral-500 font-medium w-full text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-navy-700 hover:text-coral-500 font-medium w-full text-left"
              >
                Testimonials
              </button>
              <Button
                onClick={() => {
                  // Scroll to footer where the email is located
                  const footer = document.querySelector('footer');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full font-medium w-full mt-2"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
