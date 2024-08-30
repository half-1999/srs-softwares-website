import React from 'react';
import { services } from '../utils/data';
import { Link } from 'react-router-dom';
import './Loader.css'; // Import the CSS file if it’s in the same directory

const ServicesPage = () => {
  return (
    <div className="container mx-auto p-4 space-y-4 rounded-lg mt-5">
      <h1 className="text-2xl font-bold underline mb-4">Services We Expertise In</h1>
      <div className="carousel-container bg-white shadow-xl rounded-xl p-3">
        <div className="carousel">
          {services.map((service, index) => (
            <div key={index} className="carousel-item bg-gray-200 hover:bg-white hover:border-t-5 p-4 cursor-pointer transform hover:scale-105 transition duration-700 rounded-lg shadow-md hover:shadow-xl border flex flex-col items-center text-center mx-2 ">
              <div className="mb-1 text-3xl h-1/6">
                {service.icon}
              </div>
              <div className="mb-1 h-1/6">
                <h2 className="text-md font-bold">{service.name}</h2>
              </div>
              <div className="mb-1 h-3/6">
                <p className="hidden lg:block text-sm mb-2 text-justify">{service.description}</p>
              </div>
              <div className="mb-1 h-1/6">
                <Link to={`/services/${service.route}`}>
                  <button className="bg-blue-700 text-white py-1 px-4 rounded-lg w-full text-sm">Explore</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
