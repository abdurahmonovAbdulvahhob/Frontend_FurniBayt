<<<<<<< HEAD
import { IGetResponseProducts, IProduct, IProductQuery } from '@/types'
import { mainApi } from './index'
=======
import {
  IGetResponseProducts,
  IGetResponseSingleProduct,
  IProductQuery,
} from "@/types";
import { mainApi } from "./index";
>>>>>>> 823174b59bb7987cc24417593e381f782837ced1

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IGetResponseProducts, IProductQuery>({
      query: (params) => ({
        url: "products",
<<<<<<< HEAD
        method: "GET",
        params,
      }),
    }),
    getProductById: build.query<IProduct, any>({
      query: (params) => ({
        url: "product/:id",
        method: "GET",
        params,
=======
        method: "GET",
        params,
      }),
    }),
    getSingleProduct: build.query<IGetResponseSingleProduct, any>({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
>>>>>>> 823174b59bb7987cc24417593e381f782837ced1
      }),
    }),
  }),
});

<<<<<<< HEAD
export const { useGetProductsQuery, useGetProductByIdQuery } = extendedApi;
=======
export const { useGetProductsQuery, useGetSingleProductQuery } = extendedApi;
>>>>>>> 823174b59bb7987cc24417593e381f782837ced1
