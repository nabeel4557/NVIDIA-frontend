"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function NavbarBottom() {
    const [isActive, setActive] = useState(null);
    const [toggle, setToggle] = useState(false);
    const toggledropdown = () => {
        setToggle(!toggle);
    };

    const navItems = [
        {
            title: "Solutions",
            datas: [
                { title: "Overview" },
                { title: "AI Platform" },
                { title: "Industries" },
                { title: "Conversational AI" },
                { title: "Data Analytics" },
                { title: "Generative AI" },
                { title: "Prediction and Forecasting" },
                { title: "Speech AI" },
                { title: "Industries" },
                { title: "Overview" },
            ],
        },
        {
            title: "Software",
            datas: [
                { title: "Industries" },
                { title: "AI Platform" },
                { title: "Overview" },
                { title: "Conversational AI" },
                { title: "Data Analytics" },
                { title: "Generative AI" },
                { title: "Prediction and Forecasting" },
                { title: "Speech AI" },
                { title: "Industries" },
                { title: "Overview" },
            ],
        },
        {
            title: "Products",
            datas: [
                { title: "Industries" },
                { title: "AI Platform" },
                { title: "Overview" },
                { title: "Conversational AI" },
                { title: "Data Analytics" },
                { title: "Generative AI" },
                { title: "Prediction and Forecasting" },
                { title: "Speech AI" },
                { title: "Industries" },
                { title: "Overview" },
            ],
        },
        {
            title: "Resources",
            datas: [
                { title: "Industries" },
                { title: "AI Platform" },
                { title: "Overview" },
                { title: "Conversational AI" },
                { title: "Data Analytics" },
                { title: "Generative AI" },
                { title: "Prediction and Forecasting" },
                { title: "Speech AI" },
                { title: "Industries" },
                { title: "Overview" },
            ],
        },
    ];

    const pathname = usePathname()

    return (
        <div className="bg-[#000] max-[540px]:w-full">
            <div className="wrapper  flex items-center gap-5 max-[1080px]:flex max-[1080px]:justify-between">
                {!pathname.includes('/use-cases') ? (
                    <div className="flex items-center py-4 gap-[25px] max-[1080px]:flex max-[1080px]:justify-between max-[1080px]:w-full max-[540px]:w-full">
                        <div className="max-[1080px]:flex justify-between items-center">
                            <h2 className="text-[28px] text-white max-[1080px]:text-[20px]">
                                <Link href={"#"}> Artificial Intelligence</Link>
                            </h2>
                        </div>
                        <div className="flex relative hidden max-[1080px]:block">
                            <RxHamburgerMenu size={24} onClick={toggledropdown} />
                            {toggle && (
                                <ul className="absolute w-[200px] top-[30px] right-[10px] bg-[#fff] text-[#000] p-[40px] leading-9">
                                    <li>
                                        <Link href="/industries">Industries</Link>
                                    </li>
                                    <li>
                                        <Link href="/solution/ai">AI Platform</Link>
                                        <ul>
                                            <li>
                                                <Link href="#">Overview</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center py-4 gap-[25px] max-[1080px]:flex max-[1080px]:justify-between max-[1080px]:w-full max-[540px]:w-full">
                       <div className="max-[1080px]:flex justify-between items-center">
                            
                                <Link className="flex " href={"#"}><h2 className="text-[28px] font-extrabold text-white max-[1080px]:text-[20px]">Use Cases</h2> </Link>
                            
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavbarBottom;
