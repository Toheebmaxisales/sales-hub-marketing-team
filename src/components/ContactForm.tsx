
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail, type ContactFormData } from '@/services/emailjs';

const ContactForm = () => {
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
    console.log('Form submitted with data:', formData);
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
        description: error instanceof Error ? error.message : "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
  );
};

export default ContactForm;
