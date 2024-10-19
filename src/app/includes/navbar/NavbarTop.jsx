import Link from "next/link";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdSearch } from "react-icons/md";

function NavbarTop() {
    return (
        <div className="bg-[#fff] sticky top-0  max-[540px]:w-full">
            <div className="wrapper flex items-center justify-between max-[540px]:w-full">
                <div className="left w-[250px] flex items-center ">
                    <h1 className="w-[120px]">
                        <Link href="/">
                            <img src="/images/Logo.jpeg" alt="logo" />
                        </Link>
                    </h1>
                    <span>
                        <RiArrowRightSLine size={22} color="#000 " />
                    </span>
                    <span className="text-[#000]">MainMenu</span>
                </div>
                <div className="right max-[540px]:hidden">
                    <ul className="flex items-center text-[#666666] gap-4">
                        <li>
                            <Link href="#">Shop</Link>
                        </li>
                        <li>
                            <Link href="#">Drivers</Link>
                        </li>
                        <li>
                            <Link href="#">Support</Link>
                        </li>
                        <li>
                            <Link href="#">
                                <MdSearch size={22} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavbarTop;
