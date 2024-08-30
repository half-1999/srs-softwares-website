import React, { useRef, useState } from 'react';
import { services } from '../utils/data';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhoneAlt, FaBuilding, FaClipboard } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactUs = () => {
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [captchaValue, setCaptchaValue] = useState('');
    const SITE_KEY = '6LeuzzEqAAAAALH4tOYgJ5YyCq3OhkiIhhE_81KV'
    const captchaRef = useRef()

    const handleSubmit = (event) => {
    event.preventDefault();

    if (!captchaValue) {
      alert('Please verify that you are not a robot.');
      return;
    }

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data['recaptchaValue'] = captchaValue; 

    axios.post('http://api.srssoftwares.in/website/api/contact/submit', data)
      .then(response => {
        console.log(response.data);
        alert('Your message has been sent successfully!');
        event.target.reset(); // Reset the form
        captchaRef.current.reset(); // Reset the reCAPTCHA
        setCaptchaValue(''); // Reset captcha value
      })
      .catch(error => {
        console.error('There was an error sending your message!', error);
      });
  };

  const onCaptchaChange = (value) => {
    console.log(value)
    setCaptchaVerified(true);
    setCaptchaValue(value)
  };
  return (
    <div className="container mx-auto p-5  rounded-lg text-black grid grid-cols-1  md:grid-cols-2 gap-8">
      {/* Left Side - Text */}
      <div className="space-y-1 my-auto">
        <h1 className="text-xl font-bold text-blue-600 underline">Contact Us</h1>
        <h1 className="text-3xl font-bold mb-4">Struggling with IT Challenges? <br/> Get Expert Help Now!</h1>
        <p>
          Are you grappling with IT problems that seem too complex or time-consuming to resolve on your own? Let us help! We understand that technology issues can be overwhelming, and we're here to offer a helping hand. Our free IT consultation service is designed to give you the clarity and guidance you need without any obligation.
        </p>
        <p>
          During your free consultation, you'll benefit from:
        </p>
        <ul className="list-disc pl-5">
          <li>A straightforward conversation: We listen to your concerns and provide clear, jargon-free advice tailored to your situation.</li>
          <li>Expert analysis: Our team will investigate the root cause of your IT problems, whether they involve slow systems, software issues, or security concerns.</li>
          <li>Customized solutions: We offer recommendations that fit your specific needs and budget, avoiding generic fixes.</li>
          <li>Valuable insights: Even if you choose not to work with us, you'll receive actionable advice to help you move forward with confidence.</li>
        </ul>
        
      </div>

      {/* Right Side - Form */}
      <div className="outline rounded-lg p-2">
        <h2 className="text-xl font-bold mb-1 ">Request Your Free IT Consultation</h2>
        <hr/>
            <form onSubmit={handleSubmit} className="p-6 mb-4 space-y-4">
      <div className="mb-4">
        <label className="block text-black text-sm font-semibold mb-2 flex items-center">
          <FaUser className="text-black text-xl mr-2" />
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4  leading-tight focus:outline-none focus:ring-1 focus:ring-black"
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2 flex items-center">
            <FaEnvelope className="text-black text-xl mr-2" />
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-1 focus:ring-black"
            id="email"
            name="email"
            type="email"
            placeholder="Your email address"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2 flex items-center">
            <FaPhoneAlt className="text-black text-xl mr-2" />
            Contact Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-1 focus:ring-black"
            id="contact"
            name="contact"
            type="text"
            placeholder="Your contact number"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2 flex items-center">
            <FaBuilding className="text-black text-xl mr-2" />
            Company Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-1 focus:ring-black"
            id="company"
            name="company"
            type="text"
            placeholder="Your company name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2 flex items-center">
            <FaBuilding className="text-black text-xl mr-2" />
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-1 focus:ring-black"
            id="city"
            name="city"
            type="text"
            placeholder="Your city name"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-semibold mb-2 flex items-center">
          <FaClipboard className="text-black text-xl mr-2" />
          Services
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-1 focus:ring-black"
          id="service"
          name="service"
          required
        >
          <option value="">Select a service</option>
          {services.map((service, index) => (
            <option key={index} className="px-2 py-1 hover:bg-cyan-200 text-sm border-b">
              {service.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-black text-sm font-semibold mb-2 flex items-center">
          <FaClipboard className="text-black text-xl mr-2" />
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-1 focus:ring-black"
          id="message"
          name="message"
          rows="4"
          placeholder="Your message"
          required
        />
      </div>
      <div className="mb-6">
        <ReCAPTCHA
          sitekey={SITE_KEY}
          onChange={onCaptchaChange}
          ref={captchaRef}
        />
      </div>
      <div className="flex items-center justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
      </div>
    </div>
  );
};

export default ContactUs;
