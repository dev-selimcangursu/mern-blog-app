const Blog = require("../models/Blog");

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

module.exports = { getFeatured, getNewestBlog };
