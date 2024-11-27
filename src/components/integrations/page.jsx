import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Integrations() {
    return (
        <div>
            <div className="wrapper max-[1280px]:w-[80%] max-[1080px]:w-[80%] max-[980px]:w-[70%] max-[980px]:mx-auto max-[786px]:w-[75%] max-[640px]:w-full max-[540px]:w-[80%] max-[480px]:w-full max-[480px]:px-[10px]">
                <div className=" max-[640px]:mt-[20px]">
                    <h6 className="text-[20px] font-bold text-center max-[1280px]:text-[18px] max-[1080px]:text-[16px]">
                        Integrations
                    </h6>
                    <h4 className="text-[36px] font-bold text-center max-[1280px]:text-[28px] max-[1080px]:text-[24px]">
                        Accelerated AI is Just an API Call Away
                    </h4>
                    <p className="text-[16px] text-center mt-[10px]">
                        Get up and running quickly with familiar APIs.
                    </p>
                </div>
                <div className="flex items-center w-full py-[45px] max-[640px]:w-full max-[640px]:block max-[540px]:w-full max-[480px]:w-full">
                    <div className="w-1/2 max-[640px]:w-[500px] max-[640px]:mx-auto max-[540px]:w-full">
                        <img className="w-[100%]" src="/images/img1.jpeg" />
                    </div>
                    <div className="w-1/2 max-[640px]:w-[500px] max-[640px]:mx-auto max-[540px]:w-full">
                        <h3 className="font-bold text-[28px] max-[1280px]:text-[24px]  max-[980px]:text-[20px] ">
                            Seamless Compatibility With Popular Libraries
                        </h3>
                        <p className="text-[15px] mt-[10px]">
                            Use NVIDIA APIs from your existing tools and
                            applications with as little as three lines of code.
                        </p>
                    </div>
                </div>
                <div className="flex items-center w-full py-[45px] max-[640px]:w-full max-[640px]:block max-[540px]:w-full max-[480px]:w-full">
                    <div className="w-1/2 max-[640px]:w-[500px] max-[640px]:mx-auto max-[540px]:w-full">
                        <h3 className="font-bold text-[28px] max-[1280px]:text-[24px]  max-[980px]:text-[20px] ">
                            Use the Tools You Love
                        </h3>
                        <p className="text-[15px] mt-[10px] mb-[10px]">
                            Work with your favorite large language model (LLM)
                            programming frameworks, including LangChain and
                            LlamaIndex, and easily integrate the latest AI
                            models in your applications.
                        </p>
                        <h5 className="font-bold text-[18px] mt-[10px] flex  max-[1280px]:text-[16px]  max-[980px]:text-[14px]">
                            Learn More About Building With These Tools and
                            NVIDIA NIM
                            <MdKeyboardArrowRight
                                size={30}
                                color="#76B900"
                                className="max-[1280px]:hidden"
                            />
                        </h5>
                    </div>
                    <div className="w-[1/2] max-[786px]:w-[300px] max-[640px]:w-[500px] max-[640px]:mx-auto max-[540px]:w-full">
                        <img  src="/images/img2.jpeg" />
                    </div>
                </div>
                <div className="flex items-center w-full py-[45px] max-[640px]:w-full max-[640px]:block max-[540px]:w-full max-[480px]:w-full">
                    <div className="w-1/2 max-[640px]:w-[500px] max-[640px]:mx-auto  max-[540px]:w-full">
                        <img className='w-[100%]' src="/images/img3.jpeg" />
                    </div>
                    <div className="w-1/2 max-[640px]:w-[500px] max-[640px]:mx-auto max-[540px]:w-full">
                        <h3 className="text-[28px] font-bold max-[1280px]:text-[24px] max-[980px]:text-[20px]">
                            NIM Agent Blueprints
                        </h3>
                        <p className="text-[15px] mt-[15px] mb-[15px]">
                            Everything you need to build impactful generative AI
                            applications. Each blueprint includes NVIDIA NIM and
                            partner microservices, one or more AI agents, sample
                            code, customization instructions, and a Helm chart
                            for deployment.
                        </p>
                        <h6 className="text-[18px] font-bold flex items-center max-[1280px]:text-[16px] max-[980px]:text-[14px]">
                            Learn More
                            <MdKeyboardArrowRight
                                size={30}
                                color="#76B900 "
                                className="max-[1280px]:size-[24px]"
                            />
                        </h6>
                        <h6 className="text-[18px] font-bold mt-[10px] flex items-center max-[1280px]:text-[16px] max-[980px]:text-[14px]">
                            Try Now
                            <MdKeyboardArrowRight
                                size={30}
                                color="#76B900"
                                className="max-[1280px]:size-[24px]"
                            />
                        </h6>
                    </div>
                </div>
                <div className="w-full border-[1px] border-[#202020] mt-[30px]"></div>
            </div>
        </div>
    );
}

export default Integrations;
