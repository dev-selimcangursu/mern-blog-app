// src/routes/AppRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BlogDetail from "../pages/BlogDetail";
import CategoryDetail from "../pages/CategoryDetail";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/detail/:slug" element={<BlogDetail />} />
      <Route path="/category/:name" element={<CategoryDetail />} />
    </Routes>
  );
}

export default AppRoutes;
