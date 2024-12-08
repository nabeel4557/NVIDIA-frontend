import Link from "next/link";
import React from "react";

function Footer() {
    const footerItems = [
        {
            title: "Jetson",
            data: [
                "About Us",
                "Company Overview",
                "Investors",
                "Venture Capital(NVentures)",
                "NVIDIA Foundation",
                "Research",
                "Corporate Sustainability",
                "Technologies",
                " Careers",
            ],
        },
        {
            title: "Technologies",
            data: [
                "CUDA-X",
                "NVIDIA Ampere Architecture",
                "Tensor Cores",
                "Multi-Instance GPU (MIG)",
            ],
        },
        {
            title: "Resources",
            data: [
                "AI Foundation Models",
                "Case Studies",
                "Content Library",
                "Deep Learning Blogs",
                "Developer Education",
                "Documentation",
                "Glossary",
                "GTC AI Conference",
                "Kaggle Grandmasters",
                "Tensor Cores",
                "Multi-Instance GPU (MIG)",
            ],
        },
        {
            title: "Company Info",
            data: [
                "CUDA-X",
                "NVIDIA Ampere Architecture",
                "Tensor Cores",
                "Multi-Instance GPU (MIG)",
                "NVIDIA Ampere Architecture",
                "Tensor Cores",
                "Multi-Instance GPU (MIG)",
            ],
        },
    ];
    return (
        <div className="w-full py-[75px]  ">
            <div className=" wrapper w-full flex flex-row  gap-7  max-[1080px]:w-[700px] max-[1080px]:mx-auto max-[1080px]:flex-wrap max-[786px]:w-[600px] max-[640px]:w-[500px] max-[640px]:block max-[540px]:w-full ">
                {footerItems.map((item,index) => (
                    <div key={index} className="w-1/4 max-[1080px]:w-[300px] max-[786px]:w-[280px] max-[640px]:w-[500px] max-[640px]:mb-[40px] max-[540px]:w-full ">
                        <h5 className="text-[24px] font-bold mb-[10px] border-b-[1px] border-b-[#999999] pb-2 max-[640px]:text-center">
                            {item.title}
                        </h5>
                        {item.data.map((item,index) => (
                            <ul key={index} className=" leading-9 max-[640px]:flex flex-wrap max-[640px]:px-8 max-[640px]:gap-8">
                                <li className="text-[18px]  text-[#76B900] max-[1280px]:text-[16px]">
                                    <Link href="#">{item}</Link>
                                </li>
                            </ul>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Footer;

    