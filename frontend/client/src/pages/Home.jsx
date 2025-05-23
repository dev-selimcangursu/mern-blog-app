import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGetBlogFeatured,
  fetchGetNewestBlog,
  fetchEuropeBlog,
  fetchTurkeiBlogs,
} from "../features/blogsSlice";
import { fetchGetAbout } from "../features/aboutSlice";
import BlogCard from "../components/BlogCard";

function Home() {
  const dispatch = useDispatch();
  const featuredBlog = useSelector((state) => state.blogs.featured);
  const newestBlog = useSelector((state) => state.blogs.newestBlog);
  const about = useSelector((state) => state.about.about);
  const europeBlog = useSelector((state) => state.blogs.europeblog);
  const turkeiBlog = useSelector((state) => state.blogs.turkeiBlog);

  useEffect(() => {
    dispatch(fetchGetBlogFeatured());
    dispatch(fetchGetAbout());
    dispatch(fetchGetNewestBlog());
    dispatch(fetchEuropeBlog());
    dispatch(fetchTurkeiBlogs());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="main">
        <section id="home__banner__wrapper">
          <Splide options={{ rewind: true, autoplay: true, interval: 4000 }}>
            {featuredBlog.map((blog, index) => (
              <SplideSlide key={index}>
                <a className="banner__main__link" href={`/blog/detail/${blog.slug}`}>
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
        <section className="newest__wrapper">
          <div className="new__blogs__area">
            <h3>En Yeniler</h3>
            <div className="new__blogs__list">
              {newestBlog.map((blog, index) => (
                <div key={index} className="new__blog__item">
                  <img
                    src={`http://localhost:5000/blog-images/${blog.image_url}`}
                    alt={blog.slug}
                  />
                  <div className="new__blog__item__body">
                    <a className="new__blog__item__title" href={`/blog/detail/${blog.slug}`}>
                      {blog.title}
                    </a>
                    <p>
                      {blog.content.length > 100
                        ? blog.content.slice(0, 200) + "..."
                        : blog.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="who__are__we__area">
            <img
              src="https://img.freepik.com/free-vector/flat-propose-day-illustration_23-2150078705.jpg?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid&w=740"
              alt="image"
            />
            <h1 className="who__are__we__area__title">Biz Kimiz</h1>
            <p>
              {about?.about
                ? about.about.slice(0, 350) + "..."
                : "Yükleniyor..."}
            </p>

            <div className="who__are__we__social__media">
              <h3 className="who__are__we__social__media__title">
                Bizi Takip Edin
              </h3>
              <div className="who__are__we__social__media__list">
                <a href={about.instagram}>
                  <img
                    src="https://cdn-icons-png.freepik.com/256/2111/2111463.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid"
                    alt=""
                  />
                </a>
                <a href={about.github}>
                  <img
                    src="https://cdn-icons-png.freepik.com/256/3291/3291695.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid"
                    alt=""
                  />
                </a>
                <a href={about.linkedin}>
                  <img
                    src="https://cdn-icons-png.freepik.com/256/3536/3536505.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="european__classics__wrapper">
          <h3>Avrupa Klasikleri</h3>
          <div className="european__classics__card__list">
            {europeBlog.map((blog, index) => (
              <BlogCard detail={blog} key={index} />
            ))}
          </div>
        </section>
        <section className="turkei__classics__wrapper">
          <h3>Türkiye Klasikleri</h3>
          <div className="turkie__classics__card__list">
            {turkeiBlog.map((blog, index) => (
              <BlogCard detail={blog} key={index} />
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
