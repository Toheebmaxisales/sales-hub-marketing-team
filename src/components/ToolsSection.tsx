
const ToolsSection = () => {
  const tools = [
    { name: 'Shopify', logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=64&h=64&fit=crop&crop=center' },
    { name: 'Wix', logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=64&h=64&fit=crop&crop=center' },
    { name: 'Etsy', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=64&h=64&fit=crop&crop=center' },
    { name: 'Google Ads', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=64&h=64&fit=crop&crop=center' },
    { name: 'Meta Ads', logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=64&h=64&fit=crop&crop=center' },
    { name: 'Klaviyo', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center' },
    { name: 'Canva', logo: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=64&h=64&fit=crop&crop=center' },
    { name: 'WordPress', logo: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=64&h=64&fit=crop&crop=center' },
    { name: 'Mailchimp', logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=64&h=64&fit=crop&crop=center' },
    { name: 'HubSpot', logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=64&h=64&fit=crop&crop=center' },
    { name: 'Google Analytics', logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop&crop=center' },
    { name: 'Semrush', logo: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&crop=center' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy-900 mb-4">
            Tools & Platforms We Master
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're experts in all the leading platforms and tools that power modern digital marketing and ecommerce success.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                        fallback.textContent = tool.name.charAt(0);
                      }
                    }}
                  />
                  <div className="hidden w-16 h-16 bg-coral-500 rounded-xl text-white text-2xl font-bold flex items-center justify-center">
                    {tool.name.charAt(0)}
                  </div>
                </div>
                <span className="text-sm font-medium text-navy-900 text-center">{tool.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-8 rounded-2xl inline-block">
            <h3 className="font-poppins font-semibold text-2xl mb-4">
              Multi-Platform Expertise
            </h3>
            <p className="mb-6 max-w-2xl opacity-90">
              No matter what platform your business uses, we have the expertise to optimize and scale your presence. 
              Our team stays current with the latest features and best practices across all major platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">Certified Experts</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Latest Updates</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Best Practices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
