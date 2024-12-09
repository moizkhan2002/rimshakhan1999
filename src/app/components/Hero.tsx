import React from 'react'
import Image from 'next/image'
import Footer from './Footer'
const Hero = () => {
  return (
    <div className='w-[1440px] h-[749px] bg-[#F9F9F9]'>
      <h1 className='w-[328px] h-[50px] mt-16 ml-[188px] font-[Clash Display] font-[400] text-4xl text-[#2A2B45]'>Your shopping cart</h1>
      <div className='flex justify-between items-center' >
      <h6 className='w-[55px] h-5 mt-4 ml-[188px]'>Product</h6>
      <h6 className='w-[55px] h-5 mt-4 ml-[188px]'>Quantity</h6>
      <h6 className='w-[55px] h-5 mt-4 ml-[188px]'>Total</h6>
      </div>
      <div className='w-[1064px] h-0 mt-[100px] ml-[188px] gap-0 border-[1px solid] bg-[#EBE8F4]'></div>
  
    <div className='grid grid-cols-3 justify-between items-center'>
      <div className='w-[309px] h-[749px] ml-[188px]'>
<Image src={'/vase.jpeg'} alt='vase pic' height={28} width={155} />
<div className='w-[179px] h-[110px]'>
<h3>Graystone vase</h3>
<p>A timeless ceramic vase with a tri color grey glaze.</p>
</div>
</div>
<h3 className='grid grid-cols-2 w-[122px] h-[749px] mt-[130px] ml-[338px] pt-3 pb-3 pl-4 pr-4'>1</h3>
<h3 className='grid grid-cols-2  w-[38px] h-[749px] mt-[130px] ml-[430px]'>$85</h3>

      <div className='w-[309px] h-[749px] mt-[100px] ml-[188px]'>
      <Image src={'/plant.jpeg'} alt='plant pic' height={134} width={109} />
      <div className='w-[179px] h-[110px]'>
      <h3>Basic white vase</h3>
<p>Beautiful and simple this is one for the classics</p>
        </div>
        </div>
      <h3 className='grid grid-cols-3 w-[122px] h-[749px] mt-[266px] ml-[338px] pt-3 pb-3 pl-4 pr-4'>2</h3>
      <h3 className='grid grid-cols-3  w-[38px] h-[749px] mt-[266px] ml-[430px]'>$125</h3>
      </div>


      <div className='w-[1064px] h-0 mt-[534px] ml-[188px] gap-0 border-r-[1px 0px 0px 0px] bg-slate-500'></div>

        <h2 className='w-[282px] h-[67px] mt-[562px] ml-[1330px] gap-[12px] text-[#242643]'>Subtotal  $210</h2>
        <Footer />
      </div>
  )
}

export default Hero
