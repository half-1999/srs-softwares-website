import React from 'react';
import { Link } from 'react-router-dom';
import { FaAddressCard, FaWhatsapp, FaYoutube, FaYoutubeSquare } from 'react-icons/fa';
import { services } from '../utils/data';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { MdOutlinePhoneCallback } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import SrsImg from '../assets/srs_software.png'
const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-1">
        <div className="flex flex-col lg:flex-row justify-between space-y-2 md:space-y-0">
          {/* Company Info */}
          <div className="flex-1 flex items-center justify-center lg:border-r border-black mr-2">
            <div className="flex-1 my-auto p-1">
              <img src="https://www.srssoftwares.in/assets/images/logo/ptac.png" alt="" className="w-[170px] object-contain rounded-xl mx-auto mb-5"/>
              <div className="flex rounded-xl">
                <img src={SrsImg} alt="" className="w-[100px]  object-contain rounded-lg mx-auto mr-2"/>
                <p className="text-sm text-bottom my-auto text-justify">
                  We are a leading technology company specializing in the development level. 
                </p>
              </div>
              <p className="text-sm mb-2  text-justify my-auto ">
                   specializing in the development of enterprise-level solutions.
                </p>
            <p className="text-sm mb-2 ">
              Mon - Sat: 10:00 AM - 06:00 PM
            </p>
            <p className='flex gap-2 text-sm'><IoIosMail size={20} className='mt-1'/> <a href="mailto:info.srssoftwares.com" className="text-blue-500">info.srssoftwares.com</a></p>
            <p className='flex gap-2 text-sm'><MdOutlinePhoneCallback size={20} className='mt-1'/><a href="tel:+918869829800" className="text-blue-500">+91 886 982 9800</a></p>
            <p className='flex gap-2 text-sm'><MdOutlinePhoneCallback size={20} className='mt-1'/><a href="tel:+919557775740" className="text-blue-500">+91 955 777 5740</a></p>
            <p className='flex gap-2 text-sm ml-1'><FaAddressCard size={25} className='mt-1' /> 
              <span className="text-black ml-2"> C-815, Tower C, 8th Floor,
                iThum Tower, Near Electronic City Metro, Sector 62  Noida <br/> Uttar Pradesh - 201301</span>
              </p>    

            </div>
          </div>
          {/* Company */}
          <div className="flex-1 lg:border-r border-black mr-2">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/technologies">Technologies</Link></li>
              <li><Link to="/contact">Let's Connect</Link></li>
            </ul>
          </div>
          {/* Services */}
          <div className="flex-1 lg:border-r border-black mr-2">
            <h3 className="text-lg font-bold mb-4">Explore our Services</h3>
            {services.map((service, index) => (
          <div key={index} className="text-sm">
          <Link to={`/services/${service.route}`}>
            <h2 className="text-sm font-semibold cursor-pointer mb-2">{service.name}</h2>
            </Link>
          </div>
        ))}
          </div>
          {/* Contact */}
          <div className="flex-1 flex">
            <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">Connect on Social Media</h3>
          <p className="text-sm mb-4">
            Say goodbye to emails! Streamline communication and get the answers you need without the wait. Get started to initiate a chat with your Business Analyst now.
          </p>
          <a href="https://wa.me/+91-9557775740" className="flex items-center space-x-2 text-sm text-black font-bold hover:underline mb-4" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-xl" />
            <span>Connect on WhatsApp</span>
          </a>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/SRSSOFTWARESPTAC" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="https://whatsapp.com/channel/0029VaCM9KAD38CZDxZRlQ0p" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
              <FaWhatsapp className="text-2xl" />
            </a>
            <a href="https://twitter.com/srssoftwares" target="_blank" rel="noopener noreferrer" className="text-black ">
              <FaXTwitter className="text-2xl" />
            </a>
            <a href="https://linkedin.com/company/srs-softwares" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/srssoftwares" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://youtube.com/@srssoftwares3144" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-gray-600">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className='bg-black text-white p-1 text-center font-semibold text-sm mt-2'>© 2024 SRS Softwares. All Rights Reserved.</h1>
    </footer>
  );
};

export default Footer;
