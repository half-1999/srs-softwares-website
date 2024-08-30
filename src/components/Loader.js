// components/Loader.js
import React from 'react';
import './Loader.css'; // Import the CSS file if it’s in the same directory

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
    <div className="loader">
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__ball"></div>
    </div>
  </div>
);

export default Loader;
