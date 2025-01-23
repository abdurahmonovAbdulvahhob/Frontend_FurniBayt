import React from "react";
import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="hero container relative w-full h-auto font-poppins">
      <img
        src={heroImage}
        alt="Interior design"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-[#F9F1E7] p-8 rounded-lg shadow-lg 
        max-w-x s sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
      >
        <p className="text-[#3A3A3A] text-sm sm:text-base tracking-wide font-medium">
          New Arrival
        </p>
        <h1
          className="text-[#B88E2F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2 
          sm:w-full md:w-[400px] lg:w-[500px] xl:w-[560px]"
        >
          Discover Our <br /> New Collection
        </h1>
        <p className="text-[#898989] text-sm sm:text-base md:text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button
          className="mt-6 bg-[#B88E2F] text-[#F9F1E7] py-3 px-6 text-sm sm:text-base font-medium
          w-full sm:w-[180px] md:w-[200px] lg:w-[210px] hover:bg-yellow-800 duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
