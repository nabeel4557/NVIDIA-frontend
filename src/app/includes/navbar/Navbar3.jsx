import Link from "next/link";
import React from "react";

function Navbar3() {
    return (
        <div className="bg-[#333]">
            <div>
                <ul className="text-[#fff]">
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
        </div>
    );  

}


export default Navbar3;
