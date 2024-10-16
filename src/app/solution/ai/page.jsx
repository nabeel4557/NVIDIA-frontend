import Link from "next/link";
import React from "react";

function Ai() {
    return (
        <div className="w-full relative">
            <video
                className=" top-0 left-0 w-full h-full object-cover "
                autoPlay
                loop
                muted>
                <source src="/videos/video3.WEBM" type="video/webm" />
            </video>
            <div className="wrapper">
                <div className="absolute top-40  w-[600px] ">
                    <h2 className="text-[48px] font-bold text-[#000] ">
                        The Most Advanced AI, Ready for Enterprise
                    </h2>
                    <button className="py-[13px] px-[15px] text-[#000] text-[18px] font-bold bg-[#76B900] mt-[10px]">
                        Get Started
                    </button>
                    <div className=" text-[15px] text-[#000] mt-[20px] flex items-center">
                        <span className="border-b-[2px] border-b-[#76B900] mr-[25px]">
                            For AI Executives |
                        </span>
                        <span className="border-b-[2px] border-b-[#76B900] mr-[25px]">
                            For IT |
                        </span>
                        <span className="border-b-[2px] border-b-[#76B900] ">
                            For Developers
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-[#1A1A1A] sticky top[90px] py-2">
                    <div className="wrapper flex items-center justify-between w-full h-[60px] ">
                        <div className="flex items-center">
                            <ul className="text-[#EEEEEE] flex items-center gap-5 text-[15px]">
                                <li>
                                    <Link href="#">Overview</Link>
                                </li>
                                <li>
                                    <Link href="#">Solutions</Link>
                                </li>
                                <li>
                                    <Link href="#">Use Cases</Link>
                                </li>
                                <li>
                                    <Link href="#">Resources</Link>
                                </li>
                                <li>
                                    <Link href="#">Next Steps</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className="text-black bg-[#76b900] text-[18px] py-[13px] px-[15px] border-none font-bold">
                                Try Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-[75px] bg-[#fff]">
                <div className="wrapper ">
                    <div className="w-full flex justify-between">
                        <div className="w-1/2">
                            <h3 className="text-[20px] text-[#000] font-bold">
                                Overview
                            </h3>
                            <h2 className="text-[36px] font-bold text-[#000] mt-[10px]">
                                What Is NVIDIA AI?
                            </h2>
                            <p className="text-[22px] text-[#1A1A1A] mt-[10px] leading-10">
                                Transform any enterprise into an AI organization
                                with full-stack innovation across accelerated
                                infrastructure, enterprise-grade software, and
                                AI models. By accelerating the entire AI
                                workflow, projects reach production faster, with
                                higher accuracy, efficiency, and infrastructure
                                performance at a lower overall cost for various
                                solutions and applications.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <div className="w-[520px] py-[30px] px-[24px] border-[1px] border-[#EEEEEE] shadow-black hover:shadow-xl ml-auto">
                                <h5 className="text-[15px] text-[#1A1A1A] font-bold">
                                    Overcoming Challenges in AI Implementation
                                </h5>
                                <p className="text-[15px] text-[#1A1A1A] mt-[20px]">
                                    Learn why AI needs to be taken out of silos
                                    and integrated into the data center or cloud
                                    to be infused into an organization.
                                </p>
                                <Link
                                    href="#"
                                    className=" block text-[18px] text-[#000] font-bold mt-[30px]">
                                    Read IDC Report
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ai;
