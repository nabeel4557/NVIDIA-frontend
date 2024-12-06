import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { dynamicData } from "../../utilities/StaticString";
import Image from "next/image";
import LinkArrow from '../LinkArrow'

function Case() {
    return (
        <div className="w-full bg-[#EEEEEE] text-[#000] py-[75px] max-[540px]:w-full">
            <div className="wrapper max-[1280px]:w-[80%] max-[1080px]:w-[90%] max-[786px]:w-full max-[640px]:w-[90%] max-[540px]:w-full max-[540px]:px-[10px] ">
                <h5 className=" text-center text-[#1A1A1A] text-[20px] font-bold max-[1280px]:text-[18px]">
                    Use Cases
                </h5>
                <h2 className=" text-center text-[36px] font-bold max-[1280px]:text-[28px]">
                    Ignite Your Innovation
                </h2>
                <p className=" text-center text-[15px] text-[#1A1A1A] mt-[10px]">
                    See how NVIDIA APIs support industry use cases and
                    jump-start your AI development with curated examples.
                </p>

                <div className="flex  items-center mt-[40px] gap-7 max-[1080px]:w-full max-[1080px]:mx-auto max-[980px]:flex-wrap max-[980px]:w-full max-[980px]:justify-center max-[786px]:w-full max-[640px]:w-[90%] max-[540px]:w-full">
                    {dynamicData.map((item, index) => (
                        <div className="w-1/3 bg-[#fff] h-[530px] max-[980px]:h-[500px] max-[640px]:h-[550px] relative pb-[30px] shadow-lg max-[1080px]:w-[32%] max-[980px]:w-[35%] max-[786px]:w-[35%] max-[640px]:w-[500px] max-[540px]:w-full">
                            <div className="w-full max-[640px]:w-[500px] max-[540px]:w-full ">
                                <img
                                    className="max-[640px]:w-full max-[540px]:w-full"
                                    src={item.image}
                                    alt={item.title}
                                />
                            </div>
                            <div className="my-[30px] px-[20px] max-[540px]:w-full ">
                                <h3 className="text-[24px] font-bold max-[1280px]:text-[20px]">
                                    {item?.title}
                                </h3>
                                <p className="text-[15px] text-[#1a1a1a77] mt-[30px]">
                                    {item?.description}
                                </p>

                                    <LinkArrow index={index} />
                                    
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Case;
