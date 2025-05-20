import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetAllCategories } from "../features/categoriesSlice";
import { fetchAllBlog } from "../features/blogsSlice";
import BlogCard from "../components/BlogCard";
import "./CategoryDetail.css";

function CategoryDetail() {
  const dispatch = useDispatch();
  const { name } = useParams();

  const categories = useSelector((state) => state.categories.allCategories);
  const blogs = useSelector((state) => state.blogs.allBlogs);

  const sectionCategory = categories?.find(
    (item) => item.category_name === name
  );

  const sectionBlogs = sectionCategory?._id
    ? blogs?.filter((item) => item.parentcategory_id === sectionCategory._id)
    : [];

  console.log(sectionBlogs);
  useEffect(() => {
    dispatch(fetchGetAllCategories());
    dispatch(fetchAllBlog());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="category__detail">
        <h3>{sectionCategory?.category_name} Blogları</h3>
        <div className="category__detail__list">
          {sectionBlogs?.map((blog, index) => (
            <BlogCard key={blog._id || index} detail={blog} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CategoryDetail;
