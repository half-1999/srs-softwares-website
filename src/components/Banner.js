// components/Banner.js
import React from 'react';

const Banner = ({ image, heading, paragraph }) => (
  <div className="relative rounded-xl overflow-hidden h-[200px] lg:h-[400px]">
    <div 
      className="absolute inset-0 bg-cover bg-center" 
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4 py-2">
          <h1 className="text-2xl lg:text-4xl font-bold mb-2">{heading}</h1>
          <p className="text-sm lg:text-md">{paragraph}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
