import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";


function Resources() {
  return (
      <div className="w-full bg-[#EEEEEE] py-[75px]">
          <div className="wrapper">
              <h6 className="text-[#1A1A1A] text-[20px] text-center">
                  Resources
              </h6>
              <h2 className="text-[36px] text-[#000] font-bold text-center mt-[10px]">
                  Unlock, Upskill, and Upscale
              </h2>
              <div className="w-full flex items-center gap-4 mt-[40px]">
                  <div className="w-1/4 bg-[#fff] h-[530px] relative pb-[30px] shadow-lg">
                      <div className="w-full">
                          <img src="/images/img12.jpeg" />
                      </div>
                      <div className="my-[30px] px-[20px]">
                          <h6 className="text-[15px] font-bold text-[#000]">
                              NVIDIA LaunchPad
                          </h6>
                          <h3 className="text-[24px] font-bold text-[#000]">
                              Unlock AI With a Hands-On Lab
                          </h3>
                          <p className="text-[#1A1A1A] text-[15px]">
                              Experience end-to-end AI solutions through guided
                              hands-on labs for development frameworks,
                              retrieval-augmented generation (RAG)-based
                              chatbots, route optimizations, and more.
                          </p>
                          <h6 className="flex items-center text-[18px] text-[#000] font-bold absolute bottom-[30px] z-10 ">
                              Learn More
                              <MdKeyboardArrowRight size={30} color="#768900" />
                          </h6>
                      </div>
                  </div>
                  <div className="w-1/4 bg-[#fff] h-[530px] relative pb-[30px] shadow-lg">
                      <div className="w-full">
                          <img src="/images/img13.jpeg" />
                      </div>
                      <div className="my-[30px] px-[20px]">
                          <h6 className="text-[15px] font-bold text-[#000]">
                              NVIDIA Developer Program
                          </h6>
                          <h3 className="text-[24px] font-bold text-[#000]">
                              Accelerate Your AI Applications
                          </h3>
                          <p className="text-[#1A1A1A] text-[15px]">
                              Get free access to NIM for application
                              development, research, and testing plus technical
                              learning resources through the NVIDIA Developer
                              Program.
                          </p>
                          <h6 className="flex items-center text-[18px] text-[#000] font-bold absolute bottom-[30px] z-10 ">
                              Start Building
                              <MdKeyboardArrowRight size={30} color="#768900" />
                          </h6>
                      </div>
                  </div>
                  <div className="w-1/4 bg-[#fff] h-[530px] relative pb-[30px] shadow-lg">
                      <div>
                          <img src="/images/img14.jpeg" />
                      </div>
                      <div className="my-[30px] px-[20px]">
                          <h6 className="text-[15px] font-bold text-[#000]">
                              AI Workbench
                          </h6>
                          <h3 className="text-[24px] font-bold text-[#000]">
                              Start Small. Scale Big
                          </h3>
                          <p className="text-[#1A1A1A] text-[15px]">
                              Get free access to NIM for application
                              development, research, and testing plus technical
                              learning resources through the NVIDIA Developer
                              Program.
                          </p>
                          <h6 className="flex items-center text-[18px] text-[#000] font-bold absolute bottom-[30px] z-10 ">
                              Start Building
                              <MdKeyboardArrowRight size={30} color="#768900" />
                          </h6>
                      </div>
                  </div>
                  <div className="w-1/4 bg-[#fff] h-[530px] relative pb-[30px] shadow-lg">
                      <div>
                          <img src="/images/img15.jpeg" />
                      </div>
                      <div className="my-[30px] px-[20px]">
                          <h6 className="text-[15px] font-bold text-[#000]">
                              NVIDIA LaunchPad
                          </h6>
                          <h3 className="text-[24px] font-bold text-[#000] my-[30px]">
                              Explore NVIDIA NIM in the News
                          </h3>
                          <p className="text-[#1A1A1A] text-[15px]">
                              Experience end-to-end AI solutions through guided
                              hands-on labs for development frameworks,
                              retrieval-augmented generation (RAG)-based
                              chatbots, route optimizations, and more.
                          </p>
                          <h6 className="flex items-center text-[18px] text-[#000] font-bold absolute bottom-[30px] z-10 ">
                              Learn More
                              <MdKeyboardArrowRight size={30} color="#768900" />
                          </h6>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Resources;