import React from 'react';
import { FaCalendarAlt, FaRegSmile, FaProjectDiagram } from 'react-icons/fa'
const AboutHero = () => {
  return (
    <div className="container mx-auto  p-2">
          <div className='bg-gray-200 p-2 rounded-lg'>
          
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">About Us</h1>
          <h1 className="text-lg font-semibold">India's Leading Enterprise Solutions Development Company</h1>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          <p className='text-justify text-sm'>
            Our Enterprise Solution Development Company is a leading technology company specializing in the development
            of enterprise-level solutions. We design and deliver software solutions to organizations of all sizes and
            across various industries. Our company has a team of experienced professionals who use the latest
            technologies and best practices to develop custom software solutions that meet our clients’ unique needs.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t-2 border-black pt-4 grid grid-cols-3 gap-6 text-center">
  <div className="border-r-2 border-black pr-4 flex items-center">
    <FaCalendarAlt className="text-4xl text-blue-500 mr-2" />
    <div className="text-left">
      <h2 className="text-xl font-bold">18+</h2>
      <p>Years experiences</p>
    </div>
  </div>
  <div className="border-r-2 border-black pr-4 flex items-center">
    <FaRegSmile className="text-4xl text-green-500 mr-2" />
    <div className="text-left">
      <h2 className="text-xl font-bold">1000+</h2>
      <p>Happy Clients</p>
    </div>
  </div>
  <div className="pr-4 flex items-center">
    <FaProjectDiagram className="text-4xl text-red-500 mr-2" />
    <div className="text-left">
      <h2 className="text-xl font-bold">150+</h2>
      <p>Project completed</p>
    </div>
  </div>
</div>


    </div>

    </div>
  );
};

export default AboutHero;
