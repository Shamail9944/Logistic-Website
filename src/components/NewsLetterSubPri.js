
import Link from 'next/link'
import React from 'react'

export default function NewsLetterSubPri() {
  return (
    <div className='bg-[#FDAF17]'>
      <div className=' text-black mx-auto max-w-6xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <h2 className='font-bold text-lg md:text-2xl mb-2 md:mb-8'>JOIN OUR NEWS LETTER</h2>
        <p className='text-center text-xs md:text-base'>Enter your Email & be the first to know about our company updates!</p>

        <div>
        <div className='flex justify-center pt-4'>
        <Link href="/quotation">
          <button className='btn rounded-md border border-white/50 max-w-[200px] h-[50px] px-8 flex items-center justify-center overflow-hidden hover:border-accent group bg-[#6C0287] font-bold text-xs md:text-sm text-white'>
            SUBSCRIBE
          </button>
        </Link>
      </div>
        </div>
      </div>
    </div>
  )
}
