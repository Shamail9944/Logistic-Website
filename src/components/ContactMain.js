'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLogoTwitter } from 'react-icons/bi'
import { useState } from 'react';

export default function ContactMain() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/email", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fname, lname, email, website, phone, message }),
    })
    console.log(await response.json())
  }

  return (
    <div className='bg-[#FFFFFF] w-full'>


      <div className='bg-[#FFFFFF] max-w-5xl text-black mx-auto flex items-start justify-start px-6 lg:px-0 py-4 lg:py-8'
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

        <div className=' flex flex-col md:flex-row gap-x-12 mt-6 max-w-5xl text-center'>

          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            <h2 className='font-bold'>CONTACT BY EMAIL</h2>
            <p>If you have a general query about our business services, simply complete the form below and we will endeavour to respond within 1 business working day.</p>

            <div className='w-full border-2 border-solid border-[#FDAF17] px-6 py-4 rounded-lg my-4'>
              <form className='flex flex-col gap-1 w-full mx-auto'
                onSubmit={sendMail}>

                <input
                  name='fname'
                  id='fname'
                  type="text"
                  placeholder='First Name'
                  className='input mt-4 p-2 rounded-lg'
                  required
                  value={fname}
                  onChange={(e) => { setFname(e.target.value); }} />
                <input
                  name='lname'
                  id='lname'
                  type="text"
                  placeholder='Last Name'
                  className='input mt-4 p-2 rounded-lg'
                  required
                  value={lname}
                  onChange={(e) => { setLname(e.target.value); }} />

                <input
                  name='email'
                  id='email'
                  type="text"
                  placeholder='Email'
                  className='input mt-4 p-2 rounded-lg'
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); }} />


                <input
                  name='website'
                  id='website'
                  type="text"
                  placeholder='Website'
                  className='input mt-4 p-2 rounded-lg'
                  value={website}
                  onChange={(e) => { setWebsite(e.target.value); }} />

                <input
                  name='phone'
                  id='phone'
                  type="number"
                  placeholder='Phone'
                  className='input mt-4 p-2 rounded-lg'
                  required
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); }} />


                <textarea
                  name='message'
                  id='message'
                  type="text"
                  rows={10}
                  placeholder='Message'
                  className="textarea mt-4 p-2 rounded-lg"
                  required
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); }}
                ></textarea>


                <button
                  className='btn rounded-full border font-bold bg-[#FDAF17] max-w-[170px] px-8 py-3 mt-5  flex items-center justify-center overflow-hidden hover:border-accent group'
                  type="submit">
                  Submit
                </button>
              </form>
            </div>


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
                className='my-2'
              />
              <Image
                src="/snapchat-link.jpg"
                width={200}
                height={250}
                alt="Warehouse"
                className='my-2'
              />
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
