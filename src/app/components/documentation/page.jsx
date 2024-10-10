import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Documentation() {
    return (
        <div className="w-full bg-[#1A1A1A] text-[#EEEEEE] py-[75px]">
            <div className="wrapper">
                <h2 className="text-[36px] font-bold text-center">
                    Documentation
                </h2>
                <p className="text-[22px] text-center mt-[20px]">
                    Documentation Explore technical documentation to start
                    prototyping and building your enterprise AI applications
                    with NVIDIA APIs, or scale on your own infrastructure with
                    NVIDIA NIM.
                </p>
                <div className="flex items-center justify-center mt-[30px]">
                    <button className="py-[11px] px-[13px] border-[2px] border-[#768900] text-[18px] font-bold ">
                        NVIDIA API Docs
                    </button>
                    <button className="flex items-center text-[18px] font-bold py-[11px] px-[13px] gap-2">
                        NVIDIA NIM Docs
                        <MdKeyboardArrowRight size={30} color="#768900" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Documentation;
