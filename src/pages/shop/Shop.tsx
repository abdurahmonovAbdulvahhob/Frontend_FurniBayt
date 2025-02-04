import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/api/product-api";
import { Pagination } from "@mui/material";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsViewList } from "react-icons/bs";
import Hero from "./Hero";
import { PiCirclesFourFill } from "react-icons/pi";
import Products from "../../components/products/Products";
import ShopAdvantage from "../../components/Shop_advantage/Shop_advantage";

const Shop = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(16);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("default"); 

  const { data, isLoading } = useGetProductsQuery({ limit, page });

  useEffect(() => {
    console.log("Kelgan data:", data);
  }, [data]);

  const totalPages = data ? Math.ceil(data?.data?.total / limit) : 0;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    setPage(value);
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= 1 && value <= 32) {
      setLimit(value);
      setPage(1);
    }
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const sortedProducts = data?.data?.products
    ? [...data.data.products].sort((a, b) => {
        if (sortOrder === "price-asc") return a.price - b.price; 
        if (sortOrder === "price-desc") return b.price - a.price; 
        return 0;
      })
    : [];

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  return (
    <>
      <Hero />
      <div className="bg-[#F9F1E7] dark:bg-[#645644] h-[100px] grid place-items-center font-poppins mb-16">
        <div className="container flex justify-between">
          <div className="flex justify-between items-center gap-[24px]">
            <div
              className={`flex justify-between items-center gap-[12px] cursor-pointer 
              hover:text-bg-primary duration-300 ${
                isFilterOpen ? "text-bg-primary" : ""
              }`}
              onClick={toggleFilter}
            >
              <GiSettingsKnobs className="w-[25px] h-[25px]" />
              <p className="text-[20px] leading-[30px] font-[400]">Filter</p>
            </div>
            <div className="flex justify-center items-center cursor-pointer hover:text-bg-primary duration-300">
              <PiCirclesFourFill className="w-[28px] h-[28px]" />
            </div>
            <div className="flex justify-center items-center cursor-pointer hover:text-bg-primary duration-300">
              <BsViewList className="w-[28px] h-[28px]" />
            </div>
            <div>|</div>
            <div>
              Showing 1–{limit} of {data?.data?.total || 0} results
            </div>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="flex gap-3 items-center cursor-pointer hover:text-bg-primary duration-300">
              <p>Show</p>
              <input
                type="number"
                placeholder="16"
                value={limit}
                onChange={handleLimitChange}
                max={32}
                min={1}
                className="w-[55px] h-[55px] bg-white dark:bg-slate-100 outline-none text-[20px] text-center rounded-sm text-bg-primary"
              />
            </div>
            <div className="flex gap-3 items-center cursor-pointer hover:text-bg-primary duration-300">
              <label htmlFor="sort">Sort by</label>
              <select
                id="sort"
                value={sortOrder}
                onChange={handleSortChange}
                className="w-[188px] h-[55px] bg-white dark:bg-slate-100 outline-none text-[20px] indent-3 rounded-sm text-bg-primary"
              >
                <option value="default">Default</option>
                <option value="price-asc">Low to High</option>
                <option value="price-desc">High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {isFilterOpen && (
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg mt-4 container">
          <h3 className="text-xl font-semibold mb-4">Filter Options</h3>
          <p>Here comes the filter settings...</p>
        </div>
      )}

      <section className="container">
        {isLoading && (
          <p className="my-8 text-center text-xl font-semibold text-gray-700 dark:text-white">
            Loading ...
          </p>
        )}
        {sortedProducts.length > 0 ? (
          <Products products={sortedProducts} />
        ) : (
          <p className="text-center text-xl font-semibold text-gray-700 dark:text-white">
            Product not found
          </p>
        )}

        <div className="flex justify-center">
          <Pagination
            count={totalPages}
            shape="rounded"
            page={page}
            onChange={handlePageChange}
            sx={{
              "& .MuiPagination-ul": {
                display: "flex",
                gap: "30px",
                "& .Mui-selected": {
                  backgroundColor: "#B88E2F",
                  color: "#fff",
                  fontWeight: "500",
                },
              },
              "& .MuiPaginationItem-root": {
                backgroundColor: "#F9F1E7",
                color: "#000",
                borderRadius: "8px",
                fontSize: "20px",
                height: "60px",
                width: "60px",
              },
              "@media (max-width: 600px)": {
                "& .MuiPaginationItem-root": {  
                  fontSize: "15px",
                  height: "45px",
                  width: "45px",
                },
                "& .MuiPagination-ul": {
                  gap: "10px",
                },
              },
            }}
          />
        </div>
      </section>
      <ShopAdvantage />
    </>
  );
};

export default React.memo(Shop);
