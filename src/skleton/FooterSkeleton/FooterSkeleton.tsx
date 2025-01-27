// import { memo } from "react"

// function FooterSkeleton() {
//   return (
//     <div className="grid justify-center items-center h-[505px] animate-pulse">
//         <div className="w-[1114px] flex justify-between h-[320px] ">
//             <div className="w-[403px] h-[200px] grid">
//                 <div className="w-[85px] h-[36px] bg-bg-skeleton rounded-lg"></div>
//                 <div className="w-[285px] h-[72px] bg-bg-skeleton rounded-lg"></div>
//             </div>

//             <div className="w-[710px] h-[312px] grid">
//                 <div className="w-[500px] h-[24px] bg-bg-skeleton rounded-lg"></div>
//                 <div className="w-[710px] h-[24px] bg-bg-skeleton rounded-lg"></div>
//                 <div className="w-[250px] h-[24px] bg-bg-skeleton rounded-lg"></div>
//                 <div className="w-[290px] h-[24px] bg-bg-skeleton rounded-lg"></div>
//                 <div className="w-[70px] h-[24px] bg-bg-skeleton rounded-lg"></div>
//             </div>
//         </div>
//         <div className="w-[239px] h-[24px] bg-bg-skeleton rounded-lg">

//         </div>
//     </div>
//   )
// }

// export default memo(FooterSkeleton) 


const FooterSkeleton = () => {
  return (
    <footer className="w-full bg-gray-100 py-16">
      <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-8 animate-pulse">
        {/* Company Info Skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-300 rounded w-1/2"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>

        {/* Links Skeleton */}
        <div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-3/5"></div>
          </div>
        </div>

        {/* Help Skeleton */}
        <div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-4/5"></div>
          </div>
        </div>

        {/* Newsletter Skeleton */}
        <div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="h-10 bg-gray-300 rounded w-full mb-4"></div>
          <div className="h-10 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>

      {/* Footer Bottom Skeleton */}
      <div className="container mx-auto border-t border-gray-300 py-4 mt-8 animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;
    