import Link from "next/link";
import React, { useState } from "react";

function Navbar3() {
    const [activeLink, setActiveLink] = useState("");

    const handleClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="bg-[#1A1A1A] sticky top-[90px] py-2">
            <div className="wrapper flex items-center justify-between w-full h-[60px] max-[1280px]:w-[980px]">
                <div className="flex items-center">
                    <ul className="text-[#EEEEEE] flex items-center gap-5 text-[15px]">
                        <li>
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
                        <li>
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
                        <li>
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
                        <li>
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
                        <li>
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
                        <li>
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
                        <li>
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
                        <li>
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
                    <button className="text-black bg-[#76b900] text-[18px] py-[13px] px-[15px] border-none font-bold  max-[1280px]:py-[11px] max-[1280px]:px-[13px] max-[1280px]:text-[15px]">
                        Try Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar3;
