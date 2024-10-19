import React from "react"
import Hero from "./hero/Hero"
import Carousel from "./carousel/Carousel";
import SchoolDetails from "./schoolDetails/SchoolDetails";
import Categories from "./categories/Categories"
import Teachers from "./teachers/Teachers"
import Testimonials from "./testimonials/Testimonials"
import Blog from "./blog/Blog"

const Home = () => {
    return (
      <>
        <Hero />
        <Carousel />
        <SchoolDetails />
        <Categories />
        <Teachers />
        <Testimonials />
        <Blog />
      </>
    )
  }
  
  export default Home