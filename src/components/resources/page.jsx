import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Resources() {
    const cardItems = [
        {
            image: "./images/img13.jpeg",
            title: "NVIDIA LaunchPad",
            subTitle: "Unlock AI With a Hands-On Lab",
            description:
                "Experience end-to-end AI solutions through guided hands-on labs for development frameworks, retrieval-augmented generation (RAG)-based chatbots, route optimizations, and more.",
        },
        {
            image: "./images/img14.jpeg",
            title: "NVIDIA Developer Program",
            subTitle: "Accelerate Your AI Applications",
            description:
                "Get free access to NIM for application development, research, and testing plus technical learning resources through the NVIDIA Developer Program.",
        },
        {
            image: "./images/img15.jpeg",
            title: "AI Workbench",
            subTitle: "Start Small. Scale Big",
            description:
                "Get free access to NIM for application development, research, and testing plus technical learning resources through the NVIDIA Developer Program.",
        },
        {
            image: "./images/img12.jpeg",
            title: "NVIDIA LaunchPad",
            subTitle: "Explore NVIDIA NIM in the News",
            description:
                "Experience end-to-end AI solutions through guided hands-on labs for development frameworks, retrieval-augmented generation (RAG)-based chatbots, route optimizations, and more.",
        },
    ];
    return (
        <div className="w-full bg-[#EEEEEE] py-[75px]">
            <div className="wrapper">
                <h6 className="text-[#1A1A1A] text-[20px] text-center max-[1280px]:text-[18px] max-[1080px]:text-[16px]">
                    Resources
                </h6>
                <h2 className="text-[36px] text-[#000] font-bold text-center mt-[10px] max-[1280px]:text-[28px] max-[1080px]:text-[24px]">
                    Unlock, Upskill, and Upscale
                </h2>
                <div className="w-full flex items-center gap-4 mt-[40px] max-[1280px]:w-[80%] max-[1280px]:mx-auto max-[1080px]:w-[80%] max-[1080px]:justify-center max-[1080px]:flex-wrap max-[786px]:w-full max-[640px]:w-full max-[640px]:block max-[540px]:w-full">
                    {cardItems.map((item) => (
                        <div className="w-1/4 bg-[#fff] h-[580px] relative pb-[30px] shadow-lg max-[1080px]:w-[37%]  max-[980px]:w-[45%] max-[786px]:w-[39%] max-[640px]:w-[89%] max-[640px]:mx-auto max-[540px]:w-full">
                            <div className="">
                                <img
                                    className="max-[640px]:w-full"
                                    src={item.image}
                                />
                            </div>
                            <div className="my-[30px] px-[20px]">
                                <h6 className="text-[15px] font-bold text-[#000]">
                                    {item.title}
                                </h6>
                                <h3 className="text-[24px] font-bold text-[#000] my-[30px] max-[1280px]:text-[20px] max-[1080px]:text-[18px]">
                                    {item.subTitle}
                                </h3>
                                <p className="text-[#1A1A1A] text-[15px]">
                                    {item.description}
                                </p>
                                <Link
                                    href={"/"}
                                    className="flex items-center text-[18px] text-[#000] font-bold absolute bottom-[30px] z-10 max-[1280px]:text-[15px]">
                                    Learn More
                                    <MdKeyboardArrowRight
                                        className="max-[1280px]:size-[24px]"
                                        size={30}
                                        color="#768900"
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Resources;
