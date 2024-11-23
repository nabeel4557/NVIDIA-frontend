import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Navbar3() {
    const navbarTitles = [
        { titles: "Models", id: "#models" },
        { titles: "Integrations", id: "#integrations" },
        { titles: "Run Anywhere", id: "#run" },
        { titles: "Get Started", id: "#get-started" },
        { titles: "Use Cases", id: "#case" },
        { titles: "Ecosystem", id: "#ecosystem" },
        { titles: "Resources", id: "#resources" },
        { titles: "Docs", id: "#documentation" },
    ];

    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    const toggledropdown = () => {
        setToggle(!toggle);
    };

    const handleClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="bg-[#1A1A1A] sticky top-[90px] py-2 max-[360px]:w-full">
            {toggle && (
                <div className="hidden max-[540px]:block max-[640px]:w-full bg-[#333333] absolute top-[60px] leading-9 z-50">
                    <ul className="wrapper">
                        {navbarTitles.map((item, index) => (
                            <li key={index} className="py-2 px-4 text-white">
                                <Link
                                    href={item.id}
                                    scroll={true}
                                    onClick={() => {
                                        handleClick(item.id);
                                        toggledropdown();
                                    }}>
                                    {item.titles}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="wrapper flex items-center justify-between w-full h-[60px]">
                {/* Dropdown toggle button for mobile */}
                <div className="hidden max-[640px]:block relative">
                    <div
                        className="flex items-center gap-3"
                        onClick={toggledropdown}>
                        <span className="text-[#fff]">Models</span>
                        <IoIosArrowDown />
                    </div>
                </div>

                
                <div className="flex items-center">
                    <ul className="text-[#EEEEEE] flex items-center gap-5 text-[15px]">
                        {navbarTitles.map((item, index) => (
                            <li key={index} className="max-[640px]:hidden">
                                <Link
                                    href={item.id}
                                    scroll={true}
                                    className={`${
                                        activeLink === item.id
                                            ? "border-b-2 border-[#76b900] pb-1"
                                            : ""
                                    }`}
                                    onClick={() => handleClick(item.id)}>
                                    {item.titles}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                
                <div>
                    <button className="text-black bg-[#76b900] text-[18px] py-[13px] px-[15px] border-none font-bold">
                        Try Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar3;
