import {
  IGetResponseProducts,
  IGetResponseSingleProduct,
  IProductQuery,
  IProduct
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
    getProductById: build.query<IProduct, any>({
      query: (params) => ({
        url: "product/:id",
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

export const { useGetProductsQuery, useGetSingleProductQuery, useGetProductByIdQuery } = extendedApi;

