import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserCart } from "../types/ProductTypes";

interface ICart {
  cart: IUserCart;
}

const initialState: ICart = {
  cart: {
    discountedTotal: 0,
    id: 0,
    products: [],
    total: 0,
    totalProducts: 0,
    totalQuantity: 0,
    userId: 0,
  },
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    initCart(state, action: PayloadAction<IUserCart>) {
      // console.log("init cart", action.payload);
      state.cart = action.payload;
    },
  },
});

export const { initCart } = CartSlice.actions;

export default CartSlice;
