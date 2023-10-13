'use client'

import React from 'react'
import ReactPlayer from 'react-player/youtube'

import dynamic from 'next/dynamic'

export default function PromoVid() {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  return (
    <div className='bg-[#FFFFFF] '>

      <div className='bg-[#CCCCCC] text-black mx-auto w-full flex flex-col items-center px-6 lg:px-4 py-8 lg:py-10 justify-between'>
        <div className=' text-center self-center w-full'>
          <h2 className='text-3xl font-bold mb-10'>CORPORATE PROMO</h2>
          <div className='flex center justify-center'>
            <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' muted={true} playing={true} className="h-[20vh] md:[50vh] lg:[90vh] lg:w-[50vh]" />
          </div>
        </div>
      </div>

    </div>
  )
}
