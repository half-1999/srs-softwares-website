import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaNodeJs, FaPhp, FaAndroid, FaMobileAlt, FaReact, FaAws, FaTools } from 'react-icons/fa';
import { DiDotnet, DiMsqlServer, DiMongodb, DiFirebase } from 'react-icons/di';
import { SiTailwindcss, SiMysql, SiPostgresql, SiGooglecloud, SiMicrosoftazure } from 'react-icons/si';
import { techData, services } from '../utils/data'; // Assuming you export techData from here

const Navbar = () => {
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(prev => !prev);
    if (mobileMenuOpen) {
      setServiceDropdownOpen(false);
      setTechDropdownOpen(false);
    }
  };

  const handleDropdownToggle = (type) => {
    if (type === 'services') {
      setServiceDropdownOpen(prev => !prev);
      setTechDropdownOpen(false);
    } else {
      setTechDropdownOpen(prev => !prev);
      setServiceDropdownOpen(false);
    }
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 250);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${scrolled ? 'bg-white w-full top-0 shadow-lg' : 'bg-white w-[90%] top-2 shadow-xl mx-auto rounded-lg'}`}
      style={{ transition: 'all 0.3s ease-in-out' }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center flex-grow">
          <Link to="/">
            <img src='https://www.srssoftwares.in/assets/images/logo/ptac.png' alt="Service" className="rounded-xl w-[100px]" />
          </Link>
        </div>

        {/* Centered Links */}
        <div className="hidden lg:flex space-x-4 justify-center flex-grow">
          <ul className="flex space-x-4 text-sm font-semibold">
            <li className='mt-2'><Link to="/about">Company</Link></li>
            <li className="relative mt-2">
              <div
                className="cursor-pointer flex items-center"
                onMouseEnter={() => handleDropdownToggle('services')}
                onMouseLeave={() => handleDropdownToggle('services')}
              >
                Services
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: serviceDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-2"
                >
                  {serviceDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </motion.div>
                <AnimatePresence>
                  {serviceDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute lg:left-[-350%] xl:left-[-640%] top-[250%] bg-white text-black shadow-xl z-50 w-[80vw] rounded-xl"
                    >
                      <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-4 p-2 w-[80vw] overflow-y-auto">
                        {services.slice(0, 10).map((service, index) => (
                          <Link
                            to={`/services/${service.route}`}
                            key={index}
                            className="text-sm text-center"
                          >
                            <div className="flex flex-col items-center border rounded-lg shadow-xl bg-white p-1">
                              <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-32 object-contain mb-2"
                              />
                              {service.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </li>
            <li className="relative mt-2">
              <div
                className="cursor-pointer flex items-center"
                onMouseEnter={() => handleDropdownToggle('technologies')}
                onMouseLeave={() => handleDropdownToggle('technologies')}
              >
                Technologies
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: techDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-2"
                >
                  {techDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </motion.div>
                <AnimatePresence>
                  {techDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute lg:left-[-350%] xl:left-[-550%] top-[250%] bg-white text-black shadow-xl z-50 w-[80vw] rounded-xl"
                    >
                      <div className="p-4 w-[80vw]">
                        {Object.entries(techData).map(([category, techs]) => (
                          <div key={category} className="mb-2 flex ">
                            <div className="w-1/6 flex-shrink-0">
                              <h3 className="text-lg font-semibold ml-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {techs.map((tech, index) => (
                                  <Link
                                    to={`/technologies`} // Adjust the route path as needed
                                    key={index}
                                    className="flex items-center border rounded-lg shadow-xl bg-white p-2 text-sm w-[150px]"
                                  >
                                    <div className={`text-center ${tech.color} mr-4`}>
                                      {tech.icon}
                                    </div>
                                    <div className="text-sm">
                                      <h4 className="font-semibold text-sm">{tech.name}</h4>
                                    </div>
                                  </Link>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </li>

            <li className='mt-2'><Link to="/portfolio">PortFolio</Link></li>
            <li className='mt-2'><Link to="/career">Career</Link></li>
          </ul>
        </div>

        {/* Right Section for Animated Arrow */}
        <div className="hidden lg:flex flex-grow justify-end">
          <Link to="/contact" className="flex items-center">
            <button className='p-2 bg-white shadow-xl rounded-lg text-sm font-semibold'>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-blue-500 hover:text-blue-600 flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <span className='text-blue-500'></span>Let's Connect
              </motion.div>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={handleMobileMenuToggle}><FaBars size={24} /></button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-64 bg-[#17191E] text-white shadow-lg z-50"
          >
            <div className="flex justify-end p-4">
              <button onClick={handleMobileMenuToggle}><FaTimes size={24} /></button>
            </div>
            <div className="flex flex-col p-4">
              <Link to="/about" className="text-lg mb-4">Company</Link>
              <div
                className="relative cursor-pointer mb-4"
                onClick={() => handleDropdownToggle('services')}
              >
                <div className="flex items-center">
                  Services
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: serviceDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2"
                  >
                    {serviceDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </motion.div>
                </div>
                <AnimatePresence>
                  {serviceDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-white text-black mt-2 rounded-lg"
                    >
                      <div className="p-4">
                        {services.slice(0, 10).map((service, index) => (
                          <Link
                            to={`/services/${service.route}`}
                            key={index}
                            className="block mb-2 text-sm"
                          >
                            <div className="flex flex-col items-center border rounded-lg shadow-xl bg-white p-2">
                              <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-32 object-contain mb-2"
                              />
                              {service.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => handleDropdownToggle('technologies')}
              >
                <div className="flex items-center">
                  Technologies
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: techDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2"
                  >
                    {techDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </motion.div>
                </div>
                <AnimatePresence>
                  {techDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-white text-black mt-2 rounded-lg"
                    >
                      <div className="p-4">
                        {Object.entries(techData).map(([category, techs]) => (
                          <div key={category} className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                            <div className="flex flex-col">
                              {techs.map((tech, index) => (
                                <div key={index} className="flex items-center mb-2">
                                  <div className={`text-center ${tech.color}`}>{tech.icon}</div>
                                  <div className="ml-2">
                                    <h4 className="text-lg font-semibold">{tech.name}</h4>
                                    <p className="text-sm">{tech.content}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/portfolio" className="text-lg mt-4 mb-4">PortFolio</Link>
              <Link to="/career" className="text-lg">Career</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
