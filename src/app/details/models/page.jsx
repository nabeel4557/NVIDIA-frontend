"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function Models() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    const models = [
        { id: 0, image: "/images/bg1.jpeg", name: "llama-3.1-405b-instruct" },
        { id: 1, image: "/images/bg2.jpeg", name: "llama-3.1-405b-instruct" },
        { id: 2, image: "/images/bg3.jpeg", name: "llama-3.1-405b-instruct" },
        { id: 3, image: "/images/bg4.jpeg", name: "llama-3.1-405b-instruct" },
    ];

    return (
        <div className="py-[75px]">
            <div className="wrapper pb-[40px] max-[1280px]:w-[980px]">
                <h2 className="text-[36px] font-bold max-[1280px]:text-[28px] ">
                    Experience Leading Open Models Now
                </h2>
            </div>
            <div className="w-full wrapper max-[1280px]:w-[980px]">
                <Slider {...settings}>
                    {models.map((model) => (
                        <div key={model.id} className="w-full ">
                            <div className="w-[95%] relative">
                                <Link
                                    href={{
                                        pathname: `/details/models/${model.id}`,
                                    }}>
                                    <div>
                                        <img
                                            src={model.image}
                                            className="rounded-[10px] hover:border-[3px] hover:border-[#76B900] hover:opacity-50"
                                            alt={model.name}
                                        />
                                    </div>
                                    <div className="absolute top-5 px-[20px]">
                                        <span className="text-[10px] bg-[#DEBAEB] text-[#5A066D] py-[4px] px-[8px] rounded-[5px]">
                                            RUN ANYWHERE
                                        </span>
                                        <div className="mt-[40px]">
                                            <span className="text-[14px]">
                                                meta
                                            </span>
                                            <h5 className="text-[18px] font-bold">
                                                {model.name}
                                            </h5>
                                            <span className="px-[5px] py-[2px] rounded-[10px] bg-[#f2f2f299] text-[12px] text-[#121212] mr-2">
                                                synthetic data generation
                                            </span>
                                            <span className="px-[5px] py-[2px] rounded-[10px] bg-[#f2f2f299] text-[12px] text-[#121212]">
                                                chat
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Models;
