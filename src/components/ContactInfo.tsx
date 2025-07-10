
const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="text-white">
        <h3 className="font-poppins font-semibold text-2xl mb-6">
          Let's Start Your Success Story
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          We believe every business has unique potential. That's why we don't offer cookie-cutter solutions. 
          Instead, we take time to understand your goals, challenges, and vision to create a strategy that works specifically for you.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h4 className="font-semibold text-white text-lg mb-2">Free Strategy Session</h4>
          <p className="text-gray-300">
            45-minute consultation to analyze your current marketing and identify growth opportunities.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h4 className="font-semibold text-white text-lg mb-2">Custom Action Plan</h4>
          <p className="text-gray-300">
            Receive a tailored roadmap with specific steps to achieve your business goals.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h4 className="font-semibold text-white text-lg mb-2">Ongoing Support</h4>
          <p className="text-gray-300">
            24/7 support and regular check-ins to ensure your success throughout our partnership.
          </p>
        </div>
      </div>

      <div className="bg-coral-500 p-6 rounded-xl text-white">
        <h4 className="font-semibold text-lg mb-2">Response Time Guarantee</h4>
        <p className="opacity-90">
          We respond to all inquiries within 24 hours. Most clients hear back from us within 2-4 hours during business days.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
