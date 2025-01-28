import Products from "@/components/products/Products";
import { useGetProductsQuery } from "@/redux/api/product-api";
import { IProduct } from "@/types";
import React, { useState, useEffect } from "react";
import Browse from "./Browse";
import Hero from "./Hero";
import SwiperInfinite from "./swiper_infinite/swiper_infinite";
import Insparation from "./Insparation";
import HomePageSkeleton from "../../skleton/HomeSkeleton/HomePageSkeleton";
import SkeletonBrowse from "../../skleton/HomeSkeleton/Browse";
import SkeletonProducts from "../../skleton/HomeSkeleton/Product";
import InsparationSkeleton from "../../skleton/HomeSkeleton/InsparationSkeleton";

const Home: React.FC = () => {
  // Fetch products from API
  const { data, error } = useGetProductsQuery({
    order: "desc",
    limit: 12,
  });

  const [isLoading, setIsLoading] = useState(true); // Local loading state
  const [isSkeletonVisible, setSkeletonVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 1 second (or your desired duration)
      setSkeletonVisible(false);
    }, 50); // Set a delay before changing the loading state

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, []); // Empty dependency array to run only once when the component mounts

  // Loading and error handling
  if (isLoading && isSkeletonVisible) {
    return (
      <>
        <HomePageSkeleton />
        <SkeletonBrowse />
        <SkeletonProducts />
        <InsparationSkeleton />
      </>
    );
  }

  if (error) {
    return <p>Failed to fetch products. Please try again later.</p>;
  }

  // Ensure data is available
  const products: IProduct[] = data?.data?.products || [];

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
