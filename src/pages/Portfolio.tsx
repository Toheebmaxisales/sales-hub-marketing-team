
import Navigation from '@/components/Navigation';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navigation />
      <div className="pt-16">
        <PortfolioSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
