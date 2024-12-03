import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Overview() {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = [
        { name: "Overview", href: "#" },
        { name: "Technical Implementation", href: "#" },
        { name: "FAQ", href: "#" },
        { title: "How Developers Create Lifelike Digital Humans Using AI" },
        {
            paragraph:
                "Developers are exploring how generative AI can accelerate their content pipelines and provide new experiences. One area they’re focusing on is the creation of digital humans for customer service, virtual factories, virtual presence, and gaming use cases. Traditionally, creating digital humans has posed numerous challenges. Achieving realism requires capturing intricate human anatomy, facial expressions, and movements. Animating characters with natural movements and behaviors demands sophisticated motion capture systems. And optimizing performance to ensure everything runs in real time is computationally intensive. To address these challenges, teams are turning to generative AI to find innovative ways of creating interactive digital humans.",
        },
        {
            paragraph:
                "NVIDIA ACE is a suite of technologies that help developers bring digital humans to life. Several ACE microservices are NVIDIA NIM™—easy to deploy and highly performant microservices. These NIMs are optimized to run on NVIDIA Graphics Delivery Network (GDN), a global network of GPUs delivering low-latency digital human processing to 100 countries, or on NVIDIA RTX™ AI PCs. With individual NIMs, platform developers and system integrators can take portions of the ACE technology suite and incorporate them into their end-to-end platform.",
        },
        {
            paragraph:
                "Users can interact with a 3D digital avatar, based on a customer-service workflow using ACE, that can connect with people using emotions, humor and more.",
        },
        {
            paragraph:
                "Built on top of NIM microservices, James is a virtual assistant that can provide contextually accurate responses.",
        },
        { paragraph: "Interact with James in real time at ai.nvidia.com." },
    ];
    const Links = [
        {
            button: "Learn More About NVIDIA Solutions for Digital Humans",
        },
        {
            button: "Interact With a Digital Human",
        },
        {
            button: "NVIDIA Announces First Digital Human Technologies On-Device Small Language Model",
        },
        {
            button: "Spotlight: UneeQ Revolutionizes Customer Engagement with AI-Powered Digital Humans",
        },
        {
            button: "Build Lifelike Digital Humans with NVIDIA ACE, Now Generally Available",
        },
    ];

    return (
        <div className="w-full bg-[#fff] text-[#000] py-[75px]">
            <div className="wrapper">
                <div className="w-full flex py-[30px] justify-between max-[1280px]:w-[88%] max-[1280px]:mx-auto">
                    <div className="left w-[55%]">
                        <nav className="w-[80%] border-b-2 border-[#EEEEEE] max-[1280px]:w-[90%]">
                            <ul className="flex items-center w-full gap-5">
                                {tabs.map((tab) => (
                                    <li key={tab.name}>
                                        <button
                                            onClick={() =>
                                                setActiveTab(tab.name)
                                            }
                                            className={`text-[18px] ${
                                                activeTab === tab.name
                                                    ? "font-bold border-b-2 border-[#76B900]"
                                                    : ""
                                            }`}>
                                            {tab.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="w-full">
                            {tabs.map((item) => (
                                <>
                                    <h3 className="text-[36px] font-bold leading-10 max-[1280px]:text-[28px]">
                                        {item.title}
                                    </h3>
                                    <p className="py-[10px] text-[#1A1A1A] max-[1280px]:text-[15px]">
                                        {item.paragraph}
                                    </p>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className=" w-[37%]  relative max-[1400px]:w-[30%]">
                        <div className=" right w-full absolute top-24">
                            <p className="text-[#1A1A1A] text-[15px]">
                                Quick Links
                            </p>
                            <div className="w-full mt-[20px] justify-end">
                                {Links.map((link) => (
                                    <span className="">
                                        <p className="w-auto text-[16px] font-bold left-0 py-[10px] cursor-pointer max-[1280px]:text-[14px]">
                                            {link.button}
                                            <span>
                                                <MdKeyboardArrowRight
                                                    color="#76B900"
                                                    size={22}
                                                    className=" justify-start items-end inline-flex"
                                                />
                                            </span>
                                        </p>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
