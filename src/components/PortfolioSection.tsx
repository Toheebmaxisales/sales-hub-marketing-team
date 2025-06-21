
import { Card, CardContent } from '@/components/ui/card';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Ecommerce Store Redesign',
      category: 'Shopify Design',
      description: 'Complete redesign of a fashion ecommerce store resulting in 150% increase in conversions.',
      image: 'https://i.postimg.cc/VLdxpTx3/WEB-design.png',
      results: ['150% Conversion Increase', '300% Traffic Growth', '45% Lower Bounce Rate'],
      tags: ['Shopify', 'UX Design', 'Conversion Optimization']
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Social Media Marketing',
      description: 'Multi-platform campaign for a tech startup that generated 500+ qualified leads in 3 months.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['500+ Qualified Leads', '200% ROI', '1M+ Impressions'],
      tags: ['Social Media', 'Lead Generation', 'PPC']
    },
    {
      title: 'Brand Identity & Website',
      category: 'Brand Design',
      description: 'Complete brand identity and website development for a luxury wellness brand.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['Brand Recognition +80%', 'Premium Positioning', 'Award-Winning Design'],
      tags: ['Branding', 'Web Design', 'Luxury']
    },
    {
      title: 'Etsy Store Optimization and Marketing result',
      category: 'Ecommerce Growth',
      description: 'SEO and listing optimization for handmade jewelry store on Etsy marketplace.',
      image: 'https://i.postimg.cc/2Sd2K7Ss/salu-sales-2025.png',
      results: ['400% Sales Increase', 'Top 10 Rankings', '50+ 5-Star Reviews'],
      tags: ['Etsy SEO', 'Product Optimization', 'Marketplace']
    },
    {
      title: 'SaaS Email Marketing',
      category: 'Email Automation',
      description: 'Email marketing automation system for B2B SaaS company improving customer retention.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['35% Higher Retention', '25% More Upsells', '60% Open Rates'],
      tags: ['Email Marketing', 'Automation', 'SaaS']
    },
    {
      title: 'Local Business Growth',
      category: 'Local SEO',
      description: 'Local SEO and Google Ads campaign for restaurant chain across 5 locations.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['300% Local Visibility', '50% More Reservations', '5-Star Average Rating'],
      tags: ['Local SEO', 'Google Ads', 'Restaurant']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy-900 mb-4">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real projects, real results. See how we've helped businesses like yours achieve extraordinary growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border-0"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-coral-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-navy-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-navy-900 text-sm mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to see more detailed case studies?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
          >
            Request Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
