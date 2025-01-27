import { useState } from "react";
import { IProduct } from "../../../types";
import ProductCard from "./ProductCard";
import ShowMoreButton from "./ShowMoreButton";


const RelatedProducts = ({
  relatedProducts,
}: {
  relatedProducts: IProduct[];
}) => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const showMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div className="container my-14 max-[620px]:my-4">
      {/* Title */}
      <h2 className="font-poppins-bold text-[40px] mb-8 text-center max-[620px]:text-2xl">
        Related Products
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-8 max-[1240px]:grid-cols-4 max-[990px]:grid-cols-3 max-[620px]:grid-cols-2 max-[620px]:gap-2">
        {relatedProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="container my-10 mt-20 max-[620px]:my-4">
        <ShowMoreButton
          onClick={showMoreProducts}
          isVisible={visibleProducts < relatedProducts.length}
        />
      </div>
    </div>
  );
};

export default RelatedProducts;
