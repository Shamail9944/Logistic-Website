'use client'

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


export default function SliderHome() {
  const images = [
    '/slider/1.jpg',
    '/slider/2.jpg',
    '/slider/3.avif',
    '/slider/4.jpg',
    '/slider/5.jpg'
  ];

  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinity: true,

    prevArrow: (
      <div className='mx-5 md:mx-10  top-45 md:top-40'>
        <div className='h-15 w-15 p-2 bg-[#27262675] rounded-full'>
          <ArrowLeftCircleIcon className='h-10 w-10 text-amber-400 curser-pointer' />
        </div>
      </div>
    ),
    nextArrow: (
      <div className='mx-5 md:mx-10  top-45 md:top-40'>
        <div className='h-15 w-15 p-2 bg-[#27262675] rounded-full'>
          <ArrowRightCircleIcon className='h-10 w-10 text-amber-400 curser-pointer' />
        </div>
      </div>
    ),
  }
  return (
    <div className="w-full">

      <div className="slide-container">
        <Zoom {...zoomInProperties}>
          {images.map((each, index) =>
            <div key={index} className='flex justify-center md:items-center items-start w-screen h-[60vh] relative'>
              <Image
                src={each}
                layout="fill"
                objectFit="cover" // change to suit your needs
                alt="slider"
                className='w-screen'
              />
            </div>
          )}
        </Zoom>
      </div>
    </div>
  )
}
