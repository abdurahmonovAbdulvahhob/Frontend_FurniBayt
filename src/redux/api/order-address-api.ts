import { mainApi } from ".";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getAddress: build.query({
      query: () => ({
        url: `order-addresses`,
        method: "GET",
      }),
      providesTags: ["Address"], 
    }),
  }),
  overrideExisting: false,
});

export const { useGetAddressQuery } = extendedApi;
