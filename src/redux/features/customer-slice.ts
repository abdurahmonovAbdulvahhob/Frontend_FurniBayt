import { clearStorage, getStorage, saveStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CustomerState {
  value: {
    id: number | null;
    email: string;
  };
}

const initialState: CustomerState = {
  value: JSON.parse(getStorage("customer") || "null") || {
    id: null,
    email: "",
  },
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    saveCustomer: (
      state,
      action: PayloadAction<{ email: string; id: number }>
    ) => {
      state.value = action.payload;
      saveStorage("customer", action.payload);
    },
    clearCustomer: (state) => {
      state.value = { id: null, email: "" };
      clearStorage("customer");
    },
  },
});

export const { saveCustomer, clearCustomer } = customerSlice.actions;
export default customerSlice.reducer;
