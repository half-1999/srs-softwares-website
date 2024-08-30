import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// Sample testimonials data
const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Company A',
    text: 'This is an amazing service! It helped our business grow significantly.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Yogi_Adithyanath_in_Uttar_Pradesh_2023.jpg'
  },
  {
    name: 'Jane Smith',
    role: 'CTO, Company B',
    text: 'Highly recommend! The team is professional and the results are outstanding.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNouSYF7SGHOcJxxOF7XyyMbzyNWD5abuwjQ&s'
  },
  {
    name: 'Alice Johnson',
    role: 'Manager, Company C',
    text: 'A fantastic experience from start to finish. Very satisfied with the service.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Amit_Shah_photographed_during_the_first_Union_Cabinet_Meeting_of_the_18th_Lok_Sabha_%28cropped%29.jpg'
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
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4 rounded-xl">
                  <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 object-cover rounded-full mx-auto" />
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
