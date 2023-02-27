import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

import { Navbar } from '../../components';

const BlogDetails2 = () => {
    const params = useParams();
    const [postData, setPostData] = useState(null);
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
    useEffect(() => {
        let filtered = List.filter(function (val) {
            return val.id === params.id;
        });
        setPostData(filtered);
    }, []);
    return (
        <div>
            <Navbar />

            <div>
                {postData !== null && (
                    <div>
                        <section className="text-gray-600 body-font">
                            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                                <img className="lg:w-4/6 md:w-4/6 w-6/6 mb-10 object-cover object-center rounded" alt="hero" src={postData[0].image} />
                                <h6>{postData[0].date}</h6>
                                <div className="text-center lg:w-2/3 w-full">
                                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{postData[0].title}</h1>
                                    <p className="mb-8 leading-relaxed">{postData[0].des}</p>
                                </div>
                                <div className="flex">
                                    <FacebookShareButton
                                        url={"http://localhost:3000/BlogDetails-2/user1"}
                                    >
                                        <FacebookIcon size={35} round={true} />
                                    </FacebookShareButton>
                                    <EmailShareButton
                                        url={"http://localhost:3000/BlogDetails-2/user1"}
                                    >
                                        <EmailIcon size={35} round={true} />
                                    </EmailShareButton>
                                    <WhatsappShareButton url="http://localhost:3000/BlogDetails-2/user1">
                                        <WhatsappIcon size={35} round={true}></WhatsappIcon>
                                    </WhatsappShareButton>
                                    <TwitterShareButton url="http://localhost:3000/BlogDetails-2/user1">
                                        <TwitterIcon size={35} round={true} ></TwitterIcon>
                                    </TwitterShareButton>
                                </div></div>
                        </section>
                    </div>

                )}
            </div>
        </div>
    )
}

export default BlogDetails2