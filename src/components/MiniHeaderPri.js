
import Link from 'next/link'
import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { TfiYoutube } from 'react-icons/tfi'


export default function MiniHeaderPri() {
  return (
    <div className='w-full bg-[#6C0287]'>
      <div className="mx-auto max-w-6xl flex items-center px-6 lg:px-4 py-1 lg:py-2 justify-between text-white">
        <div className='flex gap-x-5'>
          <div className="flex flex-row gap-x-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <p>xxx</p>
          </div>
          <div className="flex flex-row gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <p>xxx</p>
          </div>
        </div>
        <div className='flex gap-x-5 lg:justify-end'>
          <div className="flex flex-row gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <p>Subscribe</p>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <Link target="_blank" href={'https://www.fb.com//'} className="text-xl hover:text-accent transition-all duration-300"><BiLogoFacebook /></Link>
            <Link target="_blank" href={'https://www.instagram.com//'} className="text-xl hover:text-accent transition-all duration-300"><AiOutlineInstagram /></Link>
            <Link target="_blank" href={'https://www.twitter.com//'} className="text-xl hover:text-accent transition-all duration-300"><AiOutlineTwitter /></Link>
            <Link target="_blank" href={'https://www.youtube.com//'} className="text-xl hover:text-accent transition-all duration-300"><TfiYoutube /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
