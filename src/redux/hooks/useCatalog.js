import { useDispatch, useSelector } from "react-redux";
import { fetchCampers, setFilter, setPage, setItems, setHasMore } from "../slices/paginationSlice"; // Імпортуємо екшени
import { useEffect } from "react";

export const useCatalog = () => {
  const dispatch = useDispatch();
  const { items, loading, error, page, filter, hasMore } = useSelector(
    (state) => state.pagination
  );

  useEffect(() => {
    dispatch(fetchCampers({ page, limit: 5, filter }));
  }, [page, filter, dispatch]);

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
    dispatch(setPage(1));
    dispatch(setItems([])); 
    dispatch(setHasMore(true));
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      dispatch(setPage(page + 1));
    }
  };

  return {
    result: items,
    loading,
    error,
    filter,
    hasMore,
    loadMore,
    handleFilterChange,
  };
};
