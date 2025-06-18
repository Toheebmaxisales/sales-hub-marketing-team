
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy-900 mb-4">
            Meet the Saleshub Marketing Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate marketers and designers who believe every brand has a unique story worth telling. Our mission is to amplify your voice and drive real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Marketing team collaboration"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-poppins font-semibold text-xl text-navy-900 mb-3">Our Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-coral-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Results-Driven:</strong> Every strategy is designed to deliver measurable growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-coral-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Transparency:</strong> Clear communication and honest reporting always</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-coral-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Innovation:</strong> We stay ahead of trends to give you competitive advantage</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-coral-50 p-6 rounded-xl">
              <h3 className="font-poppins font-semibold text-xl text-navy-900 mb-3">Our Unique Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                We don't believe in one-size-fits-all solutions. Every brand is unique, and so should be their marketing strategy. We take time to understand your business, audience, and goals before crafting a customized plan that drives real results.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-coral-500 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-coral-500 mb-1">15+</div>
                <div className="text-sm text-gray-600">Platforms Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
