import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slices/paginationSlice"; // Підключення редюсера

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});
