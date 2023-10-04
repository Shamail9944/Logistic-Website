import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLogoTwitter } from 'react-icons/bi'

export default function ContactMain() {
  return (
    <div className='bg-[#FFFFFF] w-full'>


      <div className='bg-[#FFFFFF] max-w-5xl text-black mx-auto flex items-start justify-start px-6 lg:px-4 py-4 lg:py-8'
      // style={{
      //   backgroundImage: `url(/network-banner.jpg)`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   width: "100vw",
      //   height: "100vh"
      // }}
      >
        <div className='justify-start'>
          <h2 className='font-bold'>CONTACT</h2>
          <p>We are always ready to respond to your queries</p>
        </div>
      </div>



      <div className='bg-[#DBE0D8] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>

        <div className=' flex flex-col md:flex-row gap-x-12 mt-6 max-w-4xl text-center'>

          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            <h2 className='font-bold'>CONTACT BY EMAIL</h2>
            <p>If you have a general query about our business services, simply complete the form below and we will endeavour to respond within 1 business working day.</p>

            <form action="">form</form>

          </div>

          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            <h2 className='font-bold'>CONTACT BY SOCIAL MEDIA</h2>
            <p>You can also communicate through our social media platforms. You can send us a message via facebook messenger by clicking the icon at the bottom right or alternatively you can send a direct message via twitter, instagram or snapchat.</p>

            <div className='flex flex-col md:flex-row text-xs items-center gap-x-4'>
              <Image
                src="/insta-link.jpg"
                width={200}
                height={250}
                alt="Warehouse"
                className='mt-5 pb-10'
              />
              <Image
                src="/snapchat-link.jpg"
                width={200}
                height={250}
                alt="Warehouse"
                className='mt-5 pb-10'
              />
            </div>

            <div className=' w-full items-start'>
              <Link href="/">
                <button className='btn rounded-full border border-white/50 max-w-[400px] h-[30px] px-8 flex items-center justify-center overflow-hidden hover:border-accent group bg-[#37ABED] text-sm text-white gap-x-2'>
                  <BiLogoTwitter className='text-2xl' />
                  <span>Tweet to @XXX Couriers</span>
                </button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
