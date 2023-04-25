import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addId: (state, { payload }) => {
      const actual = state.products;
      actual.push(payload);
      state.products = [...new Set(actual)];
    },
    filterProductBySubCategories: (state, { payload = [] }) => {
      const actual = state.products;
      if (Object.keys(payload).length > 0) {
        actual.forEach((item) => {
          state.products = item.sub_categories.filter((subCategory) => subCategory.id === 1
          )
          return
        })
      }
      else {
        state.products = actual;
      }
    },
    addProducts: (state, { payload }) => {
      console.log("payload:", payload);
      state.products = payload
    },
    removeId: (state, { payload }) => {
      state.products = state.products.filter((p) => p.id !== payload);
    },
    removeAllIds: (state) => {
      state.products = initialState.products;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addId, removeAllIds, removeId, addProducts, filterProductBySubCategories } = productSlice.actions;

export default productSlice.reducer;
