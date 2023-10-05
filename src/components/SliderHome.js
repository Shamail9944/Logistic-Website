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
      <div className='mx-10 top-20 md:top-40'>
        <ArrowLeftCircleIcon className='h-10 w-10 text-amber-400 curser-pointer' />
      </div>
    ),
    nextArrow: (
      <div className='mx-10 top-20 md:top-40'>
        <ArrowRightCircleIcon className='h-10 w-10 text-amber-400 curser-pointer' />
      </div>
    ),
  }
  return (
    <div className="slide-container">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) =>
          <div key={index} className='flex justify-center md:items-center items-start w-screen h-96 relative'>
            {/* <img className="w-screen" src={each} alt="slider" /> */}
            <Image
              src={each}
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              alt="slider"
              className='w-screen'
            />
          </div>
        )}
      </Zoom>
    </div>
  )
}
