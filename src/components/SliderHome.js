'use client'

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link';
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SliderVid from './SliderVid';

export default function SliderHome() {
  // const data = [
  //   {
  //     type: "video",
  //     bg: 'https://asksamedaycouriers.co.uk/cmsbo/wp-content/uploads/2018/11/video-promo.mp4',
  //     heading: 'We are Ask',
  //     para: 'Someday Couriers',
  //   },
  //   {
  //     type: "pic",
  //     bg: '/slider/2.jpg',
  //     heading: 'What we do',
  //     para: 'Nationwide and Europe-wide Courier Service',
  //   },
  //   {
  //     type: "pic",
  //     bg: '/slider/4.jpg',
  //     heading: 'Our Transport',
  //     para: 'We have vehicles for all your needs',
  //   },
  //   {
  //     type: "pic",
  //     bg: '/slider/5.jpg',
  //     heading: 'Our Partners',
  //     para: 'We work with UK and International Logistics companies',
  //   },
  // ];

  return (
    <div className="w-full">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='relative flex justify-center md:items-center items-start w-screen h-[89vh]'>
            <SliderVid />
            <div className='absolute flex flex-col items-center justify-center w-[100%] h-[100%]'>
              <h1 className='text-white font-bold text-6xl md:text-8xl'>We are Ask</h1>
              <span className='mt-10 h-[5px] w-[100px] bg-[#fdaf17]'></span>
              <p className='mt-10 text-white font-semibold text-3xl'>Someday Couriers</p>

              <div className='flex flex-col md:flex-row mt-10 items-center'>
                <Link href="/about">
                  <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden font-bold text-xl md:text-md tracking-widest text-white'>
                    ABOUT US
                  </button>
                </Link>
                <span className='mx-10 text-2xl font-bold'>or</span>
                <Link href="/quotation">
                  <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden font-bold text-xl md:text-md tracking-widest text-white'>
                    GET QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative flex justify-center md:items-center items-start w-screen h-[89vh]'>
            <Image
              src="/slider/1.jpg"
              fill={true}
              alt="slider"
              className='w-screen'
              priority={true}
              style={{ objectFit: "cover" }}
            />
            <div className='absolute flex flex-col items-center'>
              <h1 className='text-white font-bold text-6xl md:text-8xl'>What we do</h1>
              <span className='mt-10 h-[5px] w-[100px] bg-[#fdaf17]'></span>
              <p className='mt-10 text-white font-semibold text-3xl'>Nationwide and Europe-wide Courier Service</p>

              <div className='flex flex-col md:flex-row mt-10 items-center'>
                <Link href="/about">
                  <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden font-bold text-xl md:text-md tracking-widest text-white'>
                    ABOUT US
                  </button>
                </Link>
                <span className='mx-10 text-2xl font-bold'>or</span>
                <Link href="/quotation">
                  <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden font-bold text-xl md:text-md tracking-widest text-white'>
                    GET QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative flex justify-center md:items-center items-start w-screen h-[89vh]'>
            <Image
              src="/slider/2.jpg"
              fill={true}
              alt="slider"
              className='w-screen'
              priority={true}
              style={{ objectFit: "cover" }}
            />
            <div className='absolute flex flex-col items-center'>
              <h1 className='text-white font-bold text-6xl md:text-8xl'>Our Transport</h1>
              <span className='mt-10 h-[5px] w-[100px] bg-[#fdaf17]'></span>
              <p className='mt-10 text-white font-semibold text-3xl'>We have vehicles for all your needs</p>

              <div className='flex flex-col md:flex-row mt-10 items-center'>
                <Link href="/about">
                  <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden font-bold text-xl md:text-md tracking-widest text-white'>
                    ABOUT US
                  </button>
                </Link>
                <span className='mx-10 text-2xl font-bold'>or</span>
                <Link href="/quotation">
                  <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden font-bold text-xl md:text-md tracking-widest text-white'>
                    GET QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative flex justify-center md:items-center items-start w-screen h-[89vh]'>
            <Image
              src="/slider/3.jpg"
              fill={true}
              alt="slider"
              className='w-screen'
              priority={true}
              style={{ objectFit: "cover" }}
            />
            <div className='absolute flex flex-col items-center'>
              <h1 className='text-white font-bold text-6xl md:text-8xl'>Our Partners</h1>
              <span className='mt-10 h-[5px] w-[100px] bg-[#fdaf17]'></span>
              <p className='mt-10 text-white font-semibold text-3xl'>We work with UK and International Logistics companies</p>

              <div className='flex flex-col md:flex-row mt-10 items-center'>
                <Link href="/about">
                  <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden font-bold text-xl md:text-md tracking-widest text-white'>
                    ABOUT US
                  </button>
                </Link>
                <span className='mx-10 text-2xl font-bold'>or</span>
                <Link href="/quotation">
                  <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden font-bold text-xl md:text-md tracking-widest text-white'>
                    GET QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* {data.map((each, index) => {
        data.type === "video" ? (
          <div key={index} className='relative flex justify-center md:items-center items-start w-screen h-[89vh]'>
            <ReactPlayer url={data.bg} />
            <div className='absolute flex flex-col items-center'>
              <h1 className='text-white font-bold text-6xl md:text-8xl'>{data.heading}</h1>
              <span className='mt-10 h-[5px] w-[100px] bg-[#fdaf17]'></span>
              <p className='mt-10 text-white font-semibold text-3xl'>{data.para}</p>

              <div className='flex flex-col md:flex-row mt-10 items-center'>
                <Link href="/about">
                  <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden font-bold text-xl md:text-md tracking-widest text-white'>
                    ABOUT US
                  </button>
                </Link>
                <span className='mx-10 text-2xl font-bold'>or</span>
                <Link href="/quotation">
                  <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden font-bold text-xl md:text-md tracking-widest text-white'>
                    GET QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div key={index} className='relative flex justify-center md:items-center items-start w-screen h-[89vh]'>
            <Image
              src={data.bg}
              fill={true}
              alt="slider"
              className='w-screen'
              priority={true}
              style={{ objectFit: "cover" }}
            />
            <div className='absolute flex flex-col items-center'>
              <h1 className='text-white font-bold text-6xl md:text-8xl'>{data.heading}</h1>
              <span className='mt-10 h-[5px] w-[100px] bg-[#fdaf17]'></span>
              <p className='mt-10 text-white font-semibold text-3xl'>{data.para}</p>

              <div className='flex flex-col md:flex-row mt-10 items-center'>
                <Link href="/about">
                  <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden font-bold text-xl md:text-md tracking-widest text-white'>
                    ABOUT US
                  </button>
                </Link>
                <span className='mx-10 text-2xl font-bold'>or</span>
                <Link href="/quotation">
                  <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden font-bold text-xl md:text-md tracking-widest text-white'>
                    GET QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>)
      })} */}
    </div>
  )
}
