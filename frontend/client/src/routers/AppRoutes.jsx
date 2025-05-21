// src/routes/AppRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BlogDetail from "../pages/BlogDetail";
import CategoryDetail from "../pages/CategoryDetail";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Security from "../pages/Security";
import TermsOfUse from "../pages/TermsOfUse";
import Login from "../pages/Login";
import Account from "../pages/Account";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/detail/:slug" element={<BlogDetail />} />
      <Route path="/category/:name" element={<CategoryDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/security" element={<Security />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default AppRoutes;
