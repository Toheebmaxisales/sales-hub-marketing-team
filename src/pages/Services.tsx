
import Navigation from '@/components/Navigation';
import ServicesSection from '@/components/ServicesSection';
import ToolsSection from '@/components/ToolsSection';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navigation />
      <div className="pt-16">
        <ServicesSection />
        <ToolsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
