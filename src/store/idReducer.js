import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const idSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addId: (state, { payload }) => {
      const actual = state.products;
      actual.push(payload);
      state.products = [...new Set(actual)];
    },
    removeId: (state, { payload }) => {
      state.products = state.products.filter((p) => p.id != payload);
    },
    removeAllIds: (state) => {
      state.products = initialState.products;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addId, removeAllIds, removeId } = idSlice.actions;

export default idSlice.reducer;
