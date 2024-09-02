import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// Sample testimonials data
const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Company A',
    text: 'This is an amazing service! It helped our business grow significantly.',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
  },
  {
    name: 'Jane Smith',
    role: 'CTO, Company B',
    text: 'Highly recommend! The team is professional and the results are outstanding.',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
  },
  {
    name: 'Alice Johnson',
    role: 'Manager, Company C',
    text: 'A fantastic experience from start to finish. Very satisfied with the service.',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
  },
];

const TestimonialsPage = () => {
  // Slick slider settings
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto space-y-5 rounded-lg m-5">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4 rounded-xl">
                  <img src={testimonial.image} alt={testimonial.name} className="w-20 object-cover rounded-full mx-auto" />
                </div>
                <FaQuoteLeft className="text-2xl mb-4 text-gray-600" />
                <p className="text-md mb-4 text-gray-700">{testimonial.text}</p>
                <FaQuoteRight className="text-2xl mb-4 text-gray-600" />
                <h2 className="text-lg font-bold text-gray-800">{testimonial.name}</h2>
                <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden lg:block lg:w-1/2 p-4 my-auto">
          <h2 className="text-xl font-bold mb-4">Client Testimonials</h2>
          <h2 className="text-3xl font-bold mb-4">What Our Clients Have to Say About Us</h2>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
