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
    getProductsWithCategoryId: build.query<IGetResponseProducts, number>({
      query: (category_id) => ({
        url: `products/category/${category_id}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, useGetProductByIdQuery } = extendedApi;
