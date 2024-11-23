import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <div className="w-full py-[75px]  ">
            <div className=" wrapper w-full flex gap-7  max-[1080px]:w-[700px] max-[1080px]:mx-auto max-[1080px]:flex-wrap max-[786px]:w-[600px] max-[640px]:w-[500px] max-[640px]:block max-[540px]:w-full ">
                <div className="w-1/4 max-[1080px]:w-[300px] max-[786px]:w-[280px] max-[640px]:w-[500px] max-[640px]:mb-[40px] max-[540px]:w-full ">
                    <h5 className="text-[24px] font-bold mb-[10px] border-b-[1px] border-b-[#999999] pb-2 max-[640px]:text-center">
                        Jetson
                    </h5>
                    <ul className=" leading-9 max-[640px]:flex flex-wrap max-[640px]:px-8 max-[640px]:gap-8">
                        <li className="text-[18px]  text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Products DGX Systems</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">DGX A100</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">DGX Station A100</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">EGX Platform</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Data Center GPUs</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Virtual GPU</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">NVIDIA Drive</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">NVIDIA Isaac</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Jetson</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/4  max-[1080px]:w-[300px] max-[786px]:w-[280px] max-[640px]:w-[500px] max-[640px]:mb-[40px] max-[540px]:w-full">
                    <h5 className="text-[24px] font-bold mb-[10px] border-b-[1px] border-b-[#999999] pb-2 max-[640px]:text-center">
                        Technologies
                    </h5>
                    <ul className="leading-9 max-[640px]:flex flex-wrap max-[640px]:px-8 max-[640px]:gap-8">
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">CUDA-X</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">NVIDIA Ampere Architecture</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Tensor Cores</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Multi-Instance GPU (MIG)</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/4  max-[1080px]:w-[300px] max-[786px]:w-[280px] max-[640px]:w-[500px] max-[640px]:mb-[40px] max-[540px]:w-full">
                    <h5 className="text-[24px] font-bold mb-[10px] border-b-[1px] border-b-[#999999] pb-2 max-[640px]:text-center">
                        Resources
                    </h5>
                    <ul className="leading-9 max-[640px]:flex flex-wrap max-[640px]:px-8 max-[640px]:gap-8">
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">AI Foundation Models</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Case Studies</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Content Library</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Deep Learning Blogs</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Developer Education</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Documentation</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Glossary</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">GTC AI Conference</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Kaggle Grandmasters</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">NVIDIA Ampere Architecture</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Tensor Cores</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Multi-Instance GPU (MIG)</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/4  max-[1080px]:w-[300px] max-[786px]:w-[280px] max-[640px]:w-[500px] max-[540px]:w-full">
                    <h5 className="text-[24px] font-bold mb-[10px] border-b-[1px] border-b-[#999999] pb-2 max-[640px]:text-center">
                        Company Info
                    </h5>
                    <ul className="leading-9 max-[640px]:flex flex-wrap max-[640px]:px-8 max-[640px]:gap-8">
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">CUDA-X</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">NVIDIA Ampere Architecture</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Tensor Cores</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Multi-Instance GPU (MIG)</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">NVIDIA Ampere Architecture</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Tensor Cores</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900] max-[1280px]:text-[16px]">
                            <Link href="#">Multi-Instance GPU (MIG)</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
