import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

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
    const [isDropActive, setDropActive] = useState(false);

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
            threshold: 0.6,
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
            threshold: 0.6,
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
        <div className="">
            <div ref={navbarRef} className="h-[1px]"></div>

            <div
                className={`bg-[#1A1A1A] py-2 z-40 ${
                    isSticky ? "fixed  left-0 w-full" : "top-[74px]relative "
                } transition-all duration-300 ${
                    isNavbarTopVisible
                        ? "navbar top-[110px] max-[1080px]:top-[105px]"
                        : "navbar top-[74px] max-[1080px]:top-[62px]"
                }`}>
                <div className="wrapper">
                    <div className="box-border flex items-center justify-between w-full h-[60px] max-[1080px]:h-[48px] max-[640px]:h-auto max-[1280px]:w-full  max-[980px]:w-[700px] max-[786px]:w-[600px] max-[640px]:w-[500px] max-[540px]:w-[480px] max-[480px]:w-full  max-[480px]:px-[10px] max-[980px]:relative">
                        <ul className="text-[#EEEEEE] flex items-center gap-5 text-[15px] relative max-[1080px]:hidden">
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
                                    className="flex   relative">
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
                        <div className="hidden max-[1080px]:block  ">
                            <button
                                onClick={() => setDropActive(!isDropActive)}
                                className="flex gap-1  ">
                                <h3 className="">
                                    {navbarTitles?.[activeItem].title}
                                </h3>
                                <span
                                    className={`transform transition-all duration-300 ease-in-out ${
                                        isDropActive
                                            ? "rotate-[270deg]"
                                            : "rotate-[90deg]"
                                    }`}>
                                    <MdKeyboardArrowRight
                                        size={24}
                                        color={"white"}
                                        className={`justify-start items-end inline-flex   `}
                                    />
                                </span>
                            </button>
                        </div>
                        <div className="flex justify-end items-center">
                            <button className=" flex text-black bg-[#76b900] text-[18px] py-[13px] px-[15px] border-none font-bold  max-[1280px]:py-[11px] max-[1280px]:px-[13px] max-[1280px]:text-[15px]  max-[640px]:py-[9px] max-[640px]:px-[10px]  ">
                                Try Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="">
                    {
                        <ul className=" width-full bg-[#333] px-7 mt-2  ">
                            {isDropActive &&
                                navbarTitles.map((item, index) => (
                                    <li
                                        id={item.navid}
                                        key={index}
                                        ref={(el) =>
                                            (itemRefs.current[index] = el)
                                        }
                                        className="flex   relative">
                                        <Link
                                            href={item.id}
                                            scroll={true}
                                            className={`${
                                                index == activeItem &&
                                                "text-[#76b900]"
                                            } p-2 transition-all duration-300 ease-in-out `}
                                            onClick={() => {
                                                setActiveItem(index);
                                                setDropActive(false);
                                            }}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar3;
``;
