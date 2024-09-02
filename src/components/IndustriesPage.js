import React, { useState } from 'react';
import { FaBank, FaGraduationCap, FaHospital, FaTruck, FaBuilding, FaFilm, FaShoppingCart, FaPhone, FaShoppingBag, FaNewspaper } from 'react-icons/fa';
import { industries } from '../utils/data';


const IndustriesPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="container mx-auto space-y-5 rounded-lg m-5">
      <h1 className="text-2xl font-bold mb-2 text-center">What We Do</h1>
      <div className=" mb-8 grid grid-cols-2 md:grid-cols-5 lg:w-[90%] mx-auto">
        {industries.map((industry, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md mb-1 mr-1 hover:bg-blue-500  hover:text-white ${selectedTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            <span className='text-sm'>{industry.icon}</span>
            <span className='text-sm'>{industry.title}</span>
          </button>
        ))}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="">
        <h2 className="text-xl font-bold mb-2 flex gap-4">{industries[selectedTab].icon} {industries[selectedTab].title}</h2>
        <p className="text-sm text-justify">{industries[selectedTab].description}</p>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
