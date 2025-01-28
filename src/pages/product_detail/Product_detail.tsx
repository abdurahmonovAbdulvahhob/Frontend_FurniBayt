import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "@/redux/api/product-api";
import { useGetProductsByCategoryQuery } from "@/redux/api/category-api";
import { useEffect } from "react";
import RelatedProducts from "./ReletedProduct/RelatedProducts";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isError, error, isLoading } = useGetSingleProductQuery(id);
  const { data: relatedProducts } = useGetProductsByCategoryQuery(
    data?.data?.product?.categoryId
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isError) {
    return (
      <div className="text-center text-red-500 min-h-[600px]">
        {(error as any)?.data?.message}
      </div>
    );
  }

  if (isLoading) {
    return <div className="text-center min-h-[600px]">Loading...</div>;
  }

  const product = data?.data?.product;

  return (
    <div className="min-h-[850px] container mx-auto py-6 sm:py-10 pt-10 sm:pt-14">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProductImages images={product?.image || []} />
        <ProductInfo product={product} />
      </div>
      <ProductTabs product={product} />
      {relatedProducts?.data?.products && (
        <RelatedProducts relatedProducts={relatedProducts.data.products} />
      )}
    </div>
  );
};

export default ProductDetail;
