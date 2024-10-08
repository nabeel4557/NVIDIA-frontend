import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <div className="w-full py-[75px]">
            <div className=" wrapper w-full flex gap-7 ">
                <div className="w-1/4">
                    <h5 className="text-[24px] font-bold mb-[10px] border-b-[1px] border-b-[#999999] pb-2">
                        Jetson
                    </h5>
                    <ul className=" leading-9">
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Products DGX Systems</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">DGX A100</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">DGX Station A100</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">EGX Platform</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Data Center GPUs</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Virtual GPU</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">NVIDIA Drive</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">NVIDIA Isaac</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Jetson</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h5 className="text-[24px] font-bold mb-[10px] border-b-[1px] border-b-[#999999] pb-2">
                        Technologies
                    </h5>
                    <ul className="leading-9">
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">CUDA-X</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">NVIDIA Ampere Architecture</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Tensor Cores</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Multi-Instance GPU (MIG)</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h5 className="text-[24px] font-bold mb-[10px] border-b-[1px] border-b-[#999999] pb-2">
                        Resources
                    </h5>
                    <ul className="leading-9">
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">AI Foundation Models</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Case Studies</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Content Library</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Deep Learning Blogs</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Developer Education</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Documentation</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Glossary</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">GTC AI Conference</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Kaggle Grandmasters</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                                <Link href="#">NVIDIA Ampere Architecture</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                                <Link href="#">Tensor Cores</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                                <Link href="#">Multi-Instance GPU (MIG)</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h5 className="text-[24px] font-bold mb-[10px] border-b-[1px] border-b-[#999999] pb-2">
                        Company Info
                    </h5>
                    <ul className="leading-9">
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">CUDA-X</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">NVIDIA Ampere Architecture</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Tensor Cores</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Multi-Instance GPU (MIG)</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">NVIDIA Ampere Architecture</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Tensor Cores</Link>
                        </li>
                        <li className="text-[18px] text-[#76B900]">
                            <Link href="#">Multi-Instance GPU (MIG)</Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
