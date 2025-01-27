
function SkeletonProducts() {
  return (
    <div className="container my-14 max-[620px]:my-4">
    <div className="h-10 w-[200px] bg-gray-300 rounded mx-auto mb-8 max-[620px]:w-[120px]"></div>

    <div className="grid grid-cols-4 gap-8 max-[1240px]:grid-cols-3 max-[990px]:grid-cols-2 max-[620px]:gap-2">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-md"
        >
          <div className="relative w-full h-[301px] bg-gray-300 max-[620px]:h-[240px] max-[430px]:h-[200px]"></div>

          <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="py-4 px-4 bg-[#F4F5F7]">
            <div className="h-6 w-3/4 bg-gray-300 rounded mb-2 max-[620px]:h-4"></div>

            <div className="h-4 w-1/2 bg-gray-300 rounded mb-4 max-[620px]:h-3"></div>

            <div className="h-6 w-1/3 bg-gray-300 rounded max-[620px]:h-4"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default SkeletonProducts