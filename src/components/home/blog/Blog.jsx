import React from "react";
import "./blog.css";
import { Link } from "react-router-dom"; // Import Link for navigation

const blogPosts = [
  {
    title: "Group of Students Sharing Ideas",
    image: "images/blog/b6.jpg",
    description: "Learn how collaborative efforts lead to better results and improved learning experiences.",
    date: "October 1, 2023",
  },
  {
    title: "Creative Class Library for Students",
    image: "images/blog/b5.jpg",
    description: "Explore new ways to make learning fun and interactive with a creative approach.",
    date: "September 21, 2023",
  },
  {
    title: "College Services ‘Leadership at Work’",
    image: "images/blog/b3.jpg",
    description: "How leadership roles in college services prepare students for the real world.",
    date: "September 15, 2023",
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <h2 className="section-title">Checkout Our Blog</h2>
        <div className="blog-list">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-item">
              <img src={post.image} alt={post.title} className="blog-img" />
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span className="blog-date">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mblogs">
      <Link to="/blogs" className="more-reviews-button">
          More Blogs
        </Link>
      </div>
    </section>
  );
}

export default Blog;
