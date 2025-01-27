import {
  IGetResponseProducts,
  IGetResponseSingleProduct,
  IProductQuery,
} from "@/types";
import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IGetResponseProducts, IProductQuery>({
      query: (params) => ({
        url: "products",
        method: "GET",
        params,
      }),
    }),
    getSingleProduct: build.query<IGetResponseSingleProduct, any>({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = extendedApi;
