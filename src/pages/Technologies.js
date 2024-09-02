import React from 'react';
import TechImg from '../assets/technologies.jpg';
import Banner from '../components/Banner';
import { techData } from '../utils/data'; // Adjust this path as needed

const Technologies = () => {
  // Ensure techData is defined before rendering
  if (!techData) {
    return <div>Loading...</div>; // Loading state if techData is undefined
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <Banner
        image={TechImg}
        heading="Technologies"
        paragraph="Innovative software solutions for digital disruption."
      />

      {/* Technologies Content */}
      <div className="container mx-auto p-2">
        <div className="text-center px-4 py-2">
          <h1 className="text-lg lg:text-2xl font-bold mb-2">Our Working Technologies</h1>
          <p className="text-sm lg:text-md">
            Designing and developing innovative and professional software solutions for many companies and tech markets for almost two decades now.
          </p>
        </div>

        {/* Render each category of technologies */}
        {Object.keys(techData).map((category, index) => (
          <div key={index} className="mb-2 mx-auto p-3 rounded-lg">
            <h2 className="text-lg font-bold mb-4 capitalize">{category} Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 bg-gray-100 p-2 rounded-lg">
              {techData[category].map((tech, idx) => (
                <div
                  key={idx}
                  className="relative group bg-white p-4 rounded-lg shadow-md hover:shadow-xl cursor-pointer overflow-hidden flex flex-col items-center hover:scale-95 duration-700"
                >
                  <div className="flex justify-center items-center mb-4">
                    <div className={`text-2xl ${tech.color}`}>{tech.icon}</div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-md font-semibold mb-2">{tech.name}</h3>
                    <p className="text-sm">{tech.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
