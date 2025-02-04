// import { IGetProducts, IProduct, IProductQuery } from "@/types";
import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    toggleWishlit: build.mutation<any, { productId: number; customerId: number }>(
      {
        query: (body) => ({
          url: "wishlist",
          method: "POST",
          body,
        }),
        invalidatesTags: ["Wishlist","Product"],
      }
    ),
    getWishlist: build.query<any, string>({
      query: (id) => ({
        url: `wishlist/client/${id}`,
        method: "GET",
      }),
      providesTags: ["Wishlist"],
    }),
    setWishlist: build.mutation<any, any>({
      query: (args) => ({
        url: `like/wishlist/${args.customerId}`,
        method: "POST",
        body: args.wishlist,
      }),
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const {
  useToggleWishlitMutation,
  useSetWishlistMutation,
  useGetWishlistQuery,
} = extendedApi;
