import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Documentation() {
    return (
        <div className="w-full bg-[#1A1A1A] text-[#EEEEEE] py-[75px]">
            <div className="wrapper">
                <div className="w-full max-[1280px]:w-[980px] max-[1280px]:mx-auto max-[1080px]:w-[700px] max-[1080px]:mx-auto max-[786px]:w-[600px] max-[640px]:w-[500px] max-[540px]:w-full">
                    <h2 className="text-[36px] font-bold text-center max-[1280px]:text-[28px] max-[1080px]:text-[24px]">
                        Documentation
                    </h2>
                    <p className="text-[22px] text-center mt-[20px] max-[1280px]:text-[20px] max-[1080px]:text-[18px]">
                        Documentation Explore technical documentation to start
                        prototyping and building your enterprise AI applications
                        with NVIDIA APIs, or scale on your own infrastructure
                        with NVIDIA NIM.
                    </p>
                </div>
                <div className="flex items-center justify-center mt-[30px] max-[1280px]:text-[16px] max-[360px]:gap-2">
                    <button className="py-[11px] px-[13px] border-[2px] border-[#768900] text-[18px] font-bold max-[1280px]:text-[16px] max-[1280px]:py-[9px] max-[1280px]:px-[11px] max-[360px]:text-[12px] max-[1080px]:text-[14px] max-[1080px]:py-[7px] max-[1080px]:px-[10px]">
                        NVIDIA API Docs
                    </button>
                    <button className="flex items-center text-[18px] font-bold py-[11px] px-[13px] max-[360px]:py-0 max-[360px]:px-0  max-[360px]:text-[12px] gap-2 max-[1280px]:text-[16px] max-[1080px]:text-[14px]">
                        NVIDIA NIM Docs
                        <MdKeyboardArrowRight
                            size={30}
                            color="#768900"
                            className="max-[1280px]:size-[24px]"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Documentation;
