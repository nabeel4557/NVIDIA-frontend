import React from "react";

function DetailsGrid({ slug }) {
    return (
        <div className="w-full py-[75px] bg-[#EEEEEE] text-[#1A1A1A] ">
            <div className="wrapper  ">
                <div className="w-full flex items-start max-[1280px]:px-[75px]">
                    {slug.detailPoints.map((item) => (
                        <div className="w-1/4 ">
                            <h5 className="text-[20px] font-bold max-[1280px]:text-[18px]">
                                {item.title}
                            </h5>
                            {item.list.map((item) => (
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
