import Link from "next/link";
import React from "react";

function Industries() {
    return (
        <div className=" relative">
            <video
                className=" top-0 left-0 w-full h-[450px] object-cover "
                autoPlay
                loop
                muted>
                <source src="/videos/video2.mp4" type="video/webm" />
            </video>
            <div className="bg-opacity-70 w-full bg-[#1A1A1A] py-4 absolute top-0 z-10">
                <div className="wrapper flex items-center justify-between ">
                    <div>
                        <h1 className=" font-bold text-[20px]">
                            <Link href="#">Industries Overview</Link>
                        </h1>
                    </div>
                    <div className="flex items-center gap-5">
                        <ul className="flex items-center text-[16px] text-[#cccccc] font-bold gap-5">
                            <li>
                                <Link href="#">Our Industries</Link>
                            </li>
                            <li>
                                <Link href="#">Industry Features</Link>
                            </li>
                            <li>
                                <Link href="#">Get Started</Link>
                            </li>
                        </ul>
                        <button className="py-[11px] px-[12px] bg-[#76B900] text-[14px] font-bold text-[#000]">
                            Stay Informed
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#fff] py-[75px] text-[#000]">
                <div className="wrapper">
                    <h1 className="text-[36px] font-bold text-center">
                        Revolutionizing the Future of Industries
                    </h1>
                    <p className="text-[22px] text-[#1A1A1A] text-center mt-[15px]">
                        Discover the possibility, power, and performance of AI
                        and <br /> accelerated computing from the cloud to the
                        edge.
                    </p>
                    <button className="py-[13px] px-[15px] bg-[#76B900] flex mx-auto mt-[20px] text-[18px] font-bold">
                        Watch the Video
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Industries;
