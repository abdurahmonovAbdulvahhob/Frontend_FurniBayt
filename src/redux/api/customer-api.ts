import { ICustomer, ICustomerDataResponse, OtpResponse } from "@/types";
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
        url: "auth/check-token",
        method: "GET",
      }),
    }),
    createOtp: build.mutation<OtpResponse, { email: string }>({
      query: (body) => ({
        url: "auth/newotp",
        method: "POST",
        body,
      }),
    }),
    verifyOtp: build.mutation<
      OtpResponse,
      { email: string; otp: string; verification_key: string }
    >({
      query: (body) => ({
        url: "otp/verify-otp",
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
  }),
});

export const {
  useCreateCustomerMutation,
  useCreateOtpMutation,
  useVerifyOtpMutation,
  useSignInMutation,
  useGetCustomerByIdQuery,
  useCheckTokenQuery,
} = extendedApi;
