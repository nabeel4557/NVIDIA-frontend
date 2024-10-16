"use client";

import React from "react";
import { useParams } from "next/navigation";
function page() {
    const { detail_id } = useParams();

    const models = [
        {
            id: 0,
            image: "/images/bg1.jpeg",
            name: "llama-3.1-405b-instruct",
        },
        {
            id: 1,
            image: "/images/bg2.jpeg",
            name: "llama-3.1-405b-instruct",
        },
        {
            id: 2,
            image: "/images/bg3.jpeg",
            name: "llama-3.1-405b-instruct",
        },
        {
            id: 3,
            image: "/images/bg4.jpeg",
            name: "llama-3.1-405b-instruct",
        },
    ];
    console.log(models[detail_id], "hellloo");

    return (
        <div className="w-full py-[75px]">
            <div className="wrapper ">
                <div className="w-[600px] mx-auto">
                    <h1 className="text-[36px] font-bold">
                        {models[detail_id].name}
                    </h1>
                    <div className="mt-[30px]">
                        <img
                            src={models[detail_id].image}
                            alt={`Model ${detail_id}`}
                        />
                    </div>
                    <p className="mt-[40px] text-[20px] text-[#EEEEEE]">
                        Advanced LLM for synthetic data generation,
                        distillation, and inference for chatbots, coding, and
                        domain-specific tasks.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default page;
