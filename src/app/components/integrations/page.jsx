import React from "react";

function Integrations() {
    return (
        <div>
            <div className="wrapper">
                <div>
                    <h6 className="text-[20px] font-bold text-center">
                        Integrations
                    </h6>
                    <h4 className="text-[36px] font-bold text-center">
                        Accelerated AI is Just an API Call Away
                    </h4>
                    <p className="text-[16px] text-center mt-[10px]">
                        Get up and running quickly with familiar APIs.
                    </p>
                </div>
                <div className="flex items-center w-full py-[45px]">
                    <div className="w-1/2">
                        <img src="/images/img1.jpeg" />
                    </div>
                    <div className="w-1/2">
                        <h3 className="font-bold text-[28px]">
                            Seamless Compatibility With Popular Libraries
                        </h3>
                        <p className="text-[15px] mt-[10px]">
                            Use NVIDIA APIs from your existing tools and
                            applications with as little as three lines of code.
                        </p>
                    </div>
                </div>
                <div className="flex w-full py-[45px] items-center">
                    <div className="w-1/2">
                        <h3 className="font-bold text-[28px]">
                            Use the Tools You Love
                        </h3>
                        <p className="text-[15px] mt-[10px] mb-[10px]">
                            Work with your favorite large language model (LLM)
                            programming frameworks, including LangChain and
                            LlamaIndex, and easily integrate the latest AI
                            models in your applications.
                        </p>
                        <h5 className="font-bold text-[18px]">
                            Learn More About Building With These Tools and
                            NVIDIA NIM
                        </h5>
                    </div>
                    <div className="w-[1/2]">
                        <img src="/images/img2.jpeg" />
                    </div>
                </div>
                <div className="w-full flex items-center py-[45px]">
                    <div className="w-1/2">
                        <img src="/images/img3.jpeg" />
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-[28px] font-bold">
                            NIM Agent Blueprints
                        </h3>
                        <p className="text-[15px] mt-[15px] mb-[15px]">
                            Everything you need to build impactful generative AI
                            applications. Each blueprint includes NVIDIA NIM and
                            partner microservices, one or more AI agents, sample
                            code, customization instructions, and a Helm chart
                            for deployment.
                        </p>
                        <h6 className="text-[18px] font-bold">Learn More</h6>
                        <h6 className="text-[18px] font-bold mt-[10px]">Try Now</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Integrations;
