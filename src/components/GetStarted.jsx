import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

function GetStarted() {
    const cardItem = [
        {
            title: "Start Prototyping for Free",
            subTitle:
                "Get started with easy-to-use, NVIDIA-managed serverless APIs.",
            content: [
                "Access fully accelerated AI infrastructure.",
                "Ensure your data isn't used for model training.",
                "Get started for free with 1,000 inference credits.",
            ],
        },
        {
            title: "Download and Deploy",
            subTitle:
                "Run NVIDIA NIM to scale optimized AI models in the cloud or data center of your choice.",
            content: [
                "Ensure that data never leaves your secure enclave.",
                "Seamlessly transition from cloud endpoints to self-hosted APIs without code changes.",
                "Use an NVIDIA AI Enterprise license for production, or get started for free with the NVIDIA Developer Program.",
            ],
        },
    ];
    return (
        <div className="w-full pt-[75px] bg-[#1A1A1A] max-[540px]:w-full">
            <div className="wrapper w-full max-[1280px]:w-[80%] max-[1080px]:w-[90%] max-[1080px]:mx-auto max-[980px]:w-[75%] max-[786px]:w-[80%] max-[640px]:w-[90%] max-[540px]:w-full">
                <h2 className="text-[36px] text-[#fff] font-bold text-center max-[1280px]:text-[28px] max-[1080px]:text-[24px]">
                    Get Started
                </h2>
                <div className="w-full flex  gap-6 mt-[40px] max-[768px]:block">
                    {cardItem.map((item, index) => (
                        <div
                            key={index}
                            className="w-1/2 py-[30px] px-[28px] bg-[#000] max-[768px]:w-full max-[640px]:w-full">
                            <h3 className="text-[28px] font-bold mb-[30px] max-[1280px]:text-[24px] max-[1080px]:text-[20px]">
                                {item.title}
                            </h3>
                            <p>{item.subTitle}</p>
                            <ul className="mt-[15px] ">
                                {item.content.map((item, index) => (
                                    <li
                                        key={index}
                                        className=" flex items-center gap-2">
                                        <div className="flex justify-center items-center w-[20px] h-[20px]">
                                            <FaCheck
                                                width={100}
                                                height={100}
                                                className="text-[#768900]"
                                            />
                                        </div>

                                        <p>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <button className=" flex mx-auto mt-[30px] py-[11px] px-[13px] text-[18px] font-bold border-[2px] border-[#768900] max-[1280px]:py-[9px] max-[1280px]:px-[11px] max-[1280px]:text-[16px] max-[1080px]:py-[7px] max-[1080px]:px-[10px] max-[1080px]:text-[14px]">
                    Build Now
                </button>
            </div>
            <div
                className="w-full h-[450px]  bg-cover bg-center mt-[40px] py-[75px] "
                style={{ backgroundImage: `url(/images/img6.jpg) ` }}>
                <div className="w-full max-[1280px]:w-[80%] max-[1280px]:mx-auto max-[1080px]:w-full max-[1080px]:mx-auto max-[980px]:w-[75%] max-[786px]:w-[90%] max-[640px]:w-full max-[480px]:w-full">
                    <div className="wrapper max-[1280px]:left-0 max-[540px]:w-full max-[540px]:p-[15px] max-[480px]:w-full">
                        <div className="w-1/2 max-[640px]:w-[500px] max-[540px]:w-full max-[480px]:w-full">
                            <h2 className="text-[36px] font-bold text-[#fff] max-[1280px]:text-[28px] max-[1080px]:text-[24px] max-[786px]:w-[300px] max-[640px]:w-full ">
                                Build Custom Generative AI Models With NVIDIA AI
                                Foundry
                            </h2>
                            <p className="text-[15px] mt-[20px] text-[#EEEEEE] max-[786px]:w-[300px] max-[640px]:w-[450px] max-[480px]:w-full">
                                Access foundation models, enterprise software,
                                accelerated computing, and AI expertise to
                                build, fine-tune, and deploy custom models for
                                your enterprise applications.
                            </p>

                            <Link
                                href={"#"}
                                className="text-[18px] font-bold mt-[25px]  flex items-center max-[1280px]:text-[16px] max-[1080px]:text-[14px]">
                                Get Started{" "}
                                <MdKeyboardArrowRight
                                    className="max-[1280px]:size-[24px]"
                                    color="#76B900"
                                    size={30}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;
