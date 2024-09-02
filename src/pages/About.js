import React from 'react';
import Banner from '../components/Banner';
import AboutImg from '../assets/about-us.jpg';
import WelcomeImg from '../assets/a2.jpg';
import MissionImg from '../assets/mission.png';
import { FaLightbulb, FaShieldAlt, FaHandsHelping, FaThumbsUp, FaCheck, } from 'react-icons/fa';
import { FaCheckCircle, FaUsers, FaHandshake } from 'react-icons/fa';
import AboutHero from '../components/AboutHero';
import { FaBullseye, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const aboutData = {
  sections: [
    {
      type: 'mission',
      title: 'Committed to Your Success',
      content: 'SRS Softwares is dedicated to developing innovative approaches to assist our clients in taking their businesses to a higher level. Our industry expertise and experience help companies meet and exceed their goals and realize increased growth and profits. We have built a global reputation in the IT community as a great place to work. As a result, we get our choice of the cream of the IT crop. SRS Softwares offers a complete portfolio of services applicable to a broad spectrum of industries and business models. Our strong domain expertise in a variety of sectors allows us to meet the needs of our clients, no matter how complex. We provide innovative, superior solutions within your time and budget constraints.'
    },
    {
      type: 'whySRS',
      title: 'Why SRS Software',
      content: `We leverage our extensive experience and talented resource pool to deliver top-notch IT services for businesses globally. Over the years, we have succeeded in keeping up the trust placed in us by our customers and established long-term relations.
        <br /><br />
        <strong>One Step Solution:</strong> We offer end-to-end IT services, design, development, quality assurance with a dedicated group of experts for various industry domains and technologies.
        <br /><br />
        <strong>Customer Focus:</strong> In this constantly changing and challenging business world, we aim to provide competent advice as per the custom needs of the client to meet their business goals.
        <br /><br />
        <strong>Commitment:</strong> We deliver the maximum value to our customers by becoming their reliable technology partner. Our success is defined by the success of our customer.`
    },
    {
      type: 'values',
      title: 'Our Values',
      content: [
        {
          subTitle: 'Innovation',
          text: 'Embrace and drive technological advancements by fostering a culture of creativity and continuous learning. Encourage the exploration of new ideas and cutting-edge solutions to stay at the forefront of the rapidly evolving IT landscape.',
          icon: <FaLightbulb className="text-3xl text-yellow-500" />
        },
        {
          subTitle: 'Reliability',
          text: 'Prioritize the delivery of dependable and robust solutions. Uphold a commitment to quality in products and services, ensuring that clients can trust the reliability and performance of the technology provided by the company.',
          icon: <FaShieldAlt className="text-3xl text-green-500" />
        },
        {
          subTitle: 'Customer-Centric Approach',
          text: 'Place the customer at the center of all activities. Strive to understand and meet the unique needs of clients, providing exceptional support and personalized solutions. Foster long-term relationships by consistently exceeding customer expectations.',
          icon: <FaHandsHelping className="text-3xl text-blue-500" />
        },
        {
          subTitle: 'Integrity and Security',
          text: 'Uphold the highest standards of integrity and prioritize the security of information and systems. Demonstrate a commitment to ethical conduct, transparency, and the protection of sensitive data, instilling confidence in clients and stakeholders.',
          icon: <FaThumbsUp className="text-3xl text-red-500" />
        }
      ]
    }
  ],
};



const About = () => {
  const { sections } = aboutData;

  return (
    <div className="relative overflow-hidden">
      <Banner
        image={AboutImg}
        heading="About Us"
        paragraph="Innovative tech solutions for success."
      />
      <div className="container mx-auto p-3">
        <div className="block lg:flex flex-row items-center my-4">
          <div className="lg:w-1/2">
            <img src={WelcomeImg} alt="Service" className="w-full rounded-xl" />
          </div>
          <div className="lg:w-1/2 p-4">
            <p className="text-md text-justify">
              <span className='text-[#4FA8D6] text-lg font-semibold'>SRS Softwares</span> has been a pioneer in providing top-notch Software Development services for over 18 years. Strategically located in Aligarh and Noida, we offer a comprehensive range of IT services that encompass Software Development, Website Designing, E-commerce Solutions, and Android App Development. We meticulously understand our client's planning and strategy before embarking on the development process, ensuring that each solution is tailor-made to meet their specific needs.
              <br /><br />
              Our extensive and diverse experience empowers us to deliver a wide array of systems and services designed to maximize efficiency, enhance productivity, and ensure security. Our solutions are not only cost-effective but also provide substantial business value. We leverage the latest technologies and industry best practices to create innovative, reliable, and scalable software solutions. Our commitment to excellence and customer satisfaction has established us as a trusted partner for businesses seeking to thrive in the digital age.
              <br /><br />
            </p>
          </div>
        </div>
      <AboutHero/>

        <div className={`block lg:flex flex-row-reverse items-center my-2 `}>
      <div className="lg:w-1/2 p-4">
      <div className='grid grid-cols-1 sm:grid-cols-2 p-2 gap-4'>
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <FaCheckCircle className="text-red-600 text-3xl mr-2" />
            <h2 className='text-xl  font-bold'>One Step Solution</h2>
          </div>
          <p className='ml-10 text-sm'>
            We provide comprehensive solutions that meet all your software and development needs in one place.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <FaUsers className="text-yellow-600 text-3xl mr-2" />
            <h2 className='text-xl  font-bold'>Customer Focus</h2>
          </div>
          <p className='ml-10 text-sm'>
            Our customer-centric approach ensures that we prioritize your needs and deliver solutions that exceed expectations.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <FaHandshake className="text-purple-600 text-3xl mr-2" />
            <h2 className='text-xl  font-bold'>Commitment</h2>
          </div>
          <p className='ml-10 text-sm'>
            We are committed to delivering high-quality solutions and building long-term relationships with our clients.
          </p>
        </div>
      </div>
      </div>
      <div className="lg:w-1/2 p-4">
        <h2 className='text-xl  font-bold'>Why SRS Softwares <span className='text-blue-700 text-4xl'>?</span></h2>
        <p className='text-md text-justify'>We leverage our extensive experience and talented resource pool to deliver the top-notch IT services for businesses globally. Over the years, we have succeeded in keeping up the trust placed in us by our customers and established long term relations.</p>
      </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-[80%] mx-auto bg-gray-200 p-2 rounded-lg mb-10">
          {/* Left Side */}
          <div className="space-y-4 mx-auto rounded-xl">
            
                <img src='https://m.economictimes.com/thumb/msid-97021979,width-1200,height-900,resizemode-4,imgsize-46928/modi-new-pti1.jpg' alt="Service" className="rounded-xl mx-auto" />
              </div>

              {/* Right Side */}
              <div className="p-6 my-auto">
                <h1 className="text-2xl font-bold mb-4">Transform your enterprise with cutting-edge solutions! Here's how we can help:</h1>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <p className="text-md">Customized software development tailored to your business needs.</p>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <p className="text-md">Expert IT consulting for strategic growth and optimization.</p>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <p className="text-md">Seamless integration with your existing systems.</p>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <p className="text-md">Scalable solutions for future-proofing your operations.</p>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <p className="text-md">24/7 support and maintenance to keep your business running smoothly.</p>
                  </div>
                  {/* Add additional points as needed */}
                </div>
                <div className="mt-6 text-center">
                  <Link to='/services'>
                  <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">Explore Our Services</button>
                  </Link>
                </div>
              </div>
        </div>
        
          <div className="grid grid-cols-3 gap-6 mx-auto bg-gray-200 p-4 shadow-md rounded-lg">
  {/* Left Side - Vision Content */}
  <div className="flex flex-col col-span-1">
    <div className="flex flex-col ">
      <div className="flex">
        <FaBullseye className="text-4xl text-blue-500 mr-2" />
        <h1 className="text-2xl font-bold">Our Vision</h1>
      </div>
      <p className="text-justify text-sm">
        Our vision is to empower businesses with innovative and efficient solutions, ensuring their sustained growth and success in an ever-evolving market. We strive to be the catalyst for positive change, driving progress through advanced technology and exceptional service.
      </p>
    </div>
  </div>

  {/* Center - Image */}
  <div className="flex items-center justify-center col-span-1">
    <img src={MissionImg} alt="Mission" className="rounded-xl" />
  </div>

  {/* Right Side - Mission Content */}
  <div className="flex flex-col col-span-1">
    <div className="flex flex-col mt-[22%]">
      <div className="flex mt-5">
        <FaBullseye className="text-4xl text-blue-500 mr-2" />
        <h1 className="text-2xl font-bold">Our Mission</h1>
      </div>
      <p className="text-justify text-sm">
        Our mission is to assist businesses in reaching their goals by offering all-inclusive and cutting-edge solutions. We are aware of the problems and wants of our customers, and we offer practical, cost-effective solutions. These remedies could include tech-based services, including data management, cloud computing, business process automation, and software development.
      </p>
    </div>
  </div>
</div>



          

        {sections.map((section, index) => {
          switch (section.type) {
            case 'mission':
              return (
                <section key={index} className="my-4">
                  <h2 className="text-2xl font-bold mb-4 text-center">{section.title}</h2>
                  <p className="text-md text-justify">{section.content}</p>
                </section>
              );

            case 'values':
              return (
                <section key={index} className="my-8 px-4 ">
                  <h2 className="text-2xl font-bold mb-4 text-center">{section.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    {section.content.map((value, i) => (
                      <div key={i} className="flex items-center space-x-4 bg-gray-200 p-2 rounded-xl">
                        <div className="text-3xl">{value.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold">{value.subTitle}</h3>
                          <p className="text-md text-justify">{value.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );

            default:
              return null;
          }
        })}

        
      </div>
    </div>
  );
};

export default About;
