import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
const Mininavbar = () => {
  return (
    <div className='w-[390px] h-[69px] sm:w-[1400px] ml[28px] border-r-[1px] border-[#000000]'>
      <h1 className='flex justify-evenly items-center font-[Clash Display] font-[400] text-[24px] mt-[50px] text-[#22202E]'><IoMdSearch size={16} />   Avion     <GiShoppingCart size={16} /><FaRegUser /></h1>
    </div>
  )
}

export default Mininavbar
