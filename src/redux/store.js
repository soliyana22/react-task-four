// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './../redux/productSlice'; // Adjust path
import cartReducer from './../redux/cartSlice'; // Adjust path

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});