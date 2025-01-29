import React, { FC, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [value, setValue] = useState<string>(""); 
  const debouncedValue = useDebounce(value.trim(), 300); 
  const { data, isSuccess, isFetching } = useGetProductsQuery(
    { limit: 10, filter: debouncedValue },
    { skip: !debouncedValue }
  );

  const ref = useOutsideClick(() => {
    setSearchOpen(false);
    setValue(""); 
  });

  const handleClose = () => {
    setSearchOpen(false);
    setValue("");
  };

  const handleNavigateHome = () => {
    navigate("/");
    setSearchOpen(false);
  };

  useEffect(() => {
    if (!debouncedValue) {
      setSearchOpen(false);
    }
  }, [debouncedValue, setSearchOpen]);

  useEffect(() => {
    if (searchOpen) {
      document.body.classList.add("overflow-hidden"); 
    } else {
      document.body.classList.remove("overflow-hidden"); 
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [searchOpen]);

  return (
    <>
      {/* Xiralashgan fon */}
      {searchOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={handleClose}
        />
      )}

      {/* Qidiruv qismi */}
      <div
        ref={ref}
        className={`fixed top-0 left-0 right-0 bg-white p-6 flex flex-col items-center gap-4 shadow-lg min-h-[250px] rounded-b-3xl w-full transition-all duration-500 ${
          searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          zIndex: 9999,
        }}
      >
        {/* Logo va nom */}
        <div
          className="absolute left-5 top-5 flex items-center gap-2 font-poppins cursor-pointer"
          onClick={handleNavigateHome}
        >
          {/* Logo */}
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
          <div className="max-w-2xl w-full flex flex-col gap-1 overflow-y-auto max-h-96">
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
              "living room",
            
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
          <CircularProgress />
        ) : (
          <div>
            <p className="text-red-500">Product not found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(HeaderSearch);
