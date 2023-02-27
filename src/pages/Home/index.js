import React from 'react'
import Navbar from '../../components/Navbar';
import {useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold font-serif text-gray-900">Welcome to My Blog 
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">Stay updated with the latest news and trends in the world of blogging Free design templates ready for your next project.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg" onClick={() => navigate("/Blog")}>Read More</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://assets.justinmind.com/wp-content/uploads/2019/10/best-graphic-design-blogs.png" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home