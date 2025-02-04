import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: (params) => ({
        url: "product-category/get",
        method: "GET",
        params,
      }),
      providesTags: ["Category"],
    }),
    getSingleCategory: build.query({
      query: (id) => ({
        url: `product-category/get/${id}`,
        method: "GET",
      }),
      providesTags: ["Category"],
    }),
    getProductsByCategory: build.query({
      query: (categoryId) => ({
        url: `products`,
        method: "GET",
        params: { categoryId },
      }),
      providesTags: ["Product"],
    })
  }),
});

export const { useGetCategoriesQuery, useGetSingleCategoryQuery, useGetProductsByCategoryQuery } = extendedApi;
