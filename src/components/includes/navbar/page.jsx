// import React from "react";
// import NavbarTop from "./NavbarTop";
// import NavbarBottom from "./NavbarBottom";

// function Navbar() {
//     return (
//         <div className="">
//             <NavbarTop />
//             <NavbarBottom />
//         </div>
//     );
// }

// export default Navbar;


"use client";
import React, { useEffect, useState } from "react";
import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";

function Navbar() {
    const [isNavbarTopVisible, setIsNavbarTopVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 43.5) {
            setIsNavbarTopVisible(false);
        } else {
            setIsNavbarTopVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`z-50 bg-black w-full fixed left-0  navbar ${
                isNavbarTopVisible ? "top-0" : " -top-[43.5px]"
            }`}>
            <div>
                <NavbarTop />
            </div>

            <div>
                <NavbarBottom />
            </div>
        </div>
    );
}

export default Navbar;

