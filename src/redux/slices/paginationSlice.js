import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../campersApi";

export const fetchCampers = createAsyncThunk(
  "pagination/fetchCampers",
  async ({ page, limit, filter }, { rejectWithValue }) => {
    try {
      const data = await fetchData({ page, limit, ...filter });
      return data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  filter: {},
  hasMore: true,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setHasMore(state, action) {
      state.hasMore = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.hasMore = action.payload.length === 5;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, setFilter, setHasMore, setError, setItems } =
  paginationSlice.actions;
export default paginationSlice.reducer;
