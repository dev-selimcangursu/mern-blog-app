import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchAllBlog } from "../features/blogsSlice";
import { useSelector, useDispatch } from "react-redux";
import "./BlogDetail.css";

function BlogDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const blogDetail = useSelector((state) => state.blogs.allBlogs);

  useEffect(() => {
    dispatch(fetchAllBlog());
  }, [dispatch]);

  const blog = blogDetail.find((sub) => sub.slug === slug);


  console.log(blog)
  if (!blog) {
    return (
      <div className="loading-wrapper">
        <div className="spinner"></div>
        <p>Yükleniyor...</p>
      </div>
    );
  }
  
  return (
    <>
      <Header />
      <div className="blog__detail">
        <div className="blog__detail__image__wrapper">
          <img
            src={`http://localhost:5000/blog-images/${blog.image_url}`}
            alt={blog.slug}
          />
          <h3>{blog.title}</h3>
        </div>
        <div className="blog__detail__main">
          <p>{blog.content}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogDetail;
