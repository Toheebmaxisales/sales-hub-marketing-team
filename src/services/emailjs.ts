
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
  phone: string;
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
      phone_number: formData.phone,
      message: formData.message,
      to_name: 'Support Team', // Add recipient name
      reply_to: formData.email, // Add reply-to field
    };

    console.log('Template params:', templateParams);

    // Try the send operation with additional error context
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      {
        publicKey: EMAILJS_CONFIG.publicKey, // Explicitly pass public key
      }
    );

    console.log('EmailJS success response:', result);
    
    if (result.status !== 200) {
      throw new Error(`EmailJS returned status ${result.status}: ${result.text}`);
    }
    
  } catch (error: any) {
    console.error('EmailJS Error Details:', error);
    console.error('Error name:', error?.name);
    console.error('Error message:', error?.message);
    console.error('Error status:', error?.status);
    console.error('Error text:', error?.text);
    
    // Provide more specific error messages
    if (error?.message?.includes('Failed to fetch')) {
      throw new Error('Network error: Unable to connect to email service. Please check your internet connection and try again.');
    } else if (error?.status === 400) {
      throw new Error('Invalid email configuration. Please contact support.');
    } else if (error?.status === 401 || error?.status === 403) {
      throw new Error('Email service authentication failed. Please contact support.');
    } else if (error?.status === 422) {
      throw new Error('Invalid email data. Please check your input and try again.');
    } else {
      throw new Error(`Failed to send email: ${error?.text || error?.message || 'Unknown error occurred'}`);
    }
  }
};
