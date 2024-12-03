import React from "react";

function DetailsGrid() {
    const detailItem = [
        {
            title: "Workloads",
            data: ["Generative AI"],
        },
        {
            title: "Industries",
            data: [
                "Gaming",
                "Financial Services",
                "Healthcare and Life Sciences",
                "Media and Entertainment",
                "Retail / Consumer Packaged Goods",
                "Telecommunications",
                "Robotics",
            ],
        },
        {
            title: "Business Goal",
            data: ["Innovation"],
        },
        {
            title: "Products",
            data: [
                "NVIDIA ACE",
                "NVIDIA Riva",
                "NVIDIA Nemotron",
                "NVIDIA Audio2Face",
            ],
        },
    ];
    return (
        <div className="w-full py-[75px] bg-[#EEEEEE] text-[#1A1A1A] ">
            <div className="wrapper  ">
                <div className="w-full flex items-start max-[1280px]:px-[75px]">
                    {detailItem.map((item) => (
                        <div className="w-1/4 ">
                            <h5 className="text-[20px] font-bold max-[1280px]:text-[18px]">
                                {item.title}
                            </h5>
                            {item.data.map((item) => (
                                <p className="max-[1280px]:text-[15px]">
                                    {item}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DetailsGrid;
