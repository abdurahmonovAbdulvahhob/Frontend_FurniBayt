import { NavLink } from "react-router-dom";
import { IProduct } from "../../../types";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div
      key={product.id}
      className="relative group overflow-hidden rounded-lg shadow-md"
    >
      {/* Product Image */}
      <div className="relative w-full h-[301px] max-[620px]:h-[240px] max-[430px]:h-[200px]">
        <NavLink to={`/product/${product.id}`}>
          <img
            className="w-full h-full bg-no-repeat bg-center bg-cover"
            src={product.image[0]}
            alt={product.title}
          />
        </NavLink>
      </div>

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
  );
};

export default ProductCard;
