import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCamperById = createAsyncThunk(
  "campersById/fetchCamperById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  selectedItem: null,
  loading: false,
  error: null,
};

const campersByIdSlice = createSlice({
  name: "campersById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedItem = action.payload;
        console.log('Action payload:', action.payload);
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    
  },
});

export default campersByIdSlice.reducer;
