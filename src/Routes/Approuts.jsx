import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import Service from "../pages/Service";

function Approuts() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/blogs" element={<Blog/>} />
            <Route path="/careers" element={<Careers/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/projects" element={<Project/>} />
            <Route path="/services" element={<Service/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Approuts;
