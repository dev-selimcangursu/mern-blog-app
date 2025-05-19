import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogFeatured } from "../api/blogsApi";

export const fetchGetBlogFeatured = createAsyncThunk(
  "/blog-featured",
  async () => {
    let featured = await getBlogFeatured();
    return featured.data;
  }
);

export const initialState = {
  featured: [],
};
export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetBlogFeatured.fulfilled, (state, action) => {
      state.featured = action.payload;
    });
  },
});
export default blogsSlice.reducer;
