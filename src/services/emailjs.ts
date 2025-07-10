
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  publicKey: 'RL7QMjCzD2b977KKe',
  serviceId: 'service_ifs3l0d',
  templateId: 'template_k0hnhmm',
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

// Interface for form data
export interface ContactFormData {
  name: string;
  email: string;
  business: string;
  message: string;
}

// Function to send email via EmailJS
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      business_name: formData.business,
      message: formData.message,
    };

    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};
