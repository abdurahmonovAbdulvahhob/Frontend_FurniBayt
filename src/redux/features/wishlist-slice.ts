import { IProduct } from "@/types";
import { saveStorage } from "@/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WishlistState {
  value: IProduct[];
}

const wishlistStore = localStorage.getItem("wishlist");
const initialState: WishlistState = {
  value: wishlistStore ? JSON.parse(wishlistStore) : [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<IProduct>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
      }
      saveStorage("wishlist", state.value);
    },
    clearWishlist: (state) => {
      state.value = [];
      localStorage.removeItem("wishlist");
    },
  },
});

export const { toggleLike, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
