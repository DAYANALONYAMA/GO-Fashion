import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import idReducer from "./idReducer";

export const store = configureStore({
  reducer: { cart: cartReducer, ids: idReducer },
});
