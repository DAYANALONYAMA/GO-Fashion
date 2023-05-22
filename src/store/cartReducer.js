import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      state.totalPrice = 0;
      state.products.forEach((item) => {
        state.totalPrice += parseInt(item.quantity) * parseFloat(item.price);
      });
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.totalPrice -= parseInt(action.payload.price);
    },
    resetCart: (state) => {
      // state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
