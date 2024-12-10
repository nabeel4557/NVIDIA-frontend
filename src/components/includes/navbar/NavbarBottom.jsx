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

    const pathname = usePathname();

    return (
        <div className="bg-[#000] max-[540px]:w-full">
            <div className="wrapper  flex items-center gap-5 max-[1080px]:flex max-[1080px]:justify-between">
                {!pathname.includes("/use-cases") ? (
                    <div className="flex items-center py-4 gap-[25px] max-[1080px]:flex max-[1080px]:justify-between max-[1080px]:w-full max-[540px]:w-full">
                        <div className="max-[1080px]:flex justify-between items-center">
                            <h2 className="text-[28px] text-white max-[1080px]:text-[20px]">
                                <Link href={"#"}> Artificial Intelligence</Link>
                            </h2>
                        </div>
                        <div className="flex relative hidden max-[1080px]:block">
                            <RxHamburgerMenu
                                className=""
                                size={24}
                                onClick={toggledropdown}
                            />
                            {toggle && (
                                <ul className="absolute w-[200px] top-[30px] right-0 bg-[#fff] text-[#000] p-[40px] leading-9">
                                    <li>
                                        <Link href="/industries">
                                            Industries
                                        </Link>
                                    </li>
                                    {navItems.map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                isActive == index
                                                    ? setActive(null)
                                                    : setActive(index);
                                        }}>
                                            {
                                                <div
                                                    className={`flex items-center gap-2  cursor-pointer justify-between`}>
                                                    <span>{item.title}</span>
                                                    <div className="">
                                                        <IoMdArrowDropdown
                                                            size={20}
                                                            className={`mt-1 cursor-pointer transform transition-all duration-300 ease-in-out ${
                                                                isActive ==
                                                                index
                                                                    ? "rotate-[180deg]"
                                                                    : "rotate-[0deg]"
                                                            }`}
                                                        />
                                                    </div>
                                                </div>
                                            }

                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center py-4 gap-[25px] max-[1080px]:flex max-[1080px]:justify-between max-[1080px]:w-full max-[540px]:w-full">
                        <div className="max-[1080px]:flex justify-between items-center">
                            <Link className="flex " href={"#"}>
                                <h2 className="text-[28px] font-extrabold text-white max-[1080px]:text-[20px]">
                                    Use Cases
                                </h2>{" "}
                            </Link>
                        </div>
                    </div>
                )}
                <div className="flex items-center">
                    <ul className="flex items-center text-[16px] gap-[25px] mt-2 text-[#999999] max-[1080px]:hidden">
                        <li>
                            <Link
                                className="hover:text-[#76b900]"
                                href="../../industries">
                                Industries
                            </Link>
                        </li>
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className={`flex items-center gap-2 relative cursor-pointer ${
                                    index === isActive
                                        ? "text-white"
                                        : "text-[#999]"
                                }`}
                                onMouseEnter={() => setActive(index)}
                                onClick={() => {
                                    isActive == index
                                        ? setActive(null)
                                        : setActive(index);
                                }}
                                onMouseLeave={() => setActive(null)}>
                                {item.title}

                                {
                                    <div className="">
                                        <IoMdArrowDropdown
                                            size={20}
                                            className="mt-1 cursor-pointer"
                                        />

                                        {isActive != null &&
                                            isActive == index && (
                                                <div className="absolute rotate-45 w-[30px] h-[30px] bg-[white] z-50 -right-[5px] top-7"></div>
                                            )}
                                    </div>
                                }

                                {isActive === index && (
                                    <div className="absolute top-full left-0 mt-2 w-[220px] bg-[#fff] px-[40px] py-[25px] z-60">
                                        <ul className="text-[16px] text-[#1A1A1A] leading-10">
                                            {item.datas?.map(
                                                (submenuItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link href="#">
                                                            {submenuItem.title}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavbarBottom;
