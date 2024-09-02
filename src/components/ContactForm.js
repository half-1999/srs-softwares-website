import React, { useRef, useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaBuilding, FaClipboard } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import { services } from '../utils/data';
import axios from 'axios';

const ContactForm = () => {
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
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-4 space-y-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center">
          <FaUser className="text-blue-500 text-xl mr-2" />
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center">
            <FaEnvelope className="text-blue-500 text-xl mr-2" />
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            name="email"
            type="email"
            placeholder="Your email address"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center">
            <FaPhoneAlt className="text-blue-500 text-xl mr-2" />
            Contact Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="contact"
            name="contact"
            type="tel"
            maxLength={10}
            placeholder="Your contact number"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center">
            <FaBuilding className="text-blue-500 text-xl mr-2" />
            Company Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="company"
            name="company"
            type="text"
            placeholder="Your company name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center">
            <FaBuilding className="text-blue-500 text-xl mr-2" />
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="city"
            name="city"
            type="text"
            placeholder="Your city name"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center">
          <FaClipboard className="text-blue-500 text-xl mr-2" />
          Service
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center">
          <FaClipboard className="text-blue-500 text-xl mr-2" />
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
