import { configureStore } from "@reduxjs/toolkit";
import CategoriesReducer from '../features/categoriesSlice'
import BlogReducer from '../features/blogsSlice'
import AboutReducer from '../features/aboutSlice'

export const store = configureStore({
  reducer: {
    categories:CategoriesReducer,
    blogs:BlogReducer,
    about:AboutReducer
  },
});
