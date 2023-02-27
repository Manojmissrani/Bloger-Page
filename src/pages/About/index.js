import React from 'react'
import { Navbar } from '../../components'
import {useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (

        <div>
            <Navbar />

            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold font-serif text-gray-900">Me Manoj Missrani 
                            <br class="hidden lg:inline-block" />
                        </h1>
                        <p class="mb-8 leading-relaxed">Hi there! My name is Manoj Kumar and I'm a blogger who loves writing about technology, business, and personal development.
                            I started this blog as a way to share my thoughts and insights on various topics that interest me. I believe that blogging is a powerful tool that can help people connect, learn, and grow. That's why I'm passionate about creating high-quality content that can inspire and inform my readers.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg" onClick={() => navigate("/Blog")}>My Blogs</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/262513328_225904566342579_7200851677887434504_n.jpg?stp=dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=19026a&_nc_ohc=gONyWWc4cBsAX--JGlw&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfA6XqsUjObACtXMYJG3nXlPiUyTZAf9BY9AcAy01QTpBg&oe=6402AB58" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About



