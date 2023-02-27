import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';

const Blog = () => {
    const navigate = useNavigate();
    const List = [
        {
            id: "user1",
            image:
                "https://newbreedtraining.com/wp-content/uploads/2023/02/Sticker-Blog-GI-Joe.png",
            title: "G.I. Joe and the APEST Armed Forces",
            date: "February 24, 2023",
            des: "Because NewBreed trains teams for multiplication instead of the solo hero leader, for Exponential this year, NewBreed is going to be giving away famous team-up stickers. These aren’t your Nana’s stickers either. These are stickers with a purpose. They’re stickers about teams, true, but they’re also stickers about APEST. Have you ever thought about the…",
        },
        {
            id: "user2",
            image:
                "https://newbreedtraining.com/wp-content/uploads/2023/02/Sticker-Blog-LOTR.png",
            title: "APEST Fellowship",
            date: "February 23, 2023",
            des: "Because NewBreed trains teams for multiplication instead of the solo hero leader, for Exponential this year, NewBreed is going to be giving away famous team-up stickers. These aren’t your Nana’s stickers either. These are stickers with a purpose. They’re stickers about teams, true, but they’re also stickers about APEST.  Have you ever thought about the…",
        },
        {
            id: "user3",
            image:
                "https://newbreedtraining.com/wp-content/uploads/2023/02/spark-blog.png",
            title: "The Spark that Sets the World Ablaze",
            date: "February 18, 2023",
            des: "Because NewBreed trains teams for multiplication instead of the solo hero leader, for Exponential this year, NewBreed is going to be giving away famous team-up stickers. These aren’t your Nana’s stickers either. These are stickers with a purpose. They’re stickers about teams, true, but they’re also stickers about APEST. Have you ever thought about the…",
        },
    ];
    return (
        <div>
            <Navbar />
             <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {List.map((v, i) => {
                            return (
                                <div className="p-4 md:w-1/3" key={i}>
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img src={v.image} className="lg:h-48 md:h-36 w-full object-cover object-center" alt="blog" />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{v.date}</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{v.title}</h1>
                                            <p className="leading-relaxed mb-3">{v.des}</p>
                                            <div className="flex items-center flex-wrap justify-between">
                                            <a onClick={() => navigate("/BlogDetails", { state: v })} className="text-yellow-600 flex items-center justify-center flex-wrap md:mb-2 lg:mb-0 cursor-pointer">See More</a>
                                            <a onClick={() => navigate(`/BlogDetails-2/${v.id}`)} className="text-yellow-600 flex items-center justify-center flex-wrap md:mb-2 lg:mb-0 cursor-pointer">See and Share</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>




        </div>
    )
}

export default Blog;