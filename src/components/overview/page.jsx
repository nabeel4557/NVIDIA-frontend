import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function Overview({ slug }) {
    const [activeTab, setActiveTab] = useState("Overview");

    const [activeFaq, setActiveFaq] = useState();

    return (
        <div className="w-full bg-[#fff] text-[#000] py-[75px]  max-[540px]:h-auto">
            <div className="wrapper">
                <div className="w-full  py-[30px] justify-between max-[1280px]:w-[88%] max-[1280px]:mx-auto max-[1080px]:w-full max-[980px]:w-[75%] max-[768px]:w-[95%]  max-[540px]:">
                    <div className="left w-[55%] max-[980px]:w-auto">
                        <nav className="w-[80%] border-b-2 border-[#EEEEEE] max-[1280px]:w-[90%] max-[980px]:w-full">
                            <ul className="flex items-center w-full gap-5">
                                {slug?.titles?.map((tab, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => setActiveTab(tab)}
                                            className={`text-[18px] ${
                                                activeTab == tab
                                                    ? "font-bold border-b-2 border-[#76B900]"
                                                    : ""
                                            }`}>
                                            {tab}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div>
                        {activeTab == "Overview" && (
                            <div className="flex  w-full gap-[100px] max-[640px]:block">
                                <div className="w-[60%] py-6 max-[640px]:w-[100%]">
                                    <>
                                        <h3 className="text-[36px] font-bold leading-10 max-[1280px]:text-[28px] max-[980px]:text-[24px] max-[768px]:leading-7">
                                            {slug?.Overview?.title}
                                        </h3>

                                        {slug?.Overview?.content.map(
                                            (paragraph) => (
                                                <div className="mt-5">
                                                    <p className=" text-[#1A1A1A] max-[1280px]:text-[15px]">
                                                        {paragraph}
                                                    </p>
                                                </div>
                                            )
                                        )}

                                        <div>
                                            {slug?.Overview?.points?.map(
                                                (points) => (
                                                    <div className="flex gap-2 my-2">
                                                        <b className="">
                                                            {">"}
                                                        </b>
                                                        <p>{points}</p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </>
                                </div>
                                <div className=" w-[38%] relative max-[1080px]:w-[35%] max-[980px]:w-[40%] max-[640px]:w-[100%] ">
                                    <div className=" right w-full  absolute top-[35px]  max-[640px]:w-[100%] ">
                                        <p className="text-[#1A1A1A] text-[15px]">
                                            Quick Links
                                        </p>
                                        <div className="w-full mt-[20px] justify-end">
                                            {slug?.Overview?.quickLink.map(
                                                (link) => (
                                                    <Link
                                                        href={"/"}
                                                        className="flex items-center mb-6">
                                                        <p className="w-auto text-[14px] font-bold  left-0  cursor-pointer max-[1280px]:text-[14px]">
                                                            {link}
                                                            <span>
                                                                <MdKeyboardArrowRight
                                                                    color="#76B900"
                                                                    size={22}
                                                                    className=" justify-start items-end inline-flex"
                                                                />
                                                            </span>
                                                        </p>
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab == "Technical Implementation" && (
                            <div className="flex  w-full gap-[100px]  max-[640px]:block">
                                <div className="w-[60%] py-6 max-[640px]:w-[100%]">
                                    <>
                                        <h3 className="text-[36px] font-bold leading-10 max-[1280px]:text-[28px] max-[980px]:text-[24px]">
                                            {slug?.Technical?.title}
                                        </h3>

                                        {slug?.Technical?.content.map(
                                            (paragraph) => (
                                                <div className="mt-5">
                                                    <p className=" text-[#1A1A1A] max-[1280px]:text-[15px]">
                                                        {paragraph}
                                                    </p>
                                                </div>
                                            )
                                        )}

                                        <div>
                                            {slug?.Technical?.contentPoints?.map(
                                                (point, index) => (
                                                    <div className="flex my-5">
                                                        <h3 className="mr-1 font-medium">
                                                            {index + 1}.
                                                        </h3>
                                                        <p>
                                                            <b>{point.title}</b>
                                                            {point.content}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </>
                                </div>
                                <div className=" w-[38%]  relative  max-[1080px]:w-[35%] max-[980px]:w-[40%]  max-[640px]:w-full">
                                    <div className=" right w-full  absolute top-[35px]  max-[540px]:w-[100%]">
                                        <p className="text-[#1A1A1A] text-[15px] ">
                                            Quick Links
                                        </p>
                                        <div className="w-full mt-[20px] justify-end">
                                            {slug?.Technical?.quickLink?.map(
                                                (link) => (
                                                    <Link
                                                        href={"/"}
                                                        className="flex items-center mb-6">
                                                        <p className="w-auto text-[14px] font-bold  left-0  cursor-pointer max-[1280px]:text-[14px]">
                                                            {link}
                                                            <span>
                                                                <MdKeyboardArrowRight
                                                                    color="#76B900"
                                                                    size={22}
                                                                    className=" justify-start items-end inline-flex"
                                                                />
                                                            </span>
                                                        </p>
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab == "FAQ" && (
                            <div className="flex  w-full gap-[100px]  max-[640px]:block">
                                <div className="w-[60%] py-6  max-[640px]:w-full">
                                    {slug?.faq?.main.map((item, index) => (
                                        <div className="">
                                            <button
                                                onClick={() => {
                                                    if (activeFaq != index) {
                                                        setActiveFaq(index);
                                                    } else {
                                                        setActiveFaq();
                                                    }
                                                }}
                                                className="flex items-center justify-between w-full border-t-2  border-[#EEEEEE]">
                                                <h3 className=" py-[17px] max-[980px]:py-[13px] text-[20px] text-left font-bold leading-10 max-[1280px]:text-[18px] max-[980px]:text-[16px] max-[980px]:w-[90%]">
                                                    {item?.title}
                                                </h3>
                                                <span className="text-[30px] max-[980px]:text-[20px]">
                                                    <IoIosArrowDown />
                                                </span>
                                            </button>
                                            {activeFaq == index && (
                                                <div>
                                                    <div className="mt-5">
                                                        <p className=" text-[#1A1A1A] max-[1280px]:text-[15px]">
                                                            {item.content}
                                                        </p>
                                                    </div>

                                                    {item?.points?.map(
                                                        (point) => (
                                                            <div>
                                                                <div className="flex my-5">
                                                                    <p>
                                                                        <b>
                                                                            {
                                                                                "> "
                                                                            }
                                                                            {
                                                                                point?.title
                                                                            }
                                                                        </b>{" "}
                                                                        {
                                                                            point?.content
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className=" w-[38%]  relative  max-[1080px]:w-[35%] max-[980px]:w-[40%]  max-[640px]:w-full">
                                    <div className=" right w-full  absolute top-[35px] max-[640px]:w-full">
                                        <p className="text-[#1A1A1A] text-[15px] ">
                                            Quick Links
                                        </p>
                                        <div className="w-full mt-[20px] justify-end">
                                            {slug?.faq?.quickLink.map(
                                                (link) => (
                                                    <Link
                                                        href={"/"}
                                                        className="flex items-center mb-6">
                                                        <p className="w-auto text-[14px] font-bold  left-0  cursor-pointer max-[1280px]:text-[14px]">
                                                            {link}
                                                            <span>
                                                                <MdKeyboardArrowRight
                                                                    color="#76B900"
                                                                    size={22}
                                                                    className=" justify-start items-end inline-flex"
                                                                />
                                                            </span>
                                                        </p>
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
