import React from "react";

function Ecosystem() {
    return (
        <div className="w-full bg-[#fff] py-[75px] ">
            <div className="w-full max-[1280px]:w-[980px] max-[1280px]:mx-auto max-[1080px]:w-[700px] max-[1080px]:mx-auto">
                <h6 className="text-[20px] font-bold text-[#1A1A1A] text-center max-[1280px]:text-[18px]">
                    Ecosystem
                </h6>
                <h2 className="text-[36px] font-bold text-[#000] text-center mt-[20px] max-[1280px]:text-[28px]">
                    Take Your Enterprise AI Farther, Faster
                </h2>
                <p className="text-[15px] text-[#1A1A1A] text-center mt-[15px] max-[1280px]:text-center">
                    Join leading partners to develop your AI applications with
                    models, toolkits, vector databases, frameworks, and
                    infrastructure from our ecosystem.
                </p>
            </div>
            <div className="w-full  mt-[10px]">
                <div className="w-[100%] h-[120px] ">
                    <img
                        className="w-full h-full object-cover"
                        src="images/img10.png"
                        alt="logos"
                    />
                </div>

                <div className="w-[full] h-[120px]">
                    <img
                        className="w-full h-full object-cover"
                        src="images/img11.png"
                        alt="logos"
                    />
                </div>
            </div>
        </div>
    );
}

export default Ecosystem;
