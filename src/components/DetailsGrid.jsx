import React from "react";

function DetailsGrid({ slug }) {
    return (
        <div className="w-full py-[75px] max-[640px]:py-[20px] bg-[#EEEEEE] text-[#1A1A1A] ">
            <div className="wrapper  ">
                <div className="w-full flex items-start max-[1280px]:px-[75px] max-[1080px]:px-[0px] max-[980px]:w-[75%] max-[768px]:w-[95%] max-[540px]: max-[980px]:mx-auto max-[980px]:flex-wrap">
                    {slug.detailPoints.map((item ,index) => (
                        <div key={index} className="w-1/4 max-[980px]:w-1/2 max-[640px]:w-full">
                            <h5 className="text-[20px] font-bold max-[1280px]:text-[18px] max-[768px]:text-[16px] max-[980px]:mt-[15px] mb-[10px]">
                                {item.title}
                            </h5>
                            {item.list.map((item,index) => (
                                <p key={index} className="max-[1280px]:text-[15px] ">
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
