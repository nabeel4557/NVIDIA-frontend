import React from "react";

function Action() {
    return (
        <div className="w-full bg-[#EEEEEE] py-[75px]">
            <div className="wrapper">
                <div className="w-[63%] mx-auto">
                    <h2 className="text-[36px] font-bold text-[#000] text-center max-[1280px]:text-[28px]">
                        Get Started
                    </h2>
                    <p className="text-[16px] text-[#1A1A1A] text-center my-[10px] max-[1280px]:text-[15px]">
                        Top game and digital human developers are pioneering
                        ways ACE and generative AI technologies can be used to
                        transform interactions between players and NPCs in games
                        and applications. Learn more about NVIDIA ACE, future
                        developments, and early access programs.
                    </p>
                    <span className="block pt-[10px]">
                        <button className="bg-[#76B900] py-[12px] px-[15px] text-[18px] font-bold text-[#000] flex mx-auto max-[1280px]:text-[16px] max-[1280px]:py-[11px] max-[1280px]:px-[13px]">
                            Try Now
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Action;
