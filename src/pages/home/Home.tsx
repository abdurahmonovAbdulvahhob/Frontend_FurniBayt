import React from "react";
import { useGetProductsQuery } from "@/redux/api/product-api";
import { IProduct } from "@/types";
import Hero from "./Hero";
import Browse from "./Browse";
import Products from "@/components/products/Products";

const Home: React.FC = () => {

  // Fetch products from API
  const { data, isLoading, error } = useGetProductsQuery({ order: "desc" });

  // Loading and error handling
  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Failed to fetch products. Please try again later.</p>;
  }

  // Ensure data is available
  const products: IProduct[] = data?.data?.products || [];

  return (
    <div className="">
      <Hero />
      <Browse />
      <Products products={products} />
    </div>
  );
};

export default React.memo(Home);
