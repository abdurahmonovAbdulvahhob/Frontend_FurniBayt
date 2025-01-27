import { memo } from "react";

function HeaderSkeleton() {
  return (
    <div className="container flex items-center justify-center h-[100px]">
      <div className="h-[41px] w-[1286px] flex justify-between items-center">
        <div className="h-[41px] w-[185px]  bg-bg-skeleton rounded-lg animate-pulse"></div>
        <div className="w-[430px] h-[41px]  bg-bg-skeleton rounded-lg animate-pulse"></div>
        <div className="w-[350px] h-[41px]  bg-bg-skeleton rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
}

export default memo(HeaderSkeleton) ;
