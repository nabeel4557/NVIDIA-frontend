"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function NavbarBottom() {
    const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
    const [isSoftwareDropdownOpen, setIsSoftwareDropdownOpen] = useState(false);

    const toggleSolutionsDropdown = () => {
        setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
    };

    const toggleSoftwareDropdown = () => {
        setIsSoftwareDropdownOpen(!isSoftwareDropdownOpen);
    };

    return (
        <div className="bg-[#000] sticky top-0 z-20">
            <div className="wrapper flex items-center py-4 gap-[25px]">
                <div className="">
                    <h2 className="text-[28px] text-white">
                        Artificial Intelligence
                    </h2>
                </div>
                <div className="flex items-center">
                    <ul className="flex items-center text-[16px] gap-[25px] mt-2 text-[#999999]">
                        <li>
                            <Link href="/industries">Industries</Link>
                        </li>
                        <li
                            className="flex items-center gap-2 relative"
                            onClick={toggleSolutionsDropdown}>
                            <Link href="#">Solutions</Link>
                            {isSolutionsDropdownOpen ? (
                                <IoMdArrowDropup
                                    size={20}
                                    className="mt-1 cursor-pointer"
                                />
                            ) : (
                                <IoMdArrowDropdown
                                    size={20}
                                    className="mt-1 cursor-pointer"
                                />
                            )}
                            {isSolutionsDropdownOpen && (
                                <ul className="absolute w-[220px] top-10 bg-[#fff] text-[16px] text-[#1A1A1A] px-[40px] py-[25px] leading-10 z-10">
                                    <li>
                                        <Link href="#">Overview</Link>
                                    </li>
                                    <li>
                                        <Link href="/solution/ai">
                                            AI Platform
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">AI Inference</Link>
                                    </li>
                                    <li>
                                        <Link href="#">AI Workflows</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Conversational AI</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Data Analytics</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Generative AI</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Machine Learning</Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Prediction and Forecasting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">Speech AI</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li
                            className="flex items-center gap-2 relative"
                            onClick={toggleSoftwareDropdown}>
                            <Link href="#">Software</Link>
                            {isSoftwareDropdownOpen ? (
                                <IoMdArrowDropup
                                    size={20}
                                    className="mt-1 cursor-pointer"
                                />
                            ) : (
                                <IoMdArrowDropdown
                                    size={20}
                                    className="mt-1 cursor-pointer"
                                />
                            )}
                            {isSoftwareDropdownOpen && (
                                <ul className="absolute w-[220px] top-10 bg-[#fff] text-[16px] text-[#1A1A1A] px-[40px] py-[25px] leading-10 z-10">
                                    <li>
                                        <Link href="#">
                                            AI Enterprise Suite
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">AI Inference - Triton</Link>
                                    </li>
                                    <li>
                                        <Link href="#">AI Workflows</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Cybersecurity - Morpheus</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Conversational AI</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Data Analytics</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Generative AI</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Machine Learning</Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Prediction and Forecasting
                                        </Link>
                                    </li>
                                    
                                </ul>
                            )}
                        </li>
                        <li className="flex items-center gap-2">
                            <Link href="#">Products</Link>
                            <IoMdArrowDropdown size={20} className="mt-1" />
                        </li>
                        <li className="flex items-center gap-2">
                            <Link href="#">Resources</Link>
                            <IoMdArrowDropdown size={20} className="mt-1" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavbarBottom;
