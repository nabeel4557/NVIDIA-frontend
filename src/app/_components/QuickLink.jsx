import Link from 'next/link'
import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function QuickLink({ link }) {
    const [hoverActive, setHoverActive] = useState(false)

    return (
        <div>
            <Link
                onMouseLeave={() => setHoverActive(false)}
                onMouseEnter={() => setHoverActive(true)}
                href={"/"}
                className="flex items-center mb-6">
                <p className="w-auto text-[14px] font-bold  left-0  cursor-pointer max-[1280px]:text-[14px]">
                    {link}
                    <span>
                        <MdKeyboardArrowRight
                            size={24}
                            color={hoverActive ? 'black' : '#76b900'}
                            className={` justify-start items-end inline-flex transform transition-all duration-300 ease-in-out ${hoverActive ? "translate-x-1 scale-110" : ""
                                }`}
                        />
                    </span>
                </p>
            </Link>
        </div>
    )
}
