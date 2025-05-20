import React from "react";
import "./BlogCard.css";

function BlogCard(props) {
  return (
    <div className="blog__card">
      <div className="blog__card__header">
        <a href={`/blog/detail/${props.detail.slug}`}>
          <img
            src={`http://localhost:5000/blog-images/${props.detail.image_url}`}
            alt={props.detail.slug}
          />
        </a>
      </div>
      <div className="blog__card__body">
        <a href={`/blog/detail/${props.detail.slug}`}>{props.detail.title}</a>
        <p>
          {props.detail.content.length > 300
            ? props.detail.content.slice(0, 300) + "..."
            : props.detail.content}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
