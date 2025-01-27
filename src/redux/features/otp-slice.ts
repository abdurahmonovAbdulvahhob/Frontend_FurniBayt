import { clearStorage, getStorage, saveStorage } from "@/utils";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface OTPState {
  email: string;
  verification_key: string;
}

const initialState: OTPState = {
  email: getStorage("otp_email") || "",
  verification_key: getStorage("verification_key") || "",
};

export const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    saveEmail: (
      state,
      action: PayloadAction<{ email: string; verification_key: string }>
    ) => {
      state.email = action.payload.email;
      state.verification_key = action.payload.verification_key;
      saveStorage("otp_email", action.payload.email);
      saveStorage("verification_key", action.payload.verification_key);
      sessionStorage.setItem("otp_email", action.payload.email);
      sessionStorage.setItem(
        "verification_key",
        action.payload.verification_key
      );
    },
    clearOtp: (state) => {
      state.email = "";
      state.verification_key = "";
      clearStorage("otp_email");
      clearStorage("verification_key");
      sessionStorage.removeItem("otp_email");
      sessionStorage.removeItem("verification_key");
    },
  },
});

export const { saveEmail, clearOtp } = otpSlice.actions;
export default otpSlice.reducer;
