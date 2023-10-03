'use client'

import React from 'react'
import ReactPlayer from 'react-player'

export default function PromoVid() {
  return (
    <div className='bg-[#FFFFFF] '>

      <div className='bg-[#CCCCCC] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-8 lg:py-10 justify-between'>
        <div className='max-w-5xl text-center self-center'>
          <h2 className='text-3xl font-bold mb-10'>CORPORATE PROMO</h2>
          <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' width={1000} height={500} />
        </div>
      </div>
    </div>
  )
}
