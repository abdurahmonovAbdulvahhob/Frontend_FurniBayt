// import { IGetProducts, IProduct, IProductQuery } from "@/types";
import { mainApi } from "./index";


const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    toggleWishlit: build.mutation<any, { productId: number; clientId: number }>(
      {
        query: (body) => ({
          url: "wishlist/create",
          method: "POST",
          body,
        }),
        invalidatesTags: ["Wishlist"],
      }
    ),
    getWishlist: build.query<any, string>({
      query: (id) => ({
        url: `wishlist/client/${id}`,
        method: "GET",
      }),
      providesTags: ["Wishlist"],
    }),
  }),
});

export const { useToggleWishlitMutation, useGetWishlistQuery } = extendedApi;
