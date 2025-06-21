import { User } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ismail Talha",
      role: "Digital Marketing Strategist",
      description: "Specializes in ecommerce growth and conversion optimization with 6+ years of experience.",
      image: "https://i.postimg.cc/bwFx2pYg/Ismail.png"
    },
    {
      id: 2,
      name: "Maximilian Toheeb",
      role: "Web Design Lead",
      description: "Expert in Shopify, Wix, and custom website design with a focus on user experience.",
      image: "https://i.postimg.cc/wMKFRHVZ/Maximillian-Toheeb.jpg"
    },
    {
      id: 3,
      name: "Temitope Alani",
      role: "SEO & Content Specialist",
      description: "Drives organic traffic growth through strategic SEO and compelling content creation.",
      image: "https://i.postimg.cc/Gphfbc7j/Temitope-Alani.jpg"
    },
    {
      id: 4,
      name: "Samson",
      role: "Shopify Development Expert",
      description: "Builds high-converting Shopify stores and custom solutions for ecommerce success.",
      image: "https://i.postimg.cc/mrCP2sPt/Samson.png"
    }
  ];

  const additionalMembers = [
    "Wariz Pro",
    "Folakeprosales",
    "Fawas",
    "Basit MKT",
    "Emmanuel Simon",
    "Aishat PromMKT"
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Talented professionals dedicated to growing your brand and achieving exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-coral-100 group-hover:border-coral-300 transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-poppins font-semibold text-xl text-navy-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-coral-500 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="font-poppins font-semibold text-2xl text-navy-900 mb-6 text-center">
            Additional Team Members
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalMembers.map((member, index) => (
              <div
                key={index}
                className="text-center p-3 bg-gray-50 rounded-lg hover:bg-coral-50 transition-colors duration-300"
              >
                <span className="text-navy-900 font-medium text-sm">
                  {member}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-coral-50 rounded-full border border-coral-200">
            <User className="w-5 h-5 text-coral-500" />
            <span className="text-coral-700 font-medium">
              We're always growing! New talent joining soon.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
