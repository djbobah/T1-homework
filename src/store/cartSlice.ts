import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// interface ICart {}

interface ICartState {
  // currentDepartment: IDepartments;
  countProducts: number;
  // isModalBKOpen: boolean;
  // editedBK: IBK | null;
  // BKs: IBK[];
}

const initialState: ICartState = {
  countProducts: 0,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    // setIsModalBKOpen(state, action) {
    //   state.isModalBKOpen = action.payload;
    // },
    // addBK(state, action) {
    //   state.BKs.push(action.payload);
    // },
    // delBK(state, action) {
    //   state.BKs = state.BKs.filter((item) => item.id !== action.payload);
    // },
    // setEditedBK(state, action) {
    //   // console.log(action.payload);
    //   state.editedBK = action.payload;
    // },
  },
});

export const {} = CartSlice.actions;

export default CartSlice.reducer;
