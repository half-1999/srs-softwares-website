import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="my-2">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Carousel Image ${index + 1}`} className="w-full h-[350px] object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
