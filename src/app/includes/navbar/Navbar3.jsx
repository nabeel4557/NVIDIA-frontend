import Link from "next/link";
import React from "react";

function Navbar3() {
    return (
        <div className="bg-[#1A1A1A] sticky top[90px] py-2">
            <div className="wrapper flex items-center justify-between w-full h-[60px] ">
                <div className="flex items-center">
                    <ul className="text-[#EEEEEE] flex items-center gap-5 text-[15px]">
                        <li>
                            <Link href="#">Models</Link>
                        </li>
                        <li>
                            <Link href="#">Integrations</Link>
                        </li>
                        <li>
                            <Link href="#">Run Anywhere</Link>
                        </li>
                        <li>
                            <Link href="#">Get Started</Link>
                        </li>
                        <li>
                            <Link href="#">Use Cases</Link>
                        </li>
                        <li>
                            <Link href="#">Ecosystem</Link>
                        </li>
                        <li>
                            <Link href="#">Resources</Link>
                        </li>
                        <li>
                            <Link href="#">Docs</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <buttton className="text-black bg-[#76b900] text-[18px] py-[13px] px-[15px] border-none font-bold">
                        Try Now
                    </buttton>
                </div>
            </div>
        </div>
    );
}

export default Navbar3;
