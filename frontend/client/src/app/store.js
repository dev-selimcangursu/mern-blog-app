import { configureStore } from "@reduxjs/toolkit";
import CategoriesReducer from '../features/categoriesSlice'
export const store = configureStore({
  reducer: {
    categories:CategoriesReducer
  },
});
