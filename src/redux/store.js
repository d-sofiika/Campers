import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slices/paginationSlice"; 
import favoriteReducer from "./slices/favoriteSlice";
import campersByIdReducer from "./slices/camperIdSlice"


export const store = configureStore({
  reducer: { 
    pagination: paginationReducer,
    favorites: favoriteReducer,
    campersById: campersByIdReducer,
  },
});
