import React from "react";
import { testimonials } from "../../data/dummydata";
import Heading from "../../common/Heading";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials padding">
        <div className="container">
          <Heading subtitle="TESTIMONIALS" title="What Our Clients Say" />

          <div className="content grid2">
            {testimonials.map((testimonial, index) => (
              <div className="card shadow" key={index}>
                {/* Place text at the top */}
                <p className="testimonial-text">{testimonial.desc}</p>

                {/* Place name and designation left of the image at the bottom right */}
                <div className="testimonial-footer flex">
                  <div className="name">
                    <h2>{testimonial.name}</h2>
                    <span>{testimonial.post}</span>
                  </div>
                  <div className="img">
                    <img src={testimonial.cover} alt="" />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
