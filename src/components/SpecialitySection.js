
import React from 'react'
import { BsBoxes } from 'react-icons/bs'
import { FaTruck } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'
import { BsFillBuildingFill } from 'react-icons/bs'
import { MdFactory } from 'react-icons/md'
import { HiClipboardDocumentList } from 'react-icons/hi2'
import { FaClipboardList } from 'react-icons/fa'
import { AiFillIdcard } from 'react-icons/ai'
import { MdGpsFixed } from 'react-icons/md'
import { BsClockFill } from 'react-icons/bs'

export default function SpecialitySection() {
    return (
        <div className='bg-[#FFFFFF] '>

            <div className='bg-[#ccccccbb] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-8 lg:py-20 justify-between'>
                <div className='max-w-xl text-center self-center'>
                    <h1 className='font-bold text-2xl'>WE ARE A RELIABLE COURIER COMPANY SPECIALISING IN SAMEDAY DELIVERY SERVICE THROUGHOUT THE UK</h1>
                    <p>We are a customer driven business and our number one priority is to collect on time and deliver on time. We will collect within 60 minutes* (pending no traffic delay) and once the delivery reaches its intended destination, the customer will receive proof of delivery by SMS or email.</p>
                </div>
                <div className=' flex flex-col md:flex-row gap-x-16 mt-16 max-w-6xl'>

                    <div className='lg:flex-1 text-xs flex flex-col gap-x-6'>
                        <div className='flex flex-col md:flex-row gap-x-6'>
                            <span className='mb-20 font-bold text-7xl text-yellow-500'><BsBoxes /></span>
                            <p className='mb-5 font-bold text-xl max-w-xs text-center self-center'>We specialise in Same Day Nationwide and European Courier Service</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-x-6'>
                            <span className='mb-20 font-bold text-7xl text-yellow-500'><BsClockFill /></span>
                            <p className='mb-5 font-bold text-xl max-w-xs text-center self-center'>We operate on a 24 hour, 7 days a week courier service</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-x-6'>
                            <span className='mb-20 font-bold text-7xl text-yellow-500'><MdGpsFixed /></span>
                            <p className='mb-5 font-bold text-xl max-w-xs text-center self-center'>We operate on a 24 hour, 7 days a week courier service</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-x-6'>
                            <span className='mb-20 font-bold text-7xl text-yellow-500'><AiFillIdcard /></span>
                            <p className='mb-5 font-bold text-xl max-w-xs text-center self-center'>Immediate account facilities available with flexible payment options</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-x-6'>
                            <span className='mb-20 font-bold text-7xl text-yellow-500'><FaClipboardList /></span>
                            <p className='mb-5 font-bold text-xl max-w-xs text-center self-center'>We can do Monthly or Weekly contract runs</p>
                        </div>
                    </div>

                    <div className='lg:flex-1 text-xs flex flex-col gap-x-6'>
                        <div className='flex flex-col md:flex-row gap-x-6'>
                            <span className='mb-20 font-bold text-7xl text-yellow-500'><FaTruck /></span>
                            <p className='mb-5 font-bold text-xl max-w-xs text-center self-center'>Our fleet consists of small, short & long wheel and luton vans</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-x-6'>
                            <span className='mb-20 font-bold text-7xl text-yellow-500'><HiClipboardDocumentList /></span>
                            <p className='mb-5 font-bold text-xl max-w-xs text-center self-center'>A wide range of delivery options from a single document to a van load</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-x-6'>
                            <span className='mb-20 font-bold text-7xl text-yellow-500'><BsFillBuildingFill /></span>
                            <p className='mb-5 font-bold text-xl max-w-xs text-center self-center'>We have an Overnight Secure Storage Facility with CCTV (25/30 pallets)</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-x-6'>
                            <span className='mb-20 font-bold text-7xl text-yellow-500'><BsPersonFill /></span>
                            <p className='mb-5 font-bold text-xl max-w-xs text-center self-center'>Single point of contact with no call centre</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-x-6'>
                            <span className='mb-20 font-bold text-7xl text-yellow-500'><MdFactory /></span>
                            <p className='mb-5 font-bold text-xl max-w-xs text-center self-center'>We cover a wide range of businesses from Supply chain to Government Organisations</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
