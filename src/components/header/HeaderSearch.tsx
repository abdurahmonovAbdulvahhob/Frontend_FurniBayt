import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from "@/assets/logo/logo1-removebg-preview.png"; // To'g'ri manba
import { FiSearch } from "react-icons/fi";
import { useGetProductsQuery } from "@/redux/api/product-api";
import { IProduct } from "@/types";
import useDebounce from "@/hooks/useDebounce";
import { CircularProgress } from "@mui/material";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const HeaderSearch: FC<{
  searchOpen: boolean;
  setSearchOpen: (state: boolean) => void;
}> = ({ searchOpen, setSearchOpen }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>(""); // Qidiruv qiymati
  const debouncedValue = useDebounce(value.trim(), 300); // Kechikish bilan qidiruv
  const { data, isSuccess, isFetching } = useGetProductsQuery(
    { limit: 10, filter: debouncedValue },
    { skip: !debouncedValue }
  );

  const ref = useOutsideClick(() => {
    setSearchOpen(false); // Tashqarida bosilganda modal yopiladi
    setValue(""); // Qidiruv maydoni tozalanadi
  });

  const handleClose = () => {
    setSearchOpen(false);
    setValue("");
  };

  const handleNavigateHome = () => {
    navigate("/");
    setSearchOpen(false);
  };

  return (
    <div
      ref={ref}
      className={`absolute top-0 bg-white p-6 flex flex-col items-center gap-4 shadow-lg min-h-[250px] rounded-b-3xl w-full transition-all duration-500 ${
        searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Logo va nom */}
      <div
        className="absolute left-5 top-5 flex items-center gap-2 font-poppins cursor-pointer"
        onClick={handleNavigateHome}
      >
        {/* <img  alt="logo" className="h-10 w-auto" /> */}
      </div>

      {/* Qidiruv inputi */}
      <div className="flex items-center w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search for products"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-3 border rounded-l-lg outline-none text-gray-700 text-sm"
        />
        <button className="p-3 border border-x-0 hover:bg-amber-600 hover:border-amber-600 hover:text-white transition duration-300">
          <FiSearch className="h-5 w-5" />
        </button>
        <button
          onClick={handleClose}
          className="p-3 text-[14.5px] bg-red-500 text-white rounded-r-lg hover:bg-red-600 transition duration-300"
        >
          Cancel
        </button>
      </div>

      {/* Natijalar yoki tavsiyalar */}
      {!isFetching &&
      value.trim() &&
      isSuccess &&
      data?.data?.products?.length > 0 ? (
        <div className="max-w-2xl w-full flex flex-col gap-1">
          {data.data.products.map((product: IProduct) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={handleClose}
              className="flex items-center gap-3 border-b p-1 hover:bg-slate-100 last:border-b-0"
            >
              <img
                src={product.image[0]}
                alt={product.title}
                className="w-12 h-12 object-contain"
              />
              <span>{product.title}</span>
            </Link>
          ))}
        </div>
      ) : !value.trim() ? (
        // Tavsiya qilinayotgan qidiruv kalit so'zlari
        <div className="flex flex-wrap gap-3 max-w-2xl justify-center">
          {[
            "Sofa",
            "Table",
            "Chair",
            "Bed Frame",
            "Bookshelf",
            "Coffee Table",
            "Wardrobe",
            "Armchair",
          ].map((term) => (
            <span
              key={term}
              onClick={() => setValue(term)}
              className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 cursor-pointer hover:bg-gray-200 hover:shadow-md transition duration-300"
            >
              {term}
            </span>
          ))}
        </div>
      ) : isFetching ? (
        // Yuklanmoqda
        <CircularProgress />
      ) : (
        // Topilmadi
        <div>
          <p className="text-red-500">Product not found</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(HeaderSearch);
