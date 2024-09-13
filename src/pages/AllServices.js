import React from 'react';
import Banner from '../components/Banner';
import AboutImg from '../assets/about-us.jpg';
import { services, technologies } from '../utils/data';
import { Link } from 'react-router-dom';
const AllServices = () => {
  return (
    <div className="relative overflow-hidden">
      <Banner
        image={AboutImg}
        heading="All Services"
        paragraph=""
      />
      <div className="container mx-auto p-3">
        <div className='mb-5'>
          <h1 className="text-2xl font-bold">Our Services</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-gray-100 p-2">
                {services.map((tech, index) => (
                  <Link
                            to={`/services/${tech.route}`}
                            key={index}
                            className="block mb-5 text-sm"
                          >
                      <div key={index} className="bg-white border rounded-lg hover:shadow-xl cursor-pointer p-4 text-center hover:scale-105 duration-300">
                        {tech.icon}
                        <h3 className="text-sm font-semibold">{tech.name}</h3>
                      </div>
                  </Link>
                ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Technologies Used</h1>
          <div className="my-8">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-gray-100 p-2">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white border rounded-lg hover:shadow-xl cursor-pointer p-4 text-center hover:scale-105 duration-300">
                {tech.icon}
                <h3 className="text-sm font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AllServices
