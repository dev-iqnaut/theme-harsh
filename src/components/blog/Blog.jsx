import React from "react";
import Back from "../common/Back"; // Assuming the Back component is for the header section
import { blog } from "../data/dummydata"; // Importing the blog data
import './blog.css'; // Import the blog styling
import img from "../../images/about-us.png"; // Import a cover image

const Blog = () => {
  return (
    <>
        <Back name="Blog" title="Our Blogs" cover={img} />
      <section className='blog'>

        <div className='container grid'>
          {blog.map((item) => (
            <div className='box' key={item.id}>
              <div className='img'>
                <img src={item.cover} alt={item.title} />
              </div>
              <div className='text'>
                <span className='type'>{item.type}</span>
                <span className='date'>{item.date}</span>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <span className='comments'>{item.com}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
