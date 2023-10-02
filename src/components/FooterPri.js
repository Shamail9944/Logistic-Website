
import Link from 'next/link'
import React from 'react'

export default function FooterPri() {
  return (
    <footer className='flex flex-col bg-[#DCF3F7]'>
      <div className='text-black mx-auto max-w-6xl flex flex-col md:flex-row gap-x-5 items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <div className="flex flex-col lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-auto h-16">
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
              <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
              <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
            <p className="self-center font-bold text-[#6C0287]"><span className='text-[#FDAF17] '>XXX <br /></span> Courier</p>

          </Link>
        </div>
        <div className="flex flex-col lg:flex-1">
          xxxxxx
        </div>
        <div className="flex flex-col lg:flex-1">
          xxxxxx
        </div>
        <div className="flex flex-col lg:flex-1">
          xxxxxx
        </div>
      </div>




      <div className='w-full bg-[#6C0287] '>
        <div className="mx-auto max-w-6xl flex flex-col items-center px-6 lg:px-4 py-1 lg:py-2 justify-between text-gray-300">
          <div className='flex gap-x-5 mb-4 text-center text-xs'>
            <p>©2022 XXX Couriers Ltd. All Rights Reserved. Registered in XXX & XXX Company Reg. No. XXXXXXXX</p>
          </div>
          <div className='flex lg:justify-end text-sm'>
            <div className="flex flex-col md:flex-row gap-x-[2.75rem] items-center">
              <Link target="_blank" href={'https://www.instagram.com//'} className="hover:text-accent transition-all duration-300"><p>Privacy</p></Link>
              <Link target="_blank" href={'https://www.twitter.com//'} className="hover:text-accent transition-all duration-300"><p>Legal</p></Link>
              <Link target="_blank" href={'https://www.youtube.com//'} className="hover:text-accent transition-all duration-300 font-bold"><p>Made by SamDevPk</p></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
