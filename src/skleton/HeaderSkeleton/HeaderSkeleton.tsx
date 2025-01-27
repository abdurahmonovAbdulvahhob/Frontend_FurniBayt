import React from "react";

const HeaderSkeleton: React.FC = () => {
  return (
    <header className="hidden lg:flex fixed w-full z-50 bg-white shadow-md top-0">
      <div className="container mx-auto h-20 flex justify-between items-center font-poppins px-4 lg:px-0">
        {/* Logo Skeleton */}
        <div className="w-32 h-10 bg-gray-200 animate-pulse rounded-md"></div>

        {/* Navigation Links Skeleton */}
        <nav className="flex items-center gap-8">
          <div className="w-24 h-6 bg-gray-200 animate-pulse rounded-md"></div>
          <div className="w-24 h-6 bg-gray-200 animate-pulse rounded-md"></div>
          <div className="w-24 h-6 bg-gray-200 animate-pulse rounded-md"></div>
          <div className="w-24 h-6 bg-gray-200 animate-pulse rounded-md"></div>
        </nav>

        {/* Icons Skeleton */}
        <div className="flex items-center gap-6 text-xl">
          <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>
          <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>
          <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>
          <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSkeleton;
