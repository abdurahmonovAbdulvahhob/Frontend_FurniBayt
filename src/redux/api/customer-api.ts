import { ICustomer, ICustomerDataResponse } from "@/types";
import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    createCustomer: build.mutation<any, ICustomer>({
      query: (body) => ({
        url: "auth/signup-customer",
        method: "POST",
        body,
      }),
    }),
    checkToken: build.query<any, any>({
      query: () => ({
        url: "customer/auth/check-token",
        method: "GET",
      }),
    }),
    createOtp: build.mutation<any, { email: string }>({
      query: (body) => ({
        url: "auth/newotp",
        method: "POST",
        body,
      }),
    }),
    verifyOtp: build.mutation<
      any,
      { email: string; otp: string; verification_key?: string }
    >({
      query: (body) => ({
        url: "auth/verifyotp",
        method: "POST",
        body,
      }),
    }),
    signIn: build.mutation<any, { email: string; password: string }>({
      query: (body) => ({
        url: "auth/signin-customer",
        method: "POST",
        body,
      }),
    }),
    getCustomerById: build.query<ICustomerDataResponse, { id: number }>({
      query: ({ id }) => ({
        url: `customer/${id}`,
        method: "GET",
      }),
    }),
    signOut: build.mutation<any, any>({
      query: () => ({
        url: "auth/signout-customer",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useCreateCustomerMutation,
  useCreateOtpMutation,
  useVerifyOtpMutation,
  useSignInMutation,
  useGetCustomerByIdQuery,
  useCheckTokenQuery,
  useSignOutMutation,
} = extendedApi;
