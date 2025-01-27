const InsparationSkeleton = () => {
    return (
      <div className="bg-[#FCF8F3] py-16">
        <div className="container mx-auto flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-8 px-6 lg:px-0">
          <div className="text-center lg:text-left lg:w-1/2 space-y-4">
            <div className="bg-gray-300 h-8 lg:h-10 w-3/4 lg:w-1/2 mx-auto lg:mx-0 rounded"></div>
            <div className="bg-gray-200 h-6 w-5/6 lg:w-3/4 mx-auto lg:mx-0 rounded"></div>
            <div className="bg-gray-300 h-6 w-2/3 lg:w-1/2 mx-auto lg:mx-0 rounded"></div>
            <div className="bg-gray-400 h-12 w-40 mx-auto lg:mx-0 rounded-md"></div>
          </div>
  
          <div className="lg:w-1/2 space-y-6">
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="relative bg-gray-200 rounded-lg h-64 lg:h-72 overflow-hidden"
                >
                  <div className="absolute bottom-4 left-4 w-2/3 bg-gray-300 h-6 rounded"></div>
                  <div className="absolute bottom-2 left-4 w-1/3 bg-gray-400 h-4 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default InsparationSkeleton;