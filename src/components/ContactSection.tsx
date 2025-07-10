
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail, type ContactFormData } from '@/services/emailjs';

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    business: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', business: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-coral-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-coral-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your project and create a custom marketing strategy that drives real results. Get your free consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="font-poppins font-semibold text-2xl text-navy-900 mb-6">
                Get Your Free Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-navy-900 mb-2">
                    Business/Website
                  </label>
                  <Input
                    id="business"
                    name="business"
                    type="text"
                    value={formData.business}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your business name or website"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-coral-500 hover:bg-coral-600 text-white py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message & Book Consultation'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
