export const selectFavorites = (state) => state.favorites;

export const selectIsFavorite = (state, id) =>
  state.favorites.favoriteItems.includes(id);

export const selectSelectedItem = (state) => state.campersById?.selectedItem;
export const selectLoading = (state) => state.campersById?.loading;
export const selectError = (state) => state.campersById?.error;