import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Run() {
    return (
        <>
            <div className=" wrapper py-[75px]">
                <div className="w-[70%] mx-auto justify-center max-[1280px]:w-[780px] max-[1080px]:w-[700px] max-[1080px]:mx-auto max-[786px]:w-[600px] max-[640px]:w-[500px] max-[540px]:w-full max-[480px]:w-full">
                    <h6 className="text-center text-[20px] font-bold max-[1280px]:text-[16px]">
                        Run Anywhere
                    </h6>
                    <h2 className="text-center py-[8px] text-[36px] font-bold max-[1280px]:text-[28px] max-[1080px]:text-[24px] max-[1080px]:w-[440px] max-[1080px]:mx-auto max-[480px]:w-full">
                        Accelerate Your AI Deployment With NVIDIA NIM
                    </h2>
                    <p className="w-[850px]  text-center text-[15px] justify-center max-[1280px]:w-[630px] max-[1280px]:ml-[60px] max-[1080px]:w-[550px]  max-[640px]:w-[500px]  max-[768px]:ml-[30px]  max-[640px]:ml-[0px] max-[540px]:w-full">
                        Part of NVIDIA AI Enterprise, NVIDIA NIM is a set of
                        easy-to-use inference microservices for accelerating the
                        deployment of foundation models on any cloud or data
                        center and helping to keep your data secure.
                    </p>
                </div>
                <div className="w-full max-[1280px]:w-[90%] max-[1280px]:mx-auto max-[1080px]:w-[700px] max-[1080px]:mx-auto max-[1080px]:mt-[20px] max-[786px]:w-[600px] max-[640px]:w-[500px] max-[540px]:w-full">
                    <img className="w-full" src="/images/img4.jpg" />
                </div>
                <div className=" space-y-3 mt-[30px]">
                    <h6 className="flex items-center justify-center text-[18px] font-bold max-[1280px]:text-[16px] max-[1080px]:text-[14px]">
                        <Link href="#" className="flex items-center">
                            Learn More About NVIDIA NIM
                            <MdKeyboardArrowRight size={30} color="#76B900" />
                        </Link>
                    </h6>
                    <h6 className="flex items-center justify-center text-[18px] font-bold max-[1280px]:text-[16px] max-[1080px]:text-[14px]">
                        <Link href="#" className="flex items-center">
                            See How to Deploy NIM in Five Minutes{" "}
                            <MdKeyboardArrowRight size={30} color="#76B900" />
                        </Link>
                    </h6>
                </div>

                <div className="py-[75px] gap-5  border-b-[2px] border-b-[#202020] w-full flex max-[1280px]:w-[80%] max-[1280px]:mx-auto max-[1080px]:w-[90%] max-[1080px]:mx-auto max-[786px]:w-[90%] max-[640px]:w-[90%] max-[640px]:block max-[540px]:w-full">
                    <div className="left w-1/2  max-[640px]:w-full max-[540px]:w-full ">
                        <div className="">
                            <h3 className="text-[28px] font-bold max-[1280px]:text-[24px] max-[1080px]:text-[20px]">
                                Deploy NIM
                            </h3>
                            <p className="text-[15px] mt-[10px] mb-[30px]">
                                Deploy NIM for your model with a single command.
                                You can also easily run NIM with fine
                                tuned-models.
                            </p>
                        </div>
                        <div className="">
                            <h3 className="text-[28px] font-bold max-[1280px]:text-[24px] max-[1080px]:text-[20px]">
                                Run Inference
                            </h3>
                            <p className="text-[15px] mt-[10px] mb-[30px]">
                                Get NIM up and running with the optimal runtime
                                engine based on your NVIDIA-accelerated
                                infrastructure.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[28px] font-bold max-[1280px]:text-[24px] max-[1080px]:text-[20px]">
                                Build
                            </h3>
                            <p className="text-[15px] mt-[10px]">
                                Developers can integrate self-hosted NIM
                                endpoints in just a few lines of code.
                            </p>
                        </div>
                    </div>
                    <div className="right w-1/2 max-[640px]:w-full max-[540px]:w-full ">
                        <nav className="py-[20px] px-[10px]">
                            <ul className="flex items-center gap-7 text-[#808080] text-[15px]">
                                <li>
                                    <Link href="#">Deploy</Link>
                                </li>
                                <li>
                                    <Link
                                        className="py-[3px] px-[12px] bg-[#333333] rounded-[5px] text-[#fff] font-bold"
                                        href="#">
                                        Run
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Build</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className=" w-full py-[50px] px-[30px] bg-[#101010] border-[2px] border-[#202020] rounded-[10px]">
                            <span className="text-[#c3c3c3]">
                                curl -X &apos;POST&apos;/
                                <br />
                                &apos;http://0.0.0.0:8000/v1/completions&apos; \
                                <br />
                                -H &apos;accept: application/json&apos; \<br />
                                -H &apos;Content-Type: application/json&apos; \
                                <br />
                                -d &apos;
                                <br />
                                <span className="text-[#76B900]">
                                    "model" : "model_name", <br />
                                    "prompt" : "Once upon a time",
                                    <br />
                                    "max_tokens" : 64
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="py-[75px] w-full max-[1280px]:w-[90%] max-[1280px]:mx-auto  max-[1080px]:w-[90%] max-[1080px]:mx-auto max-[786px]:w-[90%] max-[640px]:w-[500px] max-[540px]:w-full">
                    <div className="w-full flex gap-5 max-[640px]:block max-[640px]:w-[90%] max-[540px]:w-full">
                        <div className="left-side w-1/2 max-[640px]:w-[500px] max-[540px]:w-full">
                            <div className="w-[96px] h-[96px] mx-auto mb-[20px]">
                                <img src="/images/svg1.svg" />
                            </div>
                            <h3 className="text-[24px] font-bold text-center mb-[20px] max-[1280px]:text-[20px] max-[1080px]:text-[18px] ">
                                Launch Locally or Scale With Kubernetes
                            </h3>
                            <p className="text-[15px] text-center ">
                                Seamlessly deploy containerized AI microservices
                                on any NVIDIA accelerated infrastructure, from a
                                single device to data center scale.
                            </p>
                        </div>
                        <div className="right-side w-1/2 max-[640px]:w-[500px] max-[640px]:mt-[20px] max-[540px]:w-full">
                            <div className="w-[96px] h-[96px] mx-auto mb-[20px]">
                                <img
                                    className="w-full"
                                    src="/images/svg2.svg"
                                />
                            </div>
                            <h3 className="text-[24px] font-bold text-center mb-[20px] max-[1280px]:text-[20px] max-[1080px]:text-[18px] ">
                                Deploy Securely With Confidence
                            </h3>
                            <p className="text-[15px] text-center">
                                Rely on production-grade runtimes, including
                                ongoing security updates, and run your business
                                applications with stable APIs backed by
                                enterprise-grade support.
                            </p>
                        </div>
                    </div>
                    <div className="w-[65%] mx-auto mt-[40px] max-[1080px]:w-[65%] max-[1080px]:mx-auto max-[640px]:w-[500px] max-[640px]:mx-[0px] max-[540px]:w-full">
                        <div className="w-[96px] h-[96px] mx-auto mb-[20px]">
                            <img className="w-full" src="/images/svg3.svg" />
                        </div>
                        <h3 className="text-[24px] font-bold text-center mb-[20px] max-[1280px]:text-[20px] max-[1080px]:text-[18px]">
                            Lower Costs and Your Carbon Footprint
                        </h3>
                        <p className="text-[15px] text-center">
                            Lower the operational cost of running models in
                            production with AI runtimes that are continuously
                            optimized for low latency and high throughput on
                            NVIDIA-accelerated infrastructure.
                        </p>
                    </div>
                </div>
            </div>

            <div className="customization py-[75px] bg-[#4D0068] max-[768px]:w-full max-[540px]:w-full">
                <div className="max-[540px]:w-full">
                    <span className="font-bold text-[#fff] text-[20px] text-center flex justify-center max-[1080px]:text-[16px]">
                        Customization
                    </span>
                    <h2 className="text-[36px] font-bold text-[#fff] text-center mt-[20px] mb-[50px] max-[1280px]:text-[28px] max-[1080px]:text-[24px] max-[1080px]:w-[700px] max-[1080px]:mx-auto max-[786px]:w-[600px] max-[640px]:w-[500px] max-[540px]:w-full ">
                        Tailor NIM Microservices for Your Domain-Specific Needs
                    </h2>
                </div>

                <div className="w-full flex  wrapper max-[1280px]:w-[80%] max-[1080px]:w-[90%] max-[980px]:w-[80%] max-[786px]:w-[80%] max-[640px]:w-[90%]  max-[640px]:block max-[540px]:w-full max-[540px]:px-[15px]">
                    <div className="w-1/2 max-[640px]:w-full">
                        <h2 className="text-[28px] font-bold max-[1280px]:text-[24px] max-[1080px]:text-[20px]">
                            Fine-Tune With NVIDIA NeMo
                        </h2>
                        <p className="text-[15px] leading-6 mt-[10px]">
                            <span className="border-b-[2px] border-b-[#76B900]">
                                NVIDIA NeMo™
                            </span>{" "}
                            is an end-to-end platform for developing custom
                            generative AI anywhere. It includes tools for
                            training, customization and retrieval-augmented
                            generation (RAG), guardrailing, data curation, and
                            model pretraining, offering enterprises an easy,
                            cost-effective, and fast way to adopt generative AI.
                        </p>
                        <h5 className="mt-[20px] font-bold text-[18px] flex items-center max-[1080px]:text-[14px]">
                            Read Technical Blog{" "}
                            <MdKeyboardArrowRight
                                className="text-[#768900]"
                                size={30}
                            />
                        </h5>
                        <h5 className="mt-[10px] font-bold text-[18px] flex items-center max-[1080px]:text-[14px]">
                            Get Started With Tutorials{" "}
                            <MdKeyboardArrowRight
                                size={30}
                                className="text-[#768900]"
                            />
                        </h5>
                    </div>
                    <div className="w-1/2 max-[640px]:w-full max-[640px]:mt-[20px]">
                        <img src="/images/img5.jpeg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Run;
