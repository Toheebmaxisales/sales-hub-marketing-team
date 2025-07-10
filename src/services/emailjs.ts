
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  publicKey: 'LiDuKCzIagTSee0tc',
  serviceId: 'service_ifs3l0d',
  templateId: 'template_k0hnhmm',
};

// Initialize EmailJS
console.log('Initializing EmailJS with public key:', EMAILJS_CONFIG.publicKey);
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
  console.log('Attempting to send email with data:', formData);
  console.log('Using service ID:', EMAILJS_CONFIG.serviceId);
  console.log('Using template ID:', EMAILJS_CONFIG.templateId);

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      business_name: formData.business,
      message: formData.message,
    };

    console.log('Template params:', templateParams);

    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('EmailJS success response:', result);
  } catch (error) {
    console.error('EmailJS Error Details:', error);
    console.error('Error status:', error.status);
    console.error('Error text:', error.text);
    throw new Error(`Failed to send email: ${error.text || error.message || 'Unknown error'}`);
  }
};
