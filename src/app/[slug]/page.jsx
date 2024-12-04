"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import NavbarTop from "../../components/includes/navbar/NavbarTop";
import DetailsGrid from "../../components/details-grid/page";
import Overview from "../../components/overview/page";
import Action from "../../components/action/page";
import { Helmet } from "react-helmet";
import { dynamicData } from "../../utilities/StaticString";

function UseCasesPage() {
    const [isNavbarTopVisible, setIsNavbarTopVisible] = useState(true);
    const params = useParams();

    console.log("paramsss", params.slug);
    const slug = params?.slug;

    return (
        <>
            <Helmet>
                <title>{dynamicData?.[slug].title}</title>
            </Helmet>
            <div className="w-full">
                <div
                    className={`z-50 bg-black w-full fixed left-0 transition-all duration-300 ${
                        isNavbarTopVisible ? "top-0" : "-top-[43.5px]"
                    }`}>
                    <NavbarTop />
                    <header className="px-[68px] w-full bg-[#000] h-[66px] max-[980px]:h-[46px] fixed  z-40">
                        <h2 className="text-[28px] max-[1080px]:text-[24px] max-[980px]:text-[20px] max-[1080px]:pt- font-bold flex items-center pt-[10px] text-white">
                            Use Cases
                        </h2>
                    </header>
                </div>

                <div className="w-full mt-[120px] bg-[#fff] text-[#000]">
                    <div
                        className="bg-no-repeat bg-center h-[700px] max-[980px]:h-[550px] flex items-center justify-center"
                        style={{
                            backgroundImage: `url(${dynamicData?.[slug]?.bgImage})`,
                            backgroundSize: "cover",
                        }}>
                        <div className="w-[47%] absolute left-0 pl-[50px]  max-[1280px]:left-24 max-[1080px]:left-0 max-[1080px]:w-[42%] max-[980px]:w-[38%] max-[768px]:w-[46%] max-[640px]:w-[100%] max-[640px]:top-40 max-[980px]:left-24 max-[768px]:left-0">
                            <h1 className="text-[#000] text-[48px] font-bold max-[1280px]:text-[36px] max-[980px]:text-[28px]">
                                {dynamicData?.[slug]?.title}
                            </h1>
                            <p className="text-[#1A1A1A] text-[22px] py-[10px] max-[1280px]:text-[20px] max-[980px]:text-[18px]">
                                {dynamicData?.[slug]?.subTitle}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <DetailsGrid slug={dynamicData?.[slug]} />
                </div>
                <div>
                    <Overview slug={dynamicData?.[slug]?.mainSection} />
                </div>
                <div>
                    <Action />
                </div>
            </div>
        </>
    );
}

export default UseCasesPage;
