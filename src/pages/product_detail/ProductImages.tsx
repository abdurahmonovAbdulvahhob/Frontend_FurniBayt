import { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [offset, setOffset] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
      <div className="flex md:flex-col gap-4 overflow-x-auto scrollbar-hidden">
        {images?.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Thumbnail ${index + 1}`}
            className={`w-[60px] h-[60px] object-cover rounded-md cursor-pointer ${
              offset === index ? "opacity-100" : "opacity-60"
            }`}
            onClick={() => setOffset(index)}
          />
        ))}
      </div>
      <div className="flex-1">
        <img
          src={images[offset]}
          alt="Selected product"
          className="w-full h-[300px] sm:h-[400px] object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductImages;
