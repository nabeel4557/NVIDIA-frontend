import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Navbar3() {
    const [toggle, setToggle] = useState(false);

    const toggledropdown = () => {
        setToggle(!toggle);
    };

    const [activeLink, setActiveLink] = useState("");

    const handleClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="bg-[#1A1A1A] sticky top-[90px] py-2  max-[360px]:w-full">
            <div className=" hidden max-[540px]:block max-[640px]:w-full   bg-[#333333] w-[100vw] h-[vh] absolute top-[60px]  leading-9 !z-50 max-[540px]:w-[480px] max-[360px]:w-full">
                {toggle && (
                    <ul className="wrapper ">
                        <li>Integrations</li>
                        <li>Run Anywhere</li>
                        <li>Get Started</li>
                        <li>Use Cases</li>
                        <li>Ecosystem</li>
                        <li> Resources</li>
                        <li>Docs</li>
                    </ul>
                )}
            </div>

            <div className="wrapper flex items-center justify-between w-full h-[60px] max-[640px]:h-auto max-[1280px]:w-[980px] max-[1080px]:w-[700px] max-[980px]:w-[700px] max-[786px]:w-[600px] max-[640px]:w-[500px] max-[540px]:w-[480px] max-[480px]:w-full  max-[480px]:px-[10px]">
                <div className="hidden  max-[640px]:block relative ">
                    <div
                        className="flex items-center gap-3 "
                        onClick={toggledropdown}>
                        <span className="text-[#fff]">Models</span>
                        <IoIosArrowDown />
                    </div>
                </div>

                <div className="flex items-center">
                    <ul className="text-[#EEEEEE] flex items-center gap-5 text-[15px]">
                        <li className="max-[640px]:hidden">
                            <Link
                                href="#models"
                                scroll={true}
                                className={`${
                                    activeLink === "#models"
                                        ? "border-b-2 border-[#76b900] p-6"
                                        : ""
                                }`}
                                onClick={() => handleClick("#models")}>
                                Models
                            </Link>
                        </li>

                        <li className="max-[640px]:hidden">
                            <Link
                                href="#integrations"
                                scroll={true}
                                className={`${
                                    activeLink === "#integrations"
                                        ? "border-b-2 border-[#76b900] p-6"
                                        : ""
                                }`}
                                onClick={() => handleClick("#integrations")}>
                                Integrations
                            </Link>
                        </li>
                        <li className="max-[640px]:hidden">
                            <Link
                                href="#run"
                                scroll={true}
                                className={`${
                                    activeLink === "#run"
                                        ? "border-b-2 border-[#76b900] p-6"
                                        : ""
                                }`}
                                onClick={() => handleClick("#run")}>
                                Run Anywhere
                            </Link>
                        </li>
                        <li className="max-[640px]:hidden">
                            <Link
                                href="#get-started"
                                scroll={true}
                                className={`${
                                    activeLink === "#get-started"
                                        ? "border-b-2 border-[#76b900] p-6"
                                        : ""
                                }`}
                                onClick={() => handleClick("#get-started")}>
                                Get Started
                            </Link>
                        </li>
                        <li className="max-[1080px]:hidden">
                            <Link
                                href="#case"
                                scroll={true}
                                className={`${
                                    activeLink === "#case"
                                        ? "border-b-2 border-[#76b900] p-6"
                                        : ""
                                }`}
                                onClick={() => handleClick("#case")}>
                                Use Cases
                            </Link>
                        </li>
                        <li className="max-[1080px]:hidden">
                            <Link
                                href="#ecosystem"
                                scroll={true}
                                className={`${
                                    activeLink === "#ecosystem"
                                        ? "border-b-2 border-[#76b900] p-6"
                                        : ""
                                }`}
                                onClick={() => handleClick("#ecosystem")}>
                                Ecosystem
                            </Link>
                        </li>
                        <li className="max-[1080px]:hidden">
                            <Link
                                href="#resources"
                                scroll={true}
                                className={`${
                                    activeLink === "#resources"
                                        ? "border-b-2 border-[#76b900] p-6"
                                        : ""
                                }`}
                                onClick={() => handleClick("#resources")}>
                                Resources
                            </Link>
                        </li>
                        <li className="max-[1080px]:hidden">
                            <Link
                                href="#documentation"
                                scroll={true}
                                className={`${
                                    activeLink === "#documentation"
                                        ? "border-b-2 border-[#76b900] p-6"
                                        : ""
                                }`}
                                onClick={() => handleClick("#documentation")}>
                                Docs
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="text-black bg-[#76b900] text-[18px] py-[13px] px-[15px] border-none font-bold  max-[1280px]:py-[11px] max-[1280px]:px-[13px] max-[1280px]:text-[15px]  max-[640px]:py-[9px] max-[640px]:px-[10px]">
                        Try Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar3;
