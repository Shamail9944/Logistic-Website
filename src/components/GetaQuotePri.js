
import React from 'react'
import Link from 'next/link';

export default function GetaQuotePri() {
  return (
    <div className='bg-[#FAFAFA]'>
      <div className=' text-black mx-auto max-w-6xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <h2 className='font-bold text-2xl mb-8'>GET A QUOTE</h2>
        <p className='text-center'>If you are looking for a competitive price or wish to get a <br></br>quote then give us a call on <span className='text-[#6C0287] font-bold'>03XX - XXXXXXX</span>or complete our quotation form</p>

      </div>
      <div className='flex justify-center pb-8'>
        <Link href="/quotation">
          <button className='btn rounded-md border border-white/50 max-w-[200px] h-[50px] px-8 flex items-center justify-center overflow-hidden hover:border-accent group bg-[#6C0287] font-bold text-sm'>
            GET QUOTATION
          </button>
        </Link>
      </div>
    </div>
  )
}
