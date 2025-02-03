import { memo } from "react";
import { IProduct } from "../../types";
import { IoCartOutline } from "react-icons/io5";
import Heart from "./Heart";
import wishlist from "../../assets/images/wishlist-empty1.jpg";
import { useNavigate } from "react-router-dom";
import Discount from "./Discount";

interface ProductsProps {
  products: IProduct[];
  title?: string; 
}

const Products = ({ products }: ProductsProps) => {
  const navigate = useNavigate();

  return (
    <div className="container my-14 max-[620px]:my-4">
      <div className="text-center">
        {products?.length > 0 ? (
          <h2 className="font-poppins-bold text-[40px] mb-8 text-center max-[620px]:text-2xl">
            Our Products
          </h2>
        ) : (
          <img
            src={wishlist}
            alt="Favorite Products"
            className="mx-auto w-full max-w-[300px]"
          />
        )}
      </div>
      <div className="grid grid-cols-4 gap-8 max-[1240px]:grid-cols-3 max-[990px]:grid-cols-2 max-[620px]:gap-2">
        {products?.length > 0 ? (
          products.map((product) => {
            const discount = Number(product.discount) || 0;
            const discountPrice =
              discount > 0
                ? product.price - (product.price * discount) / 100
                : product.price;

            return (
              <div
                key={product.id}
                className="relative group overflow-hidden rounded-lg shadow-md"
              >
                <div className="relative w-full h-[301px] max-[620px]:h-[240px] max-[430px]:h-[200px] overflow-hidden">
                  <img
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-full h-full bg-no-repeat bg-center bg-cover duration-300 md:scale-100 cursor-pointer 
                  group-hover:opacity-100 group-hover:scale-110"
                    src={product.image[0]}
                    alt={product.title}
                  />
                </div>

                <div>
                  <Heart product={product} />
                  <button className="hover:bg-slate-200 shadow-md dark:text-black absolute top-12 md:top-12 right-2 md:right-[-40px] delay-100 duration-300 group-hover:right-2 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center text-[20px]">
                    <IoCartOutline />
                  </button>
                  {discount > 0 && <Discount percent={discount} />}
                </div>

                <div className="container py-4 px-4 bg-white transition-colors duration-300">
                  <h2
                    title={product.title}
                    className="line-clamp-1 text-[24px] font-semibold leading-8 max-[620px]:text-lg"
                  >
                    {product.title}
                  </h2>
                  <p
                    title={product.description}
                    className="line-clamp-1 text-[#898989] text-lg max-[620px]:text-sm"
                  >
                    {product.description}
                  </p>
                  <strong className="text-[#3A3A3A] dark:text-slate-200 text-[20px] leading-8 font-semibold max-[620px]:text-[15px]">
                    {discountPrice.toLocaleString()} USD
                  </strong>

                  {discount > 0 && (
                    <s className="ml-2 text-gray-400">
                      {product.price.toLocaleString()} USD
                    </s>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="font-poppins-bold mb-8 text-center max-[620px]:text-2xl">
            It seems like you haven't added anything to your wishlist yet.
            <br />
            Browse our products and add your favorites here!
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(Products);
