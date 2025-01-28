import { memo } from "react";
import { IProduct } from "../../types";
import { useNavigate } from "react-router-dom";

interface ProductsProps {
  products: IProduct[];
}

const Products = ({ products }: ProductsProps) => {
  const navigate = useNavigate();

  return (
    <div className="container my-14 max-[620px]:my-4">
      <h2 className="font-poppins-bold text-[40px] mb-8 text-center max-[620px]:text-2xl">
        Our Products
      </h2>
      <div className="grid grid-cols-4 gap-8 max-[1240px]:grid-cols-3 max-[990px]:grid-cols-2 max-[620px]:gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            {/* Product Image */}
            <div className="relative w-full h-[301px] max-[620px]:h-[240px] max-[430px]:h-[200px]">
              <img
                onClick={() => navigate(`/product/${product.id}`)} // Navigate qo‘shildi
                className="w-full h-full bg-no-repeat bg-center bg-cover"
                src={`${product.image[0]}`}
                alt={product.title}
              />
            </div>

            {/* Hover Effect */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="bg-white text-black px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div> */}

            {/* Product Details */}
            <div className="py-4 px-4 bg-[#F4F5F7] transition-colors duration-300">
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
              <strong className="text-[#3A3A3A] text-[20px] leading-8 font-semibold max-[620px]:text-[15px]">
                {product.price.toLocaleString()} USD
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Products);
