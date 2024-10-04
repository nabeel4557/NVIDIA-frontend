import Link from "next/link";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function NavbarBottom() {
    return (
        <div className="bg-[#000] sticky top-0">
            <div className="wrapper flex items-center py-4 gap-[25px] ">
                <div className="">
                    <h2 className="text-[28px] ">Artificial Intelligence</h2>
                </div>
                <div className="flex items-center ">
                    <ul className="flex items-center text-[16px] gap-[25px] mt-2 text-[#999999]">
                        <li>
                            <Link href="#">Industries</Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <Link href="#">Solutions</Link>
                            <IoMdArrowDropdown size={20} className=" mt-1" />
                        </li>
                        <li className="flex items-center gap-2">
                            <Link href="#">Software</Link>
                            <IoMdArrowDropdown size={20} className=" mt-1" />
                        </li>
                        <li className="flex items-center gap-2">
                            <Link href="#">Products</Link>
                            <IoMdArrowDropdown size={20} className=" mt-1" />
                        </li>
                        <li className="flex items-center gap-2">
                            <Link href="#">Resources</Link>
                            <IoMdArrowDropdown size={20} className=" mt-1" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavbarBottom;
