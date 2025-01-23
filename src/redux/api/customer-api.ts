import { ICustomer } from '@/types';
import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    createCustomer: build.mutation<any, ICustomer>({
      query: (body) => ({
        url: "auth/signup-customer",
        method: "POST",
        body,
      }),
    }),
    createOtp: build.mutation<any, { email: string }>({
      query: (body) => ({
        url: "auth/newotp",
        method: "POST",
        body,
      }),
    }),
    verifyOtp: build.mutation<any, { email: string; otp: string, verification_key: string}>({
      query: (body) => ({
        url: "auth/verifyotp",
        method: "POST", 
        body,
      }),
    }),
  }),
});

export const { useCreateCustomerMutation, useCreateOtpMutation, useVerifyOtpMutation } = extendedApi;