import React from 'react'
import {useNavigate } from "react-router-dom";
import "./nav.css"
const Navbar = () => {
  const navigate = useNavigate();

    return (
        <div className='sticky top-0 w-full'>
            <header className="text-gray-600 body-font  bg-white">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer" onClick={() => navigate("/")}>
                        <img src="https://www.blogger.com/img/logo_blogger_40px.png" alt="" />
                        <span className="ml-3 text-xl"> Bloger</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900 cursor-pointer"  onClick={() => navigate("/")}>Home</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer" onClick={() => navigate("/About")}>About</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer" onClick={() => navigate("/Blog")}>Blog</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Login</a>
                    </nav>
                </div>
            </header>
            <hr />
        </div>
    )
}

export default Navbar