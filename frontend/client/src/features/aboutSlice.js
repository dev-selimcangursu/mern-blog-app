import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAboutInfo } from "../api/aboutApi";

export const fetchGetAbout = createAsyncThunk("/get/about", async () => {
  let about = await getAboutInfo();
  return about.data;
});

const initialState = {
  about: [],
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetAbout.fulfilled, (state, action) => {
      state.about = action.payload;
    });
  },
});

export default aboutSlice.reducer;
