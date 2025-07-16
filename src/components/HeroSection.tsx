
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-coral-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Grow Your Brand with
              <span className="text-coral-500 block">Expert Marketing</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We're the Sales Hub Marketing Team - a results-driven digital marketing and website design team focused on helping creators, entrepreneurs, and ecommerce brands succeed online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 animate-bounce-subtle">
                  Let's Talk Business
                </Button>
              </Link>
              <Button
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                View Our Services
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">200%</div>
                <div className="text-sm">Avg Growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Images */}
          <div className="relative animate-slide-in-right space-y-6">
            {/* First Image Banner */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Digital marketing team working"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-coral-500/20 rounded-2xl"></div>
            </div>

            {/* Second Image Banner */}
            <div className="relative">
              <img
                src="https://i.postimg.cc/LX3scVvb/Sales-dashbaord-2024-shopify.png"
                alt="Sales dashboard 2024 Shopify results"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-coral-500/20 rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl animate-bounce-subtle">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold text-navy-900">+30% Sales</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl animate-bounce-subtle" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-coral-500 rounded-full"></div>
                <span className="text-sm font-semibold text-navy-900">ROI Boost</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
