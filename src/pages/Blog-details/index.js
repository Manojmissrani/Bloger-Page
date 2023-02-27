import React from 'react'
import { useLocation } from "react-router-dom";
import { Navbar } from '../../components';
const BlogDetails = () => {
  const location = useLocation();
  console.log("location", location);
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-4/6 md:w-4/6 w-6/6 mb-10 object-cover object-center rounded" alt="hero" src={location.state.image} />
          <h6>{location.state.date}</h6>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{location.state.title}</h1>
            <p className="mb-8 leading-relaxed">{location.state.des}</p>

          </div>
        </div>
      </section>
    </div>
  )

}

export default BlogDetails
