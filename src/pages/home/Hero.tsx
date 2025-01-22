import React from "react";
import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="hero container relative w-full h-[auto]">
      <img
        src={heroImage}
        alt="Interior design"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-[#F9F1E7] p-10 rounded-lg font-poppins shadow-lg max-w-md">
        <p className="text-[#3A3A3A]  text-sm tracking-wide font-medium">
          New Arrival
        </p>
        <h1 className="text-[#B88E2F] text-4xl font-bold leading-tight mt-2">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-[#898989] text-sm mt-4 font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-6 bg-[#B88E2F] text-[#F9F1E7] py-3 px-6 text-sm font-medium  rounded-md">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
