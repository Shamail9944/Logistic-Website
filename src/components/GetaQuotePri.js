
import React from 'react'
import Link from 'next/link';

export default function GetaQuotePri() {
  return (
    <div className='bg-[#FAFAFA] pb-14'
    style={{
      backgroundImage: "url(quote-bg.png)",
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100%",
    }}>
      
      <div className=' text-black mx-auto max-w-6xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <h2 className='font-bold text-lg md:text-2xl mb-2 md:mb-8'>GET A QUOTE</h2>
        <p className='text-center max-w-xl text-xs md:text-base'>If you are looking for a competitive price or wish to get a quote then give us a call on <span className='text-[#6C0287] font-bold'>03XX - XXXXXXX </span>or complete our quotation form</p>

      </div>
      <div className='flex justify-center pb-8'>
        <Link href="/quotation">
          <button className='btn rounded-md border border-white/50 max-w-xl h-[50px] px-8 flex items-center justify-center overflow-hidden hover:border-accent group bg-[#6C0287] font-bold text-xs md:text-sm'>
            GET QUOTATION
          </button>
        </Link>
      </div>
    </div>
  )
}
