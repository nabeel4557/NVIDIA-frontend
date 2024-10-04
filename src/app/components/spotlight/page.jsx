import Navbar3 from "@/app/includes/navbar/Navbar3";
import React from "react";
import { FiPlay } from "react-icons/fi";

function Spotlight() {
    return (
        <>
        <div className=" relative py-12  justify-center h-[500px] overflow-hidden">
            
            <video
                className="absolute top-0 left-0 w-full h-[450px] object-cover z-0"
                autoPlay
                loop
                muted>
                <source src="/videos/video1.WEBM" type="video/webm" />
            </video>

            <div className=" absolute">
                <div className="wrapper">
                    <h3 className="text-[48px] font-bold text-white w-[730px] ">
                        Instantly Deploy Generative AI With NVIDIA NIM
                    </h3>
                    <p className="text-[22px] text-[#eeeeee] w-[730px] mt-3">
                        Explore the latest community-built AI models with APIs
                        optimized and accelerated by NVIDIA, then deploy anywhere
                        with NVIDIA NIM™ inference microservices.
                    </p>
                    <div className="flex gap-3 mt-3 ">
                        <button className="text-black bg-[#76b900] text-[18px] py-[13px] px-[15px] border-none">
                            Try Now
                        </button>
                        <button className="border-2 border-[#76b900] py-[11px] px-[13px] flex items-center gap-2 text-[#fff] font-bold text-[18px]">
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
