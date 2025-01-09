import { createSlice } from "@reduxjs/toolkit";

const getFromLocalStorage = () => {
  const favorites = localStorage.getItem("favoriteItems");
  return favorites ? JSON.parse(favorites) : [];
};
const saveToLocalStorage = (favoriteItems) => {
  localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
};
const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteItems: getFromLocalStorage(),
  },
  reducers: {
    toggleFavorite(state, action) {
      const itemId = action.payload;

      if (state.favoriteItems.includes(itemId)) {
        state.favoriteItems = state.favoriteItems.filter((id) => id !== itemId);
      } else {
        state.favoriteItems.push(itemId);
      }
      saveToLocalStorage(state.favoriteItems);
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
