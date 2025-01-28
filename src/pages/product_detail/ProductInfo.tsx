import { FaFacebook, FaStar } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";

interface ProductInfoProps {
  product: any;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => setQuantity(quantity + 1);
  const handleDecreaseQuantity = () => setQuantity(Math.max(quantity - 1, 1));

  const totalPrice = (product?.price * quantity).toFixed(2);

  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold">{product?.title}</h1>
      <p className="text-lg text-gray-700 font-semibold">USD. {totalPrice}</p>
      <div className="flex items-center gap-2">
        {product?.average_rating > 0 ? (
          Array(product?.average_rating)
            .fill(null)
            .map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))
        ) : (
          <span className="text-gray-500">No Ratings Yet</span>
        )}
        <span className="text-sm text-gray-500">(Customer Reviews)</span>
      </div>
      <p className="text-sm text-gray-600">{product?.description}</p>

      <div className="flex items-center gap-4">
        <span className="font-medium">Color:</span>
        {product?.color?.map((color: string, index: number) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
              color === "white" ? "border-gray-400" : ""
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center w-[100px] md:w-[120px] h-[48px] border-2 rounded-xl">
          <button
            onClick={handleDecreaseQuantity}
            className="px-3 py-2 text-lg"
          >
            -
          </button>
          <span className="px-4 text-lg">{quantity}</span>
          <button
            onClick={handleIncreaseQuantity}
            className="px-3 py-2 text-lg"
          >
            +
          </button>
        </div>
        <button className="w-full md:w-[215px] h-[48px] border border-black rounded-2xl hover:bg-gray-100">
          Add To Cart
        </button>
        <button className="w-full md:w-[215px] h-[48px] md:h-[64px] border border-black rounded-2xl hover:bg-gray-100">
          +Compare
        </button>
      </div>
      <div className="space-y-5 text-sm">
        <div className="flex items-center gap-2">
          <strong className="w-24">SKU:</strong>
          <span>{product.sku}</span>
        </div>
        <div className="flex items-center gap-2">
          <strong className="w-24">Category:</strong>
          <span>{product.product_category.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <strong className="w-24">Tags:</strong>
          <span>{product.tags.join(", ")}</span>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <strong className="w-24">Share:</strong>
        <div className="flex gap-3">
          <Link to="#" className="text-black-600 hover:text-gray-800">
            <FaFacebook />
          </Link>
          <Link to="#" className="text-black-600 hover:text-gray-800">
            <IoLogoLinkedin />
          </Link>
          <Link to="#" className="text-black-600 hover:text-gray-800">
            <FaSquareTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
