import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
<<<<<<< HEAD
  tagTypes: ["Products","Wishlist",],
=======
  tagTypes: ["Products", "Category"],
>>>>>>> 823174b59bb7987cc24417593e381f782837ced1
  endpoints: () => ({}),
});
