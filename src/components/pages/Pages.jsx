import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Footer from "../common/footer/Footer"
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Testimonials from "./testimonials/Testimonials";
import FAQ from "./faq/Faq";
import Gallery from "./gallery/Gallery";
import Teachers from "./teachers/Teachers";
import InfrastructurePage from "./infrastructure/InfrastructurePage";
import Blog from "../blog/Blog";
import TeacherDetail from "./teacherDetail/TeacherDetail";
import NewsEvents from "./news/NewsEvents";
import Academics from "./academics/Academics";
import Facility from "./facility/Facility";
import ParentsCorner from "./parentsCorner/ParentsCorner";
import SchoolInfo from "./schoolInfo/SchoolInfo";

const Pages = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/teachers' element={<Teachers />} />
      <Route exact path="/teachers/:id" element={<TeacherDetail />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/gallery' element={<Gallery />} />
      <Route exact path='/faq' element={<FAQ />} />
      <Route exact path='/testimonials' element={<Testimonials />} />
      <Route exact path='/infrastructure' element={<InfrastructurePage />} />
      <Route exact path='/news' element={<NewsEvents />} />
      <Route exact path='/blog' element={<Blog />} />
      <Route exact path='/academics' element={<Academics />} />
      <Route exact path='/facility' element={<Facility />} />
      <Route exact path='/parents' element={<ParentsCorner />} />
      <Route exact path='/students' element={<SchoolInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default Pages
