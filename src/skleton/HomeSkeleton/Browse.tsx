const SkeletonBrowse = () => {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="h-8 w-48 bg-gray-300 mx-auto rounded"></div>
            <div className="h-5 w-72 bg-gray-300 mx-auto mt-4 rounded"></div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="py-8 px-6 rounded-lg flex flex-col items-center gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-full max-w-[381px] h-[250px] md:h-[300px] lg:h-[350px] bg-gray-300 rounded-md"></div>
                <div className="h-6 w-32 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SkeletonBrowse;