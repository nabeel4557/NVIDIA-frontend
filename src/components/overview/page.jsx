import Link from "next/link";
import React, { useState } from "react";

function Overview() {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = [
        { name: "Overview", href: "#" },
        { name: "Technical Implementation", href: "#" },
        { name: "FAQ", href: "#" },
        { title: "How Developers Create Lifelike Digital Humans Using AI" },
        {paragraph: "Developers are exploring how generative AI can accelerate their content pipelines and provide new experiences. One area they’re focusing on is the creation of digital humans for customer service, virtual factories, virtual presence, and gaming use cases. Traditionally, creating digital humans has posed numerous challenges. Achieving realism requires capturing intricate human anatomy, facial expressions, and movements. Animating characters with natural movements and behaviors demands sophisticated motion capture systems. And optimizing performance to ensure everything runs in real time is computationally intensive. To address these challenges, teams are turning to generative AI to find innovative ways of creating interactive digital humans."},
        {paragraph: "NVIDIA ACE is a suite of technologies that help developers bring digital humans to life. Several ACE microservices are NVIDIA NIM™—easy to deploy and highly performant microservices. These NIMs are optimized to run on NVIDIA Graphics Delivery Network (GDN), a global network of GPUs delivering low-latency digital human processing to 100 countries, or on NVIDIA RTX™ AI PCs. With individual NIMs, platform developers and system integrators can take portions of the ACE technology suite and incorporate them into their end-to-end platform."},
        {paragraph:"Users can interact with a 3D digital avatar, based on a customer-service workflow using ACE, that can connect with people using emotions, humor and more."},
        {paragraph: "Built on top of NIM microservices, James is a virtual assistant that can provide contextually accurate responses."},
        {paragraph: "Interact with James in real time at ai.nvidia.com."}
    ];

    return (
        <div className="w-full bg-[#fff] text-[#000] py-[75px]">
            <div className="wrapper">
                <div className="w-full flex items-center">
                    <div className="w-[55%]">
                        <nav className="w-[80%] border-b-2 border-[#EEEEEE]">
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
                                <h3 className='text-[36px] font-bold leading-10'>{item.title}</h3>
                                <p className='py-[10px]'>{item.paragraph}</p>
                                

                              </>
                            ))}

                            
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
