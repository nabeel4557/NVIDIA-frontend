"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import DetailsGrid from "../../_components/DetailsGrid";
import Overview from "../../_components/Overview";
import Action from "../../_components/Action";
import { Helmet } from "react-helmet";
import { dynamicData } from "../../../utilities/StaticString";

function UseCasesPage() {
    const [isNavbarTopVisible, setIsNavbarTopVisible] = useState(true);
    const params = useParams();

    const slug = params?.slug;

    return (
        <>
            <Helmet>
                <title>{dynamicData?.[slug]?.title}</title>
            </Helmet>
            <div className="w-full max-[640px]:pt-[100px]">
                <div className="w-full  bg-[#fff] text-[#000]">
                    <div>
                        <div
                            className="bg-no-repeat bg-center h-[700px] max-[980px]:h-[550px] flex items-center justify-center max-[640px]:hidden"
                            style={{
                                backgroundImage: `url(${dynamicData?.[slug]?.bgImage})`,
                                backgroundSize: "cover",
                            }}>
                            <div className="w-[47%] absolute left-0 pl-[50px] max-[1280px]:left-24 max-[1080px]:left-0 max-[1080px]:w-[42%] max-[980px]:w-[38%] max-[768px]:w-[46%] max-[640px]:w-[100%] max-[640px]:top-40 max-[980px]:left-24 max-[768px]:left-0">
                                <h1
                                    className={`text-[48px] font-bold max-[1280px]:text-[36px] max-[980px]:text-[28px] ${
                                        slug == 1 || slug == 2
                                            ? "text-white"
                                            : "text-[#000]"
                                    }`}>
                                    {dynamicData?.[slug]?.title}
                                </h1>
                                <p
                                    className={`text-[22px] py-[10px] max-[1280px]:text-[20px] max-[980px]:text-[18px] ${
                                        slug == 1 || slug == 2
                                            ? "text-white"
                                            : "text-[#1A1A1A]"
                                    }`}>
                                    {dynamicData?.[slug]?.subTitle}
                                </p>
                            </div>
                        </div>

                        <div
                            className="w-full bg-no-repeat bg-bottom h-[500px] flex items-center justify-center hidden max-[640px]:block relative"
                            style={{
                                backgroundImage: `url(${dynamicData?.[slug]?.bgImageMob})`,
                                backgroundSize: "cover",
                            }}>
                            <div className="left-10 w-[90%] text-center mx-auto absolute top-[25px] ">
                                <h1
                                    className={`text-[36px] font-bold max-[980px]:text-[28px] text-left ${
                                        slug == 1 || slug == 2
                                            ? "text-white"
                                            : "text-[#000]"
                                    }`}>
                                    {dynamicData?.[slug]?.title}
                                </h1>
                                <p
                                    className={`text-[20px] py-[10px] max-[980px]:text-[18px] text-left ${
                                        slug == 1 || slug == 2
                                            ? "text-white"
                                            : "text-[#1A1A1A]"
                                    }`}>
                                    {dynamicData?.[slug]?.subTitle}
                                </p>
                            </div>
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
