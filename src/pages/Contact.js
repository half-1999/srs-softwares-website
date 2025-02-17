import React from 'react';
import Banner from '../components/Banner';
import ContactImg from '../assets/contact.jpg';
import ContactForm from '../components/ContactForm';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="relative overflow-hidden">
      <Banner image={ContactImg} heading="Contact Us" paragraph="" />
      <h1 className="text-2xl font-bold m-4 text-center">Contact Us For Any Query</h1>
      <div className="container mx-auto p-3 flex flex-col lg:flex-row gap-6 bg-gray-100">
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
        <div className='lg:w-1/2'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14003.746408318674!2d77.32621085!3d28.5801565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56f7a6d2b3f%3A0x95bb4d4b00bd9633!2siThum%20Tower!5e0!3m2!1sen!2sin!4v1629879092688!5m2!1sen!2sin"
              width="100%"
              height="720"
              allowFullScreen=""
              loading="lazy"
              title="iThum Tower Noida"
              className="border-0"
            ></iframe>
            </div>
    </div>
            
    </div>
  );
};

export default Contact;
