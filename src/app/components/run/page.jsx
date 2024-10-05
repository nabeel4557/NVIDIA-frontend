import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Run() {
    return (
        <div className=" wrapper py-[75px]">
            <div className="w-[1000px] mx-auto">
                <h6 className="text-center text-[20px] font-bold">
                    Run Anywhere
                </h6>
                <h2 className="text-center py-[8px] text-[36px] font-bold ">
                    Accelerate Your AI Deployment With NVIDIA NIM
                </h2>
                <p className=" text-center text-[15px] ml-[60px] ">
                    Part of NVIDIA AI Enterprise, NVIDIA NIM is a set of
                    easy-to-use inference microservices for accelerating the
                    deployment of foundation models on any cloud or data center
                    and helping to keep your data secure.
                </p>
            </div>
            <div className="w-full">
                <img src="/images/img4.jpg" />
            </div>
            <div className=" space-y-3 mt-[30px]">
                <h6 className="flex items-center justify-center text-[18px] font-bold">
                    <Link href="#" className="flex items-center">
                        Learn More About NVIDIA NIM{" "}
                        <MdKeyboardArrowRight size={30} color="#76B900" />
                    </Link>
                </h6>
                <h6 className="flex items-center justify-center text-[18px] font-bold">
                    <Link href="#" className="flex items-center">
                        See How to Deploy NIM in Five Minutes{" "}
                        <MdKeyboardArrowRight size={30} color="#76B900" />
                    </Link>
                </h6>
            </div>
        </div>
    );
}

export default Run;
