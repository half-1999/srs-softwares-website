import React from "react";

const ServiceSection = ({ imagePath, content, type, title }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        type === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center my-8 border rounded-lg p-2`}
    >
      <div className='w-full lg:w-1/2'>
        <img
          src={imagePath}
          alt='Service'
          className='mx-auto h-[250px] object-cover rounded-xl'
        />
      </div>
      <div className='w-full lg:w-1/2 p-2'>
        <h1 className='text-lg font-semibold text-center'>{title}</h1>
        <p className='text-sm text-justify'>{content}</p>
      </div>
    </div>
  );
};

export default ServiceSection;
