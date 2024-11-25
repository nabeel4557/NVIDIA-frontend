// import Link from "next/link";
// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";

// function Navbar3() {
//     const navbarTitles = [
//         { titles: "Models", id: "#models" },
//         { titles: "Integrations", id: "#integrations" },
//         { titles: "Run Anywhere", id: "#run" },
//         { titles: "Get Started", id: "#get-started" },
//         { titles: "Use Cases", id: "#case" },
//         { titles: "Ecosystem", id: "#ecosystem" },
//         { titles: "Resources", id: "#resources" },
//         { titles: "Docs", id: "#documentation" },
//     ];

//     const [toggle, setToggle] = useState(false);
//     const [activeLink, setActiveLink] = useState("");

//     const toggledropdown = () => {
//         setToggle(!toggle);
//     };

//     const handleClick = (link) => {
//         setActiveLink(link);
//     };

//     return (
//         <div className="bg-[#1A1A1A] sticky top-[90px] py-2 max-[360px]:w-full">
//             {toggle && (
//                 <div className="hidden max-[540px]:block max-[640px]:w-full bg-[#333333] absolute top-[60px] leading-9 z-50">
//                     <ul className="wrapper">
//                         {navbarTitles.map((item, index) => (
//                             <li key={index} className="py-2 px-4 text-white">
//                                 <Link
//                                     href={item.id}
//                                     scroll={true}
//                                     onClick={() => {
//                                         handleClick(item.id);
//                                         toggledropdown();
//                                     }}>
//                                     {item.titles}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}

//             <div className="wrapper flex items-center justify-between w-full h-[60px]">
                
//                 <div className="hidden max-[640px]:block relative">
//                     <div
//                         className="flex items-center gap-3"
//                         onClick={toggledropdown}>
//                         <span className="text-[#fff]">Models</span>
//                         <IoIosArrowDown />
//                     </div>
//                 </div>

                
//                 <div className="flex items-center">
//                     <ul className="text-[#EEEEEE] flex items-center gap-5 text-[15px]">
//                         {navbarTitles.map((item, index) => (
//                             <li key={index} className="max-[640px]:hidden">
//                                 <Link
//                                     href={item.id}
//                                     scroll={true}
//                                     className={`${
//                                         activeLink === item.id
//                                             ? "border-b-2 border-[#76b900] pb-1"
//                                             : ""
//                                     }`}
//                                     onClick={() => handleClick(item.id)}>
//                                     {item.titles}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

                
//                 <div>
//                     <button className="text-black bg-[#76b900] text-[18px] py-[13px] px-[15px] border-none font-bold">
//                         Try Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar3;



import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

function Navbar3({ currentSection }) {
    const navbarTitles = [
        { title: "Models", id: "#models", navid: "#tab1" },
        { title: "Integrations", id: "#integrations", navid: "#tab2" },
        { title: "Run Anywhere", id: "#run", navid: "#tab3" },
        { title: "Get Started", id: "#get", navid: "#tab4" },
        { title: "Use Cases", id: "#case", navid: "#tab5" },
        { title: "Ecosystem", id: "#ecosystem", navid: "#tab6" },
        { title: "Resources", id: "#resources", navid: "#tab7" },
        { title: "Docs", id: "#documentation", navid: "#tab8" },
    ];

    console.log(currentSection, "sectionnnnhellooooo");

    const [isSticky, setIsSticky] = useState(false);
    const navbarRef = useRef(null);
    const [activeItem, setActiveItem] = useState(0);
    const itemRefs = useRef([]);
    const sectionRefs = useRef([]);
    const [isNavbarTopVisible, setIsNavbarTopVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeItemWidth, setActiveItemWidth] = useState(0);
    const [activeItemLeft, setActiveItemLeft] = useState(0);

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

    useEffect(() => {
        const updateActiveItemPosition = () => {
            const activeItemElement = itemRefs.current[activeItem];
            if (activeItemElement) {
                setActiveItemWidth(activeItemElement.offsetWidth);
                setActiveItemLeft(activeItemElement.offsetLeft);
            }
        };

        updateActiveItemPosition();

        window.addEventListener("resize", updateActiveItemPosition);
        return () => {
            window.removeEventListener("resize", updateActiveItemPosition);
        };
    }, [activeItem]);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionRefs.current.findIndex(
                        (ref) => ref && ref.id === entry.target.id
                    );
                    if (index !== -1) {
                        setActiveItem(index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: .6,
        });

        sectionRefs?.current?.forEach((ref) => {
            if (ref) observer?.observe(ref);
        });

        return () => {
            sectionRefs?.current?.forEach((ref) => {
                if (ref) observer?.unobserve(ref);
            });
        };
    }, []);

    useEffect(() => {
        const handleObserver = (entries) => {
            const [entry] = entries;
            setIsSticky(!entry.isIntersecting);
        };

        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            threshold: .6,
            rootMargin: isNavbarTopVisible
                ? "-110px 0px 0px 0px"
                : "-74px 0px 0px 0px",
        });

        if (navbarRef.current) {
            observer.observe(navbarRef.current);
        }

        return () => {
            if (navbarRef.current) {
                observer.unobserve(navbarRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const index = navbarTitles.findIndex(
            (item) => item.id === `#${currentSection}`
        );
        if (index !== -1) {
            setActiveItem(index);
        }
    }, [currentSection]);

    return (
        <div>
            <div ref={navbarRef} className="h-[1px]"></div>

            <div
                className={`bg-[#1A1A1A] py-2 z-40 ${
                    isSticky ? "fixed  left-0 w-full" : "top-[74px]relative"
                } transition-all duration-300 ${
                    isNavbarTopVisible
                        ? "navbar top-[110px]"
                        : "navbar top-[74px]"
                }`}>
                
                
                

                <div className="wrapper flex items-center justify-between w-full h-[60px] max-[640px]:h-auto max-[1280px]:w-[980px] max-[1080px]:w-[700px] max-[980px]:w-[700px] max-[786px]:w-[600px] max-[640px]:w-[500px] max-[540px]:w-[480px] max-[480px]:w-full  max-[480px]:px-[10px]">
                    <ul className="text-[#EEEEEE] flex items-center gap-5 text-[15px] relative">
                        <div
                            className="absolute -bottom-[15px] left-0 h-[2px] bg-[#76b900] transition-all duration-300 ease-in-out"
                            style={{
                                width: activeItemWidth,
                                transform: `translateX(${activeItemLeft}px)`,
                            }}
                        />
                        {navbarTitles.map((item, index) => (
                            <li
                                id={item.navid}
                                key={index}
                                ref={(el) => (itemRefs.current[index] = el)}
                                className="flex  max-[640px]:hidden relative">
                                <Link
                                    href={item.id}
                                    scroll={true}
                                    className={`p-2 transition-all duration-300 ease-in-out `}
                                    onClick={() => setActiveItem(index)}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button className="text-black bg-[#76b900] text-[18px] py-[13px] px-[15px] border-none font-bold  max-[1280px]:py-[11px] max-[1280px]:px-[13px] max-[1280px]:text-[15px]  max-[640px]:py-[9px] max-[640px]:px-[10px]">
                            Try Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar3;
``;
