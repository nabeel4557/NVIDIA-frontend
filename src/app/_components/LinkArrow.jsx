import Link from 'next/link'
import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function LinkArrow({index}) {

    const [hoverActive, setHoverActive] = useState(false)
  return (
        <Link
        onMouseLeave={()=>setHoverActive(false)}
        onMouseEnter={()=>setHoverActive(true)}
        
        href={`use-cases/${index}`}
                                    className=" text-black flex items-center text-[18px] font-bold absolute bottom-[30px] z-10 max-[1280px]:text-[16px] ">
                                    Learn More 
                                    <MdKeyboardArrowRight
            size={22}
            color={hoverActive? 'black' : '#76b900'}
            className={` max-[1280px]:size-[24px] ml-2 transform transition-all duration-300 ease-in-out ${
          hoverActive ? "translate-x-1 scale-110" : ""
        }`}
        />
       </Link>
       
  )
}
