"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function Models() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <div className=" py-[75px]">
            <div className="wrapper pb-[40px]">
                <h2 className="text-[36px] font-bold">
                    Experience Leading Open Models Now
                </h2>
            </div>
            <div className="w-full wrapper  ">
                <Slider {...settings}>
                    <div className="w-full ">
                        <div className="w-[95%] relative">
                            <img
                                src="/images/bg1.jpeg"
                                className="rounded-[10px] hover:border-[3px] hover:border-[#76B900] hover:opacity-50"
                            />
                        </div>
                        <div className=" absolute top-5 px-[20px]">
                            <span className="text-[10px] bg-[#DEBAEB] text-[#5A066D] py-[4px] px-[8px] rounded-[5px]">
                                RUN ANYWHER
                            </span>
                            <div className="mt-[40px]">
                                <span className="text-[14px]  ">meta</span>
                                <h5 className="text-[18px] font-bold">
                                    llama-3.1-405b-instruct
                                </h5>
                                <span className="px-[5px] py-[2px] rounded-[10px] bg-[#f2f2f299] text-[12px] text-[#121212] mr-2">
                                    synthetic data generation
                                </span>
                                <span className="px-[5px] py-[2px] rounded-[10px] bg-[#f2f2f299] text-[12px] text-[#121212]">
                                    chat
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full ">
                        <div className="w-[95%] relative">
                            <img
                                src="/images/bg2.jpeg"
                                className="rounded-[10px] hover:border-[3px] hover:border-[#76B900] hover:opacity-50"
                            />
                        </div>
                        <div className=" absolute top-5 px-[20px]">
                            <span className="text-[10px] bg-[#C6C6C666] text-[#D8D8D8] py-[4px] px-[8px] rounded-[5px]">
                                PREVIEW
                            </span>
                            <div className="mt-[40px]">
                                <span className="text-[14px]  ">meta</span>
                                <h5 className="text-[18px] font-bold">
                                    llama-3.1-405b-instruct
                                </h5>
                                <span className="px-[5px] py-[2px] rounded-[10px] bg-[#f2f2f299] text-[12px] text-[#121212] mr-2">
                                    synthetic data generation
                                </span>
                                <span className="px-[5px] py-[2px] rounded-[10px] bg-[#f2f2f299] text-[12px] text-[#121212]">
                                    chat
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-[95%] relative">
                            <img
                                src="/images/bg3.jpeg"
                                className="rounded-[10px] hover:border-[3px] hover:border-[#76B900] hover:opacity-50"
                            />
                        </div>
                        <div className=" absolute top-5 px-[20px]">
                            <span className="text-[10px] bg-[#C6C6C666] text-[#D8D8D8] py-[4px] px-[8px] rounded-[5px]">
                                PREVIEW
                            </span>
                            <div className="mt-[40px]">
                                <span className="text-[14px]  ">meta</span>
                                <h5 className="text-[18px] font-bold">
                                    llama-3.1-405b-instruct
                                </h5>
                                <span className="px-[5px] py-[2px] rounded-[10px] bg-[#f2f2f299] text-[12px] text-[#121212] mr-2">
                                    synthetic data generation
                                </span>
                                <span className="px-[5px] py-[2px] rounded-[10px] bg-[#f2f2f299] text-[12px] text-[#121212]">
                                    chat
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-[95%] relative">
                            <img
                                src="/images/bg4.jpeg"
                                className="rounded-[10px] hover:border-[3px] hover:border-[#76B900] hover:opacity-50"
                            />
                        </div>
                        <div className=" absolute top-5 px-[20px]">
                            <span className="text-[10px] bg-[#C6C6C666] text-[#D8D8D8] py-[4px] px-[8px] rounded-[5px]">
                                PREVIEW
                            </span>
                            <div className="mt-[40px]">
                                <span className="text-[14px]  ">meta</span>
                                <h5 className="text-[18px] font-bold">
                                    llama-3.1-405b-instruct
                                </h5>
                                <span className="px-[5px] py-[2px] rounded-[10px] bg-[#f2f2f299] text-[12px] text-[#121212] mr-2">
                                    synthetic data generation
                                </span>
                                <span className="px-[5px] py-[2px] rounded-[10px] bg-[#f2f2f299] text-[12px] text-[#121212]">
                                    chat
                                </span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="px-5 mt-[40px] flex items-center justify-between">
                <div className="w-[75%] border-[1px] border-[#202020]"></div>
                <div className="">
                    <span className="text-[#76B900]">
                        <Link href="#">Open Full Page</Link>
                    </span>
                    <button className="py-[11px] px-[15px] bg-[#76B900] rounded-[30px] text-[#000] ml-5">
                        Build with this NIM
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Models;
