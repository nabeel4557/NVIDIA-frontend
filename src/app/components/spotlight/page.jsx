import Link from "next/link";
import Navbar3 from "../../includes/navbar/Navbar3";
import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

function Spotlight() {
    const [toggle, setToggle] = useState(false);

    const toggledropdown = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <div className="w-full relative py-12 justify-center h-[500px] overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-[450px] object-cover z-0"
                    autoPlay
                    loop
                    muted>
                    <source src="/videos/video1.WEBM" type="video/webm" />
                </video>

                <div className="absolute w-full max-[1280px]:w-[850px] max-[1280px]:ml-[150px] max-[1080px]:w-[700px]  max-[980px]:w-full max-[980px]:ml-[0px]">
                    <div className="wrapper">
                        <div className="flex justify-end relative">
                            <RxHamburgerMenu
                                size={24}
                                onClick={toggledropdown}
                            />
                            {toggle && (
                                <ul className="absolute top-[30px] bg-[#fff] text-[#000] p-[30px] leading-9">
                                    <li>
                                        <Link href="/industries">
                                            Industries
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solution/ai">
                                            AI Platform
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link href="#">Overview</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <h3 className="text-[48px] font-bold text-white w-[780px] max-[1280px]:text-[36px] max-[1280px]:w-[544px] max-[1080px]:text-[28px] max-[1080px]:w-[355px]">
                            Instantly Deploy Generative AI With NVIDIA NIM
                        </h3>
                        <p className="text-[22px] text-[#eeeeee] w-[730px] mt-3 max-[1280px]:text-[20px] max-[1280px]:w-[544px] max-[1080px]:w-[355px] max-[1080px]:text-[18px]">
                            Explore the latest community-built AI models with
                            APIs optimized and accelerated by NVIDIA, then
                            deploy anywhere with NVIDIA NIM™ inference
                            microservices.
                        </p>
                        <div className="flex gap-3 mt-3 max-[1080px]:w-[355px]">
                            <button className="text-black font-bold bg-[#76b900] text-[18px] py-[13px] px-[15px] border-none max-[1280px]:py-[11px] max-[1280px]:px-[13px] max-[1280px]:text-[15px] max-[1080px]:py-[9px] max-[1080px]:px-[12px] max-[1080px]:text-[14px]">
                                Try Now
                            </button>
                            <button className="border-2 border-[#76b900] py-[11px] px-[13px] flex items-center gap-2 text-[#fff] font-bold text-[18px] max-[1280px]:py-[9px] max-[1280px]:px-[11px] max-[1280px]:text-[15px] max-[1080px]:py-[7px] max-[1080px]:px-[10px] max-[1080px]:text-[14px]">
                                <FiPlay className="text-[#fff] font-bold" />
                                Watch Video
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar3 />
        </>
    );
}

export default Spotlight;
