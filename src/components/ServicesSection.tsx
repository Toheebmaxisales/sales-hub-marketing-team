
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive marketing strategies tailored for creators, entrepreneurs, and ecommerce brands to maximize reach and conversions.',
      features: ['Social Media Marketing', 'Content Strategy', 'Brand Positioning', 'Conversion Optimization'],
      gradient: 'from-coral-500 to-orange-500'
    },
    {
      title: 'Ecommerce Platform Promotion',
      description: 'Specialized promotion and optimization for Shopify, Etsy, Wix stores to drive traffic and increase sales.',
      features: ['Shopify Optimization', 'Etsy SEO & Promotion', 'Wix Store Enhancement', 'Product Launch Campaigns'],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Website Design & Redesign',
      description: 'Modern, conversion-focused website design that reflects your brand identity and drives user engagement.',
      features: ['Custom Web Design', 'Mobile Optimization', 'User Experience (UX)', 'Brand Integration'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'SEO & Traffic Growth',
      description: 'Data-driven SEO strategies to improve search rankings and drive organic traffic to your website.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Local SEO'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Funnel & Email Marketing',
      description: 'Strategic funnel design and email campaigns that nurture leads and convert prospects into loyal customers.',
      features: ['Sales Funnel Design', 'Email Automation', 'Lead Magnets', 'Customer Retention'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive tracking and reporting to measure performance and optimize your marketing investments.',
      features: ['Performance Tracking', 'ROI Analysis', 'Custom Dashboards', 'Monthly Reports'],
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy-900 mb-4">
            Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we provide comprehensive digital marketing and design solutions to grow your business online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-white rounded-md"></div>
                </div>
                
                <h3 className="font-poppins font-semibold text-xl text-navy-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-coral-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="font-poppins font-semibold text-2xl text-navy-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Let's discuss your project and create a custom marketing strategy that drives results.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
