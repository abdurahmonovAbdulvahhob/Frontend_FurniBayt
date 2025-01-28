import React from "react";
import { useGetProductsQuery } from "@/redux/api/product-api";
import Products from "@/components/products/Products";
import Hero from "./Hero";
import Browse from "./Browse";
import SwiperInfinite from "./swiper_infinite/swiper_infinite";
import Insparation from "./Insparation";
// import HomePageSkeleton from "../../skleton/HomeSkeleton/HomePageSkeleton";
import SkeletonBrowse from "../../skleton/HomeSkeleton/Browse";
import SkeletonProducts from "../../skleton/HomeSkeleton/Product";
import InsparationSkeleton from "../../skleton/HomeSkeleton/InsparationSkeleton";

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery({
    order: "desc",
    limit: 12,
  });

  if (isLoading) {
    return 
    <>
    {/* <HomePageSkeleton /> */}
    <SkeletonBrowse />
    <SkeletonProducts />
    <InsparationSkeleton />
    </>
    ;
  }

  if (error) {
    return <p>Failed to fetch products. Please try again later.</p>;
  }

  const products = data?.data?.products || [];

  return (
    <div>
      <Hero />
      <Browse />
      <Products products={products} />
      <Insparation />
      <SwiperInfinite />
    </div>
  );
};

export default React.memo(Home);
