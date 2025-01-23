import React from "react";
import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="bg-hero-image bg-cover bg-center h-[716px] flex items-center justify-end px-16 font-poppins">
      <div className="text-start w-[700px] bg-white bg-opacity-70 p-12 rounded-lg max-w-lg max-[640px]:max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-xl z-10">
        <h4 className="text-sm text-gray-500 uppercase mb-4">New Arrival</h4>
        <h1 className="text-2xl max-[640px]:text-3xl sm:text-3xl md:text-4xl lg:text-5xl lg:w-[560px] lg:h-[100px] leading-[65px] font-bold text-bg-primary mb-4">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-gray-500 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="w-[210px] h-[60px] bg-bg-primary text-white px-6 py-3 mt-6 font-bold rounded-sm hover:bg-yellow-700 duration-300">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
