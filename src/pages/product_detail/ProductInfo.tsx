import { FaStar } from "react-icons/fa";
import { useState } from "react";

interface ProductInfoProps {
  product: any;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold">{product?.title}</h1>
      <p className="text-lg text-gray-700 font-semibold">
        USD. {product?.price}
      </p>
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
        {product?.color?.map((color, index) => (
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
        <div className="flex items-center w-[100px] md:w-[120px] h-[48px] border rounded-xl">
          <button
            onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            className="px-3 py-2 text-lg"
          >
            -
          </button>
          <span className="px-4 text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 text-lg"
          >
            +
          </button>
        </div>
        <button className="w-full md:w-[215px] h-[48px] bg-blue-500 text-white rounded-xl hover:bg-blue-600">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
