// src/routes/AppRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BlogDetail from "../pages/BlogDetail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/detail/:slug" element={<BlogDetail />} />
    </Routes>
  );
}

export default AppRoutes;
