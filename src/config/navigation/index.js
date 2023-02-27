import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home,Blog,About,BlogDetails, BlogDetails2 } from "../../pages";
const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route  path="/BlogDetails-2/:id" element={<BlogDetails2 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
