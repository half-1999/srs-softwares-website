import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { projects } from '../utils/data';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-2 text-center">Our Completed Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="relative border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            {project.isOnline && (
              <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2">
                <FaGlobe className="w-6 h-6" title="Live Project" />
              </div>
            )}
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-800">Technologies Used:</h3>
                <ul className="grid grid-cols-4 gap-4 mt-2">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-sm">
                      <tech.icon className="mr-2" />
                      <span className='text-sm'>{tech.name}</span>
                    </li>
                  ))}
                </ul>

              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-800">Key Features:</h3>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
                <Link to='/contact' rel="noopener noreferrer" className="text-black hover:text-indigo-800 font-semibold bg-gray-200 p-2 rounded-lg">
                  Request a Demo
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
