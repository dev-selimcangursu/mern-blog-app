// src/features/categoriesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getCategories,getSubCategories,getAllCategories} from "../api/categoriesApi";

export const fetchGetCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await getCategories();
    return response.data;
  }
);

export const fetchGetSubCategories = createAsyncThunk(
  "categories/getSubCategories",
  async () => {
    const response = await getSubCategories();
    return response.data;
  }
);

export const fetchGetAllCategories = createAsyncThunk(
  "categories/all",
  async () => {
    const response = await getAllCategories();
    return response.data;
  }
);


const initialState = {
  value: [],
  subcategories:[],
  allCategories:[]
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
      builder.addCase(fetchGetSubCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.subcategories = action.payload;
    });
    builder.addCase(fetchGetAllCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.allCategories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
