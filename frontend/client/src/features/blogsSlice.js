import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogFeatured, getNewestBlog } from "../api/blogsApi";

export const fetchGetBlogFeatured = createAsyncThunk(
  "/blog-featured",
  async () => {
    let featured = await getBlogFeatured();
    return featured.data;
  }
);

export const fetchGetNewestBlog = createAsyncThunk("/blog-newest", async () => {
  let newestBlog = await getNewestBlog();
  return newestBlog.data;
});

export const initialState = {
  featured: [],
  newestBlog: [],
};
export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetBlogFeatured.fulfilled, (state, action) => {
      state.featured = action.payload;
    });
    builder.addCase(fetchGetNewestBlog.fulfilled, (state, action) => {
      state.newestBlog = action.payload;
    });
  },
});
export default blogsSlice.reducer;
