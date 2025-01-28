import { IGetResponseProducts, IProduct, IProductQuery } from '@/types'
import { mainApi } from './index'

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
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = extendedApi;
