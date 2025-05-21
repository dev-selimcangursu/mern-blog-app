const mongoose = require("mongoose");
const Blog = require("../models/Blog");

const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    res.send(allBlogs);
  } catch (error) {
    res.send(error);
  }
};

const getFeatured = async (req, res) => {
  try {
    const featured = await Blog.find({
      featured: true,
      is_active: 1,
    })
      .sort({ created_at: -1 })
      .limit(4);

    res.send(featured);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getNewestBlog = async (req, res) => {
  try {
    let newestBlog = await Blog.find({
      is_active: 1,
    })
      .sort({ created_at: -1 })
      .limit(5);

    res.send(newestBlog);
  } catch (error) {
    res.send(error);
  }
};

const getEuropeanBlogs = async (req, res) => {
  try {
    let europeanBlogs = await Blog.find({
      is_active: 1,
      category_id: "682b08b21f243811ff224878",
    })
      .sort({ created_at: -1 })
      .limit(6);
    res.send(europeanBlogs);
  } catch (error) {
    res.send(error);
  }
};

const getTurkieBlogs = async (req, res) => {
  try {
    let turkeiBlogs = await Blog.find({
      is_active: 1,
      category_id: "682b06e71f243811ff22486e",
    })
      .sort({ created_at: -1 })
      .limit(6);
    res.send(turkeiBlogs);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getFeatured,
  getNewestBlog,
  getEuropeanBlogs,
  getTurkieBlogs,
  getAllBlogs,
};
