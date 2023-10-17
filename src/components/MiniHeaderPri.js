
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
      <div className="mx-auto max-w-5xl flex items-center pt-2 justify-between text-white text-sm font-bold align-middle">
        <div className='flex gap-x-5'>
          <div className="flex flex-row gap-x-2 ">
            <GiRotaryPhone className='text-[#FDAF17] text-xl' />
            <p className="hover:text-[#FDAF17] transition-all duration-300">03xx xxxxxxx</p>
          </div>
          <div className="flex flex-row gap-x-2">
            <SlEnvolopeLetter className='text-[#FDAF17] text-lg' />
            <p className="hover:text-[#FDAF17] transition-all duration-300">info@VivoCouriers.co.uk</p>
          </div>
        </div>
        <div className='flex gap-x-5 lg:justify-end'>
          <div className="flex flex-row gap-x-2">
            <FaHouseSignal className='text-[#FDAF17] text-xl' />
            <p className="hover:text-[#FDAF17] transition-all duration-300">Subscribe</p>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <Link target="_blank" href={'https://www.fb.com//'} className="text-xl hover:text-[#FDAF17] transition-all duration-300"><BiLogoFacebook /></Link>
            <Link target="_blank" href={'https://www.instagram.com//'} className="text-xl hover:text-[#FDAF17] transition-all duration-300"><AiOutlineInstagram /></Link>
            <Link target="_blank" href={'https://www.twitter.com//'} className="text-xl hover:text-[#FDAF17] transition-all duration-300"><AiOutlineTwitter /></Link>
            <Link target="_blank" href={'https://www.youtube.com//'} className="text-xl hover:text-[#FDAF17] transition-all duration-300"><TfiYoutube /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
