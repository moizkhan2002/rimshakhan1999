import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='w-[675px] h-[22px] mt-[90px] ml-[382px] gap-11'>
        <ul className="flex justify-between items-center font-[satoshi] font-[400] text-[16px] text-[#726E8D] ">
         <li> <Link href="#/">plant pots</Link>    </li>
         <li> <Link href="#/">ceramics</Link>   </li>
         <li> <Link href="#/">Table</Link> </li>
         <li> <Link href="#/">Chair</Link> </li>
         <li> <Link href="#/">Crokery</Link> </li>
         <li> <Link href="#/">Tableware</Link> </li>
        <li>  <Link href="#/">Cutlery</Link> </li>
          </ul>
    </div>
  )
}

export default Navbar
