import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";


function GetStarted() {
    return (
        <div className="w-full pt-[75px] bg-[#1A1A1A]">
            <div className="wrapper w-full">
                <h2 className="text-[36px] text-[#fff] font-bold text-center">
                    Get Started
                </h2>
                <div className="w-full flex  gap-6 mt-[40px]">
                    <div className="w-1/2 py-[30px] px-[28px] bg-[#000]">
                        <h3 className="text-[28px] font-bold mb-[30px]">
                            Start Prototyping for Free
                        </h3>
                        <p>
                            Get started with easy-to-use, NVIDIA-managed
                            serverless APIs.
                        </p>
                        <ul className="mt-[15px] ">
                            <li className="mt-[10px] flex items-center gap-2">
                                <FaCheck className="text-[#768900]" /> Access
                                fully accelerated AI infrastructure.
                            </li>
                            <li className="mt-[10px] flex items-center gap-2">
                                <FaCheck className="text-[#768900]" /> Ensure
                                your data isn't used for model training.
                            </li>
                            <li className="mt-[10px] flex items-center gap-2">
                                <FaCheck className="text-[#768900]" /> Get
                                started for free with 1,000 inference credits.
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2 py-[30px] px-[28px] bg-[#000]">
                        <h3 className="text-[28px] font-bold mb-[30px]">
                            Download and Deploy
                        </h3>
                        <p>
                            Run NVIDIA NIM to scale optimized AI models in the
                            cloud or data center of your choice.
                        </p>
                        <ul className="mt-15px text-[15px]">
                            <li className="mt-[10px] flex items-center gap-2">
                                <FaCheck size={16} className="text-[#768900]" />
                                Ensure that data never leaves your secure
                                enclave.
                            </li>
                            <li className="mt-[10px] flex it gap-2">
                                <FaCheck
                                    size={17}
                                    className="text-[#768900] mt-[5px]"
                                />
                                Seamlessly transition from cloud endpoints to
                                self-hosted APIs without code changes.
                            </li>
                            <li className="mt-[10px] flex  gap-2">
                                <FaCheck size={22} className="text-[#768900]" />
                                Use an NVIDIA AI Enterprise license for
                                production, or get started for free with the
                                NVIDIA Developer Program.
                            </li>
                        </ul>
                    </div>
                </div>
                <button className=" flex mx-auto mt-[30px] py-[11px] px-[13px] text-[18px] font-bold border-[2px] border-[#768900]">
                    Build Now
                </button>
            </div>
            <div
                className="w-full h-[450px]  bg-cover bg-center mt-[40px] py-[75px]"
                style={{ backgroundImage: `url(/images/img6.jpg)` }}>
                <div className="w-1/2">
                    <div className="wrapper">
                        <h2 className="text-[36px] font-bold text-[#fff]">
                            Build Custom Generative AI Models With NVIDIA AI
                            Foundry
                        </h2>
                        <p className="text-[15px] mt-[20px] text-[#EEEEEE]">
                            Access foundation models, enterprise software,
                            accelerated computing, and AI expertise to build,
                            fine-tune, and deploy custom models for your
                            enterprise applications.
                        </p>
                        <span className="text-[18px] font-bold mt-[25px] inline-block flex items-center">Get Started <MdKeyboardArrowRight color="#76B900" size={30}/></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;
