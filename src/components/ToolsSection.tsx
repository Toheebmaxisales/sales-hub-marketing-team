const ToolsSection = () => {
  const tools = [
    { name: 'Shopify', logo: 'https://i.postimg.cc/fTHsVyXP/download-removebg-preview.png' },
    { name: 'Wix', logo: 'https://i.postimg.cc/0jwSbFXW/WIx-Icon.png' },
    { name: 'Etsy', logo: 'https://i.postimg.cc/xjh36LwQ/Etsy-Icon.png' },
    { name: 'Google Ads', logo: 'https://i.postimg.cc/CL8HXz0q/google-ads-logo-6f18.png' },
    { name: 'Meta Ads', logo: 'https://i.postimg.cc/cJxRvhnR/Meta-ADs-icon.png' },
    { name: 'Klaviyo', logo: 'https://i.postimg.cc/d1XrSKS6/Klaviyo-Icon.png' },
    { name: 'Canva', logo: 'https://i.postimg.cc/ZK6pj2PP/Canva-Icon.png' },
    { name: 'WordPress', logo: 'https://i.postimg.cc/R0pHNB9m/WP-icon.png' },
    { name: 'Mailchimp', logo: 'https://i.postimg.cc/PxL8DRrw/mailchimp-icon.png' },
    { name: 'HubSpot', logo: 'https://i.postimg.cc/XJTBkkpD/Hub-Spot-Simbolo-3806538256.jpg' },
    { name: 'Google Analytics', logo: 'https://i.postimg.cc/9QWRbMQV/google-analytics-logo-icon-169085-2983389703.png' },
    { name: 'Semrush', logo: 'https://i.postimg.cc/MTjvHfd0/semrush-new2210-2329262208.jpg' }
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
                    className="w-full h-full object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
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
