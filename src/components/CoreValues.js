import React from 'react';
import { FaHandHoldingHeart, FaUsers, FaEye, FaRocket, FaLightbulb, FaCogs, FaChessBoard, FaDollarSign } from 'react-icons/fa';
import './CoreValues.css'; // Import the CSS file for styles

const CoreValues = () => {
  const values = [
    {
      icon: <FaHandHoldingHeart className="text-red-500 text-4xl" />,
      title: 'Reliability',
      description: 'In the fast-paced digital world, products require both precision and performance. We develop accessible digital solutions that perform seamlessly across diverse platforms, ensuring your business remains agile and responsive.'
    },
    {
      icon: <FaUsers className="text-green-500 text-4xl" />,
      title: 'Collaboration',
      description: 'Effective app development begins with strong collaboration. We break down communication barriers and foster teamwork, celebrating each milestone according to shared goals and timelines.'
    },
    {
      icon: <FaEye className="text-blue-500 text-4xl" />,
      title: 'Transparency',
      description: 'Successful project execution revolves around transparency. Our approach ensures that each phase of mobile and web app development is clear and aligned with your needs, fostering trust and clarity throughout the process.'
    },
    {
      icon: <FaRocket className="text-purple-500 text-4xl" />,
      title: 'Dynamism',
      description: 'Our seasoned professionals excel at developing mobile and web applications from the ground up. Partner with us to tap into their expertise and launch world-class digital products.'
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
      title: 'Innovation',
      description: 'We thrive on creativity and innovation. Our team is dedicated to exploring new ideas and technologies to bring fresh perspectives and groundbreaking solutions to your business challenges.'
    },
    {
      icon: <FaCogs className="text-orange-500 text-4xl" />,
      title: 'Efficiency',
      description: 'Efficiency is at the core of our development process. We streamline workflows and leverage the latest technologies to deliver high-quality solutions that save time and resources for your business.'
    },
    {
      icon: <FaChessBoard className="text-indigo-500 text-4xl" />,
      title: 'Strategy Thinking',
      description: 'Analyse the market, competitors, and end-user requirements to determine the most efficient strategy for accomplishing corporate goals. Our strategic approach ensures effective and actionable solutions.'
    },
    {
      icon: <FaDollarSign className="text-green-600 text-4xl" />,
      title: 'Affordable & Quality Product',
      description: 'Experience premium business solutions without breaking the bank – we provide cost-effective, high-quality solutions that deliver exceptional value.'
    }
  ];

  return (
    <div className="container mx-auto space-y-4 rounded-lg">
      <h1 className="text-xl font-bold underline ">Core Values</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
        {values.map((value, index) => (
          <div key={index} className="flip-card h-[150px] cursor-pointer hover:border hover:shadow-lg ">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-4 rounded-lg border flex flex-col items-center justify-center">
                <div className="mb-4">{value.icon}</div>
                <h2 className="text-md font-bold mb-2">{value.title}</h2>
              </div>
              <div className="flip-card-back bg-white p-4 rounded-lg flex flex-col justify-center">
                <h2 className="text-md font-bold mb-2">{value.title}</h2>
                <p className="text-sm mb-4">{value.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
