import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ServiceSection from '../components/ServiceSection';
import SlickCarousel from '../components/SlickCarasouel'; 
import Banner from '../components/Banner';
import { FaCode, FaDatabase, FaProjectDiagram, FaUserCog, FaCloud, FaShieldAlt } from 'react-icons/fa';
import AboutImg from '../assets/about-us.jpg';
import { serviceData } from '../utils/data';


const Services = () => {
  const { service } = useParams();
  const serviceContent = serviceData[service];

  return (
    <div className="relative overflow-hidden bg-gray-100">
      {/* Banner Section */}
      <Banner
        image="https://img.freepik.com/free-vector/futuristic-white-technology-background_23-2148390336.jpg?t=st=1725268107~exp=1725271707~hmac=c757e7b4f00e95f76e5115e3798032ac6b11255c7b22f430328c6260df50ebfb&w=1060"
        heading={service.toLocaleUpperCase()}
        paragraph=""
      />

      {/* Carousel Section */}
      {serviceContent && (
        <>
          {/*<SlickCarousel images={serviceContent.carouselImages} />*/}

          {/* Service Sections */}
          {serviceContent.sections.map((section, index) => (
            <ServiceSection
              key={index}
              imagePath={section.imagePath}
              content={section.content}
              title={section.heading}
              type={section.type}
              sectionContainerClass="flex flex-col md:flex-row my-8"
              sectionImageClass="w-full md:w-1/2 object-cover"
              sectionContentClass="w-full md:w-1/2 p-4"
            />
          ))}

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 my-8 px-4">
            {serviceContent.cards.map((card, index) => (
              <div key={index} className="bg-white p-4 border rounded-lg shadow-lg flex  hover:scale-105 hover:shadow-xl cursor-pointer duration-700">
                <div className="mr-4 flex items-center">{card.icon}</div>
                <div>
                  <h2 className="text-lg font-semibold text-center">{card.title}</h2>
                  <p className="text-gray-700 text-sm  text-justify">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Related Content Section */}
          <div className="bg-white p-4 border rounded-lg shadow-md my-8 mx-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Related Services</h2>
            <p className="mb-2">Explore our other services that complement custom software development and can help enhance your business operations:</p>
            <ul className="list-disc list-inside pl-5">
              <li><Link to="/services/web-development" className="text-blue-500 hover:underline">Web Development</Link>: Build and maintain your online presence with our full-stack web development services.</li>
              <li><Link to="/services/mobile-apps-development" className="text-blue-500 hover:underline">Mobile Apps</Link>: Create engaging and user-friendly mobile applications for both iOS and Android.</li>
              <li><Link to="/services/devops-cloud-computing" className="text-blue-500 hover:underline">Cloud Solutions</Link>: Implement cloud-based solutions for better scalability and collaboration.</li>
              <li><Link to="/services/it-consulting" className="text-blue-500 hover:underline">Consulting</Link>: Get expert advice and strategic insights to drive your business forward.</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
