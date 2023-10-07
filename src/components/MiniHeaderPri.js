
import Link from 'next/link'
import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { TfiYoutube } from 'react-icons/tfi'
import { GiRotaryPhone } from 'react-icons/gi'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { FaHouseSignal } from 'react-icons/fa6'


export default function MiniHeaderPri() {
  return (
    <div className='hidden lg:block w-full bg-[#6C0287]'>
      <div className="mx-auto max-w-6xl flex items-center pt-2 justify-between text-white text-sm font-bold align-middle">
        <div className='flex gap-x-5'>
          <div className="flex flex-row gap-x-2 ">
            <GiRotaryPhone />
            <p>03xx xxxxxxx</p>
          </div>
          <div className="flex flex-row gap-x-2">
            <SlEnvolopeLetter />
            <p>info@XXXCouriers.co.uk</p>
          </div>
        </div>
        <div className='flex gap-x-5 lg:justify-end'>
          <div className="flex flex-row gap-x-2">
            <FaHouseSignal />
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
