import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBlogFeatured,
  getNewestBlog,
  getEuropeBlog,
  getTurkieBlogs,
} from "../api/blogsApi";

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

export const fetchEuropeBlog = createAsyncThunk("/blog-europe", async () => {
  let europeBlog = await getEuropeBlog();
  return europeBlog.data;
});

export const fetchTurkeiBlogs = createAsyncThunk("/blog-turkei", async () => {
  let turkeiBlogs = await getTurkieBlogs();
  return turkeiBlogs.data;
});

export const initialState = {
  featured: [],
  newestBlog: [],
  europeblog: [],
  turkeiBlog:[]
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
    builder.addCase(fetchEuropeBlog.fulfilled, (state, action) => {
      state.europeblog = action.payload;
    });
     builder.addCase(fetchTurkeiBlogs.fulfilled, (state, action) => {
      state.turkeiBlog = action.payload;
    });
  },
});
export default blogsSlice.reducer;
