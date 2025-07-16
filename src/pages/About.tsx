
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navigation />
      <div className="pt-16">
        <AboutSection />
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
