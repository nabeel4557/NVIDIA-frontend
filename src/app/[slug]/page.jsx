"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import NavbarTop from "../../components/includes/navbar/NavbarTop";
import DetailsGrid from '../../components/details-grid/page'
import Overview from '../../components/overview/page'
import Action from '../../components/action/page'
import { Helmet } from "react-helmet";

function UseCasesPage() {
    const [isNavbarTopVisible, setIsNavbarTopVisible] = useState(true);
    const params = useParams();
    const slug = params?.slug;

    return (
        <>
            <Helmet>
                <title></title>
            </Helmet>
            <div className="w-full">
                <div
                    className={`z-50 bg-black w-full fixed left-0 transition-all duration-300 ${
                        isNavbarTopVisible ? "top-0" : "-top-[43.5px]"
                    }`}>
                    <NavbarTop />
                    <header className="px-[70px] w-full bg-[#000] h-[66px] fixed  z-40">
                        <h2 className="text-[28px] font-bold flex items-center pt-[10px] text-white">
                            Use Cases
                        </h2>
                    </header>
                </div>

                <div className="w-full mt-[120px] bg-[#fff] text-[#000]">
                    <div
                        className="bg-no-repeat bg-center h-[700px] flex items-center justify-center"
                        style={{
                            backgroundImage: "url('/images/digitalHuman.jpg')",
                            backgroundSize: "cover",
                        }}>
                        <div className=" absolute left-0 pl-[50px] ">
                            <h1 className="text-[#000] text-[48px] font-bold">
                                Digital Humans
                            </h1>
                            <p className="text-[#1A1A1A] text-[22px] py-[10px]">
                                Bring digital avatars to life with generative
                                AI.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <DetailsGrid />
                </div>
                <div>
                    <Overview />
                </div>
                <div>
                    <Action />
                </div>
            </div>
        </>
    );
}

export default UseCasesPage;
