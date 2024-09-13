import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaProjectDiagram, FaRegSmile } from 'react-icons/fa';
import Banner from '../components/Banner';
import { services, technologies } from '../utils/data';
import AnimatedNumber from '../utils/AnimatedNumber';
import CoreValues from '../components/CoreValues';
import ServicesPage from '../components/ServicesPage';
import IndustriesPage from '../components/IndustriesPage';
import TestimonialsPage from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import SrsImg from '../assets/srs_software.png'
import Slider from 'react-slick';

import Landing1 from '../assets/Landing1.jpg'
import Landing2 from '../assets/Landing2.jpg'
import Landing3 from '../assets/a2.jpg'
import { Link } from 'react-router-dom';
const bannerImages = [
  {
    image: Landing1,
    heading: "Welcome to SRS Softwares",
    description: "Our company's objective is to use our application development services to help your business reach new heights."
  },
  {
    image: Landing2,
    heading: "Sculpt Your Thoughts To Reality",
    description: "Learn more about our groundbreaking solutions."
  },
  {
    image: Landing3,
    heading: "Cutting-Edge Technology",
    description: "Explore our latest tech innovations and advancements."
  },
  {
    image: Landing1,
    heading: "A Complete Software Development solutions",
    description: "Discover amazing features and get started with ease."
  },
  {
    image: Landing2,
    heading: "Innovative Solutions",
    description: "Learn more about our groundbreaking solutions."
  },
];

const HomePage = () => {
  const { ref: yearsRef, inView: yearsInView } = useInView({ triggerOnce: true });
  const { ref: clientsRef, inView: clientsInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });

    const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative overflow-hidden space-y-2">
    {/*<Banner
        image="https://plus.unsplash.com/premium_photo-1661414423895-5854eb6b573a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Crafting Tailored Solutions for Your Business Success"
        paragraph="Building Ultimate End-to-End Web Applications to Accelerate your Growth."
      />*/}
<div className="w-full">
  <Slider {...settings}>
    {bannerImages.map((testimonial, index) => (
      <div key={index} className="relative bg-white p-2 rounded-lg shadow-lg text-center h-[550px]">
        {/* Image Section */}
        <div className="flex justify-center h-full w-full">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover rounded-lg filter blur-sm"
          />
        </div>

        {/* Overlay Text and Buttons */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">{ testimonial.heading }</h1>
          <p className="text-lg mb-6 font-semibold">{ testimonial.description }</p>

          {/* Buttons */}
          <Link to='/services'>
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </button>
            <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
              Know More
            </button>
          </div>
          </Link>
        </div>
      </div>
    ))}
  </Slider>
</div>


      <div className="container mx-auto p-2 lg:w-[95%]">
        <div className="bg-white p-4 lg:p-4 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="space-y-1 my-auto mx-auto">
              <img src={SrsImg} alt="" className="w-[150px] mx-auto  object-contain rounded-lg "/>
              <h1 className="text-sm lg:text-lg font-semibold">India's Leading Enterprise Solutions Development Company</h1>
            </div>

            {/* Right Side */}
            <div className="space-y-5">
              <p className="text-justify text-sm ">
                Our Enterprise Solution Development Company is a leading technology company specializing in the development
                of enterprise-level solutions. We design and deliver software solutions to organizations of all sizes and
                across various industries. Our company has a team of experienced professionals who use the latest
                technologies and best practices to develop custom software solutions that meet our clients’ unique needs.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 border-t-2 border-black pt-8  rounded-lg  grid grid-cols-3 gap-4 text-center">
            <div ref={yearsRef} className="border-r-2 border-black pr-4 flex items-center">
              <FaCalendarAlt className="text-4xl text-blue-500 mr-2" />
              <div className="text-left">
                <h2 className="text-md lg:text-2xl font-bold"><AnimatedNumber number={yearsInView ? 18 : 0} /></h2>
                <p className='text-sm'>Years <span className='hidden lg:block text-gray-800'>experiences</span></p>
              </div>
            </div>
            <div ref={clientsRef} className="border-r-2 border-black pr-4 flex items-center">
              <FaRegSmile className="text-4xl text-green-500 mr-2" />
              <div className="text-left">
                <h2 className="text-md lg:text-2xl font-bold"><AnimatedNumber number={clientsInView ? 480 : 0} /></h2>
                <p className='text-sm'><span className='hidden lg:block text-gray-800'>Happy</span> Clients</p>
              </div>
            </div>
            <div ref={projectsRef} className="pr-4 flex items-center">
              <FaProjectDiagram className="text-4xl text-red-500 mr-2" />
              <div className="text-left">
                <h2 className="text-md lg:text-2xl font-bold"><AnimatedNumber number={projectsInView ? 748 : 0} /></h2>
                <p className='text-sm'>Project <span className='hidden lg:block text-gray-800'>Completed</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto p-1 w-full">
        <div className="p-1 rounded-lg mb-5">
              <h1 className="text-2xl lg:text-4xl font-bold text-center mb-2">Our Vision for Your Business</h1>
              <p className="text-sm lg:text-md font-semibold text-center">At SRS Softwares, we leverage the latest technology stack to align with your business vision.</p>
              <p className="hidden lg:block text-sm lg:text-md font-semibold text-center">We bring teams together to innovate and drive the next phase of your project.</p>
        </div>
            <CoreValues/>
            <ServicesPage/>
            <IndustriesPage/>
          <div>
            <h1 className="text-2xl text-center font-bold m-5">Technologies We Used</h1>
            <div className="">
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-1  p-2">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-white border rounded-lg hover:shadow-xl cursor-pointer p-4 text-center hover:scale-105 duration-300">
                    {tech.icon}
                    <h3 className="text-sm font-semibold">{tech.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*<TestimonialsPage/>*/}
          <ContactUs/>
      </div>
    </div>
  );
};

export default HomePage;
