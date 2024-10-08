import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Case() {
    return (
        <div className="w-full bg-[#EEEEEE] text-[#000] py-[75px]">
            <div className="wrapper ">
                <h5 className=" text-center text-[#1A1A1A] text-[20px] font-bold">
                    Use Cases
                </h5>
                <h2 className=" text-center text-[36px] font-bold">
                    Ignite Your Innovation
                </h2>
                <p className=" text-center text-[15px] text-[#1A1A1A]">
                    See how NVIDIA APIs support industry use cases and
                    jump-start your AI development with curated examples.
                </p>

                <div className="flex items-center mt-[40px] gap-5 ">
                    <div className="w-1/3 bg-[#fff] h-[530px] relative pb-[30px] shadow-lg">
                        <div className="w-full ">
                            <img src="/images/img7.jpeg" />
                        </div>
                        <div className="my-[30px] px-[20px] ">
                            <h3 className="text-[24px] font-bold">
                                Digital Humans
                            </h3>
                            <p className="text-[15px] text-[#1A1A1A] mt-[30px]">
                                Bring game characters to life or create
                                interactive virtual avatars to enhance customer
                                service, empowering your application to connect
                                more deeply with users.
                            </p>
                            <h6 className="flex items-center text-[18px] font-bold absolute bottom-[30px] z-10 ">
                                Learn More
                                <MdKeyboardArrowRight
                                    size={30}
                                    color="#768900"
                                />
                            </h6>
                        </div>
                    </div>
                    <div className="w-1/3 bg-[#fff] h-[530px] relative pb-[30px] shadow-lg">
                        <div className="w-full">
                            <img src="/images/img8.jpeg" />
                        </div>
                        <div className="my-[30px] px-[20px]">
                            <h3 className="text-[24px] font-bold">
                                Content Generation
                            </h3>
                            <p className="text-[15px] text-[#1A1A1A] mt-[30px]">
                                Generate highly relevant, bespoke, and accurate
                                content, grounded in the domain expertise and
                                proprietary IP of your enterprise.
                            </p>
                            <h6 className="flex items-center text-[18px] font-bold absolute bottom-[30px] z-10">
                                Learn More
                                <MdKeyboardArrowRight
                                    size={30}
                                    color="#768900"
                                />
                            </h6>
                        </div>
                    </div>
                    <div className="w-1/3 bg-[#fff] h-[530px] relative pb-[30px] shadow-lg">
                        <div className="w-full">
                            <img src="/images/img9.jpeg" />
                        </div>
                        <div className="my-[30px] px-[20px]">
                            <h3 className="text-[24px] font-bold">
                                Biomolecular Generation
                            </h3>
                            <p className="text-[15px] text-[#1A1A1A] mt-[30px]">
                                Biomolecular generative models and the
                                computational power of GPUs efficiently explore
                                the chemical space, rapidly generating diverse
                                sets of small molecules tailored to specific
                                drug targets or properties.
                            </p>
                            <h6 className="flex items-center text-[18px] font-bold absolute bottom-[30px] z-10">
                                Learn More
                                <MdKeyboardArrowRight
                                    size={30}
                                    color="#768900"
                                />
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Case;
