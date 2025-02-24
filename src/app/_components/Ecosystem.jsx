import React from "react";

function Ecosystem() {
    const ImageLoop = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="w-full bg-[#fff] py-[75px] max-[640px]:py-[40px] max-[540px]:w-full ">
            <div className="w-full max-[1280px]:w-[980px] max-[1280px]:mx-auto max-[1080px]:w-[700px] max-[1080px]:mx-auto max-[786px]:w-[600px] max-[640px]:w-[500px] max-[540px]:w-full">
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
            <div className="w-full flex flex-col gap-[10px] overflow-hidden ">
                <div className=" animate-marquee space-x-4 flex  ">
                    {[...ImageLoop, ...ImageLoop].map((item, index) => (
                        <div
                            key={index}
                            className="w-[100%] h-[120px] max-[640px]:h-[70px] flex-shrink-0 ">
                            <img
                                className="w-full h-full object-cover"
                                src="images/img10.png"
                                alt="logos"
                            />
                        </div>
                    ))}
                </div>
                <div className=" animate-marquee space-x-4 flex  ">
                    {[...ImageLoop, ...ImageLoop].map((item, index) => (
                        <div
                            key={index}
                            className="w-[full] h-[120px] max-[640px]:h-[70px] flex-shrink-0 ">
                            <img
                                className="w-full h-full object-cover"
                                src="images/img11.png"
                                alt="logos"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ecosystem;
