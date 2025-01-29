import React from "react";

const Discount = ({ percent }: { percent: number }) => {
  return (
    <button className="absolute top-2 left-2  duration-300 w-12 h-12 rounded-full bg-[#E97171] text-white">
      -{percent}%
    </button>
  );
};

export default React.memo(Discount);
