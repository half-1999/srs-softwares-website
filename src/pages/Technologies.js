import React from 'react';
import { FaNodeJs, FaPhp, FaAngular, FaReact, FaVuejs, FaDatabase, FaMobileAlt, FaAndroid, FaJs, FaCloud, FaLaptopCode, FaTools, FaAws } from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiTailwindcss, SiMicrosoftsqlserver, SiMicrosoftazure, SiGooglecloud } from 'react-icons/si';
import { IoLogoPython } from 'react-icons/io';
import NextJsIcon from '../utils/NextJsIcon';
import TechImg from '../assets/technologies.jpg';
import DotNetIcon from '../utils/DotNetIcon';
import FirebaseIcon from '../utils/FirebaseIcon';
import Banner from '../components/Banner';
import { DiDotnet, DiFirebase, DiMongodb, DiMsqlServer } from 'react-icons/di';
import { techData } from '../utils/data';



const Technologies = () => {
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
          <p className="text-sm lg:text-md">Designing and developing innovative and professional software solutions for many companies and tech markets for almost two decades now.</p>
        </div>
        
        {/* Frontend Section */}
        <div className="mb-2 mx-auto p-3 rounded-lg">
        <h2 className="text-lg font-bold mb-4 ">Frontend Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 bg-gray-100 p-2 rounded-lg ">
            {techData.frontend.map((tech, index) => (
              <div key={index} className="relative group bg-white p-4 rounded-lg shadow-md hover:shadow-xl cursor-pointer overflow-hidden flex flex-col items-center hover:scale-95 duration-700">
                <div className="flex justify-center items-center mb-4">
                  <div className={`text-2xl ${tech.color}`}>
                    {tech.icon}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-md font-semibold mb-2">{tech.name}</h3>
                  <hr className="border-t-1 border-black" />
                  <p className="text-sm text-justify">{tech.content}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="mb-2 mx-auto p-3 rounded-lg">
          <h2 className="text-lg font-bold mb-1 ">Backend Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 bg-gray-100 p-2 rounded-lg">
            {techData.backend.map((tech, index) => (
              <div key={index} className="relative group bg-white p-4 rounded-lg shadow-md hover:shadow-xl cursor-pointer overflow-hidden flex flex-col items-center hover:scale-95 duration-700">
                <div className="flex justify-center items-center mb-4">
                  <div className={`text-4xl ${tech.color}`}>
                    {tech.icon}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-md font-semibold mb-2">{tech.name}</h3>
                  <hr className="border-t-1 border-black" />
                  <p className="text-sm text-justify">{tech.content}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
            ))}
          </div>
        </div>

        

        {/* Database Section */}
        <div className="mb-2 mx-auto p-3 rounded-lg">
          <h2 className="text-lg font-bold mb-4 ">Database Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-gray-100 gap-2 p-2 rounded-lg ">
            {techData.database.map((tech, index) => (
              <div key={index} className="relative group bg-white p-4 rounded-lg shadow-md hover:shadow-xl cursor-pointer overflow-hidden flex flex-col items-center hover:scale-95 duration-700">
                <div className="flex justify-center items-center mb-4">
                  <div className={`text-4xl ${tech.color}`}>
                    {tech.icon}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-md font-semibold mb-2">{tech.name}</h3>
                  <hr className="border-t-1 border-black" />
                  <p className="text-sm text-justify">{tech.content}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Section */}
        <div className="mb-2 mx-auto p-3 rounded-lg">
          <h2 className="text-lg font-bold mb-4 ">Mobile Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-2 bg-gray-100 p-2 rounded-lg">
            {techData.mobile.map((tech, index) => (
              <div key={index} className="relative group bg-white p-4 rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col items-center hover:scale-95 duration-700 cursor-pointer">
                <div className="flex justify-center items-center mb-4">
                  <div className={`text-4xl ${tech.color}`}>
                    {tech.icon}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-md font-semibold mb-2">{tech.name}</h3>
                  <hr className="border-t-1 border-black" />
                  <p className="text-justify text-sm">{tech.content}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Cloud Section */}
        <div className="mb-2 mx-auto p-3 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Cloud Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 bg-gray-100 p-2 rounded-lg">
            {techData.cloud.map((tech, index) => (
              <div key={index} className="relative group bg-white p-4 rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col items-center hover:scale-95 duration-700 cursor-pointer">
                <div className="flex justify-center items-center mb-4">
                  <div className={`text-4xl ${tech.color}`}>
                    {tech.icon}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-md font-semibold mb-2">{tech.name}</h3>
                  <hr className="border-t-1 border-black" />
                  <p className="text-sm text-justify">{tech.content}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="mb-2 mx-auto p-3 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Quality Assurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 bg-gray-100 p-2 rounded-lg">
            {techData.qa.map((tech, index) => (
              <div key={index} className="relative group bg-white p-4 rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col items-center hover:scale-95 duration-700 cursor-pointer">
                <div className="flex justify-center items-center mb-4">
                  <div className={`text-4xl ${tech.color}`}>
                    {tech.icon}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-md font-semibold mb-2">{tech.name}</h3>
                  <hr className="border-t-1 border-black" />
                  <p className="text-sm text-justify">{tech.content}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Technologies;
