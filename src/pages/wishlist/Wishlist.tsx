import Products from "@/components/products/Products";
import { RootState } from "@/redux";
import { useGetWishlistQuery } from "@/redux/api/wishlist-api";
import { useSelector } from "react-redux";
import { useCheckTokenQuery } from "../../redux/api/customer-api";
import { useEffect } from "react";

const Wishlist = () => {
  // const id = useSelector((state: RootState) => state.customer.value.id);
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const token = useSelector((state: RootState) => state.token.access_token);
  const {data: tokenData} = useCheckTokenQuery(null, {skip: Boolean(!token)});
  const { data } = useGetWishlistQuery(Number(tokenData?.customer?.id), {skip: Boolean(!tokenData)});

  // const { data } = useGetWishlistQuery(String(id));

  // console.log({ data, wishlist });
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <Products
        data={token ? data?.data?.products : wishlist}
        title={
          data?.data?.products?.length > 0 || wishlist?.length > 0
            ? "Yours like products"
            : "You have not like products"
        }
      />
    </div>
  );
};

export default Wishlist;
