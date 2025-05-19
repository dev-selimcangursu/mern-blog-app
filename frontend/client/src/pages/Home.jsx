import React from "react";
import "./Home.css";
import Header from "../components/Header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetBlogFeatured } from "../features/blogsSlice";

function Home() {
  const dispatch = useDispatch();
  const featuredBlog = useSelector((state) => state.blogs.featured);
  console.log(featuredBlog);
  useEffect(() => {
    dispatch(fetchGetBlogFeatured());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="main">
        <section id="home__banner__wrapper">
          <Splide options={{ rewind: true, autoplay: true, interval: 4000 }}>
            {featuredBlog.map((blog, index) => (
              <SplideSlide key={index}>
                <a className="banner__main__link" href="#">
                  <div className="banner__main">
                    <div className="banner__main__left">
                      <img
                        src={`http://localhost:5000/blog-images/${blog.image_url}`}
                        alt={blog.slug}
                      />
                    </div>
                    <div className="banner__main__right">
                      <div className="banner__card">
                        <h3 className="banner__card__title">{blog.title}</h3>
                        <p className="banner__card__description">
                          {blog.content.length > 100
                            ? blog.content.slice(0, 350) + "..."
                            : blog.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </SplideSlide>
            ))}
          </Splide>
        </section>
      </div>
    </>
  );
}

export default Home;
