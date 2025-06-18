
const ToolsSection = () => {
  const tools = [
    { name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
    { name: 'Wix', logo: 'https://static.wixstatic.com/media/9ab0d1_f80a2ccc981548ec84ef6bc06e86afba~mv2.png' },
    { name: 'Etsy', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Etsy-Emblem.png' },
    { name: 'Google Ads', logo: 'https://www.gstatic.com/ads/landing/google_ads_logo.png' },
    { name: 'Meta Ads', logo: 'https://about.fb.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png' },
    { name: 'Klaviyo', logo: 'https://www.klaviyo.com/wp-content/uploads/2023/03/Klaviyo_Logo_Black.png' },
    { name: 'Canva', logo: 'https://1000logos.net/wp-content/uploads/2021/04/Canva-logo.png' },
    { name: 'WordPress', logo: 'https://s.w.org/images/logos/wordpress-logo-32-blue.png' },
    { name: 'Mailchimp', logo: 'https://eep.io/images/yzco4xsimv0y/5HyFVpgm7w5lJD0VzLjLnO/94e36f6cdc0ffc9b97acac7b6b9de9b6/MailchimpAsset_1.png' },
    { name: 'HubSpot', logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png' },
    { name: 'Google Analytics', logo: 'https://www.google.com/analytics/static/4d7b4e8b0e36c2c61ec1ada04e7ae6cc_google-analytics-logo.png' },
    { name: 'Semrush', logo: 'https://www.semrush.com/lp/sem/images/logos/semrush-logo.svg' }
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
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to text if logo fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.textContent = tool.name.charAt(0);
                    }}
                  />
                  <div className="hidden w-16 h-16 bg-coral-500 rounded-xl text-white text-2xl font-bold flex items-center justify-center"></div>
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
