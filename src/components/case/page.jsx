import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Case() {
    return (
        <div className="w-full bg-[#EEEEEE] text-[#000] py-[75px] max-[540px]:w-full">
            <div className="wrapper max-[1280px]:w-[80%] max-[1080px]:w-[90%] max-[786px]:w-[80%] max-[640px]:w-[90%] max-[540px]:w-full max-[540px]:px-[10px] ">
                <h5 className=" text-center text-[#1A1A1A] text-[20px] font-bold max-[1280px]:text-[18px]">
                    Use Cases
                </h5>
                <h2 className=" text-center text-[36px] font-bold max-[1280px]:text-[28px]">
                    Ignite Your Innovation
                </h2>
                <p className=" text-center text-[15px] text-[#1A1A1A] mt-[10px]">
                    See how NVIDIA APIs support industry use cases and
                    jump-start your AI development with curated examples.
                </p>

                <div className="flex  items-center mt-[40px] gap-5 max-[1080px]:w-full max-[1080px]:mx-auto max-[980px]:flex-wrap max-[980px]:w-full max-[980px]:justify-center max-[786px]:w-full max-[640px]:w-[90%] max-[540px]:w-full">
                    <div className="w-1/3 bg-[#fff] h-[530px] relative pb-[30px] shadow-lg max-[1080px]:w-[32%] max-[980px]:w-[35%] max-[786px]:w-[280px] max-[640px]:w-[500px] max-[540px]:w-full">
                        <div className="w-full max-[640px]:w-[500px] max-[540px]:w-full ">
                            <img
                                className="max-[640px]:w-full max-[540px]:w-full"
                                src="/images/img7.jpeg"
                            />
                        </div>
                        <div className="my-[30px] px-[20px] max-[540px]:w-full ">
                            <h3 className="text-[24px] font-bold max-[1280px]:text-[20px]">
                                Digital Humans
                            </h3>
                            <p className="text-[15px] text-[#1A1A1A] mt-[30px]">
                                Bring game characters to life or create
                                interactive virtual avatars to enhance customer
                                service, empowering your application to connect
                                more deeply with users.
                            </p>
                            <h6 className="flex items-center text-[18px] font-bold absolute bottom-[30px] z-10 max-[1280px]:text-[16px] ">
                                Learn More
                                <MdKeyboardArrowRight
                                    size={30}
                                    color="#768900"
                                    className="max-[1280px]:size-[24px]"
                                />
                            </h6>
                        </div>
                    </div>
                    <div className="w-1/3 bg-[#fff] h-[530px] relative pb-[30px] shadow-lg max-[1080px]:w-[32%]  max-[980px]:w-[35%] max-[786px]:w-[280px] max-[640px]:w-[500px] max-[540px]:w-full">
                        <div className="w-full max-[640px]:w-[500px] max-[540px]:w-full">
                            <img
                                className="max-[640px]:w-full max-[540px]:w-full"
                                src="/images/img8.jpeg"
                            />
                        </div>
                        <div className="my-[30px] px-[20px]">
                            <h3 className="text-[24px] font-bold max-[1280px]:text-[20px]">
                                Content Generation
                            </h3>
                            <p className="text-[15px] text-[#1A1A1A] mt-[30px]">
                                Generate highly relevant, bespoke, and accurate
                                content, grounded in the domain expertise and
                                proprietary IP of your enterprise.
                            </p>
                            <h6 className="flex items-center text-[18px] font-bold absolute bottom-[30px] z-10 max-[1280px]:text-[16px]">
                                Learn More
                                <MdKeyboardArrowRight
                                    size={30}
                                    color="#768900"
                                    className="max-[1280px]:size-[24px]"
                                />
                            </h6>
                        </div>
                    </div>
                    <div className="w-1/3 bg-[#fff] h-[530px] relative pb-[30px] shadow-lg max-[1080px]:w-[32%]  max-[980px]:w-[35%]  max-[786px]:w-[47%]  max-[640px]:w-[100%] max-[540px]:w-full">
                        <div className="w-full max-[640px]:w-[500px] max-[540px]:w-full">
                            <img
                                className="max-[640px]:w-full max-[540px]:w-full"
                                src="/images/img9.jpeg"
                            />
                        </div>
                        <div className="my-[30px] px-[20px] max-[540px]:w-full">
                            <h3 className="text-[24px] font-bold max-[1280px]:text-[20px]">
                                Biomolecular Generation
                            </h3>
                            <p className="text-[15px] text-[#1A1A1A] mt-[30px]">
                                Biomolecular generative models and the
                                computational power of GPUs efficiently explore
                                the chemical space, rapidly generating diverse
                                sets of small molecules tailored to specific
                                drug targets or properties.
                            </p>
                            <h6 className="flex items-center text-[18px] font-bold absolute bottom-[30px] z-10 max-[1280px]:text-[16px]">
                                Learn More
                                <MdKeyboardArrowRight
                                    size={30}
                                    color="#768900"
                                    className="max-[1280px]:size-[24px]"
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
