
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Dropdowns from './Dropdowns'
import SliderServices from './SliderServices'

export default function ServicesMain() {
  return (
    <div className='bg-[#FFFFFF] w-full'>
      <div className='bg-[#FFFFFF] max-w-5xl text-black mx-auto flex items-start justify-start px-6 lg:px-4 py-4 lg:py-8'>
        <div className='justify-start'>
          <h2 className='font-bold'>SERVICES</h2>
          <p>We offer a bespoke courier service that meets your business demands</p>
        </div>
      </div>

      <div className='bg-[#CCCCCC] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <div className=' flex flex-col gap-x-4 mt-6 max-w-5xl'>

          <div className='lg:flex-1 text-xs '>
            <p className='mb-4'>ASK Sameday Couriers is based in West Yorkshire that not only serves within the region but also covers the length and breadth of the United Kingdom as well as Europe.</p>
          </div>

          <div className='lg:flex-1 text-xs'>
            <p className='mb-4'>We offer a same day service that is highly competitive, delivered on time, fully insured and tracked throughout its delivery. We work with a wide range of businesses in various sectors offering a collection and delivery service by professional and courteous drivers providing a cost-effective solution.</p>
          </div>

          <Image
            src="/warehouse.jpg"
            width={900}
            height={500}
            alt="Warehouse"
            className='mt-5 pb-10'
          />

        </div>

      </div>

      <div className='bg-[#FFFFFF] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <div className='max-w-5xl'>
          <h3 className="font-bold mb-5">WHAT WE OFFER</h3>
          <p className=" mb-5">ASK Sameday Couriers offers a wide range of services:</p>
          <div className='flex flex-col md:flex-row gap-x-10'>
            <div className='max-w-2xl flex-1'>
              <ul className="list-disc">
                <li>Same Day Nationwide and European Courier Service</li>
                <li>Priority and Urgent Delivery</li>
                <li>Monthly or Weekly Contract Runs</li>
                <li>Timed and Schedules Deliveries</li>
                <li>Specialise in Small, Short & Long wheel and Luton vans</li>
                <li>All our vehicles have Full GPS Tracking Facility</li>
                <li>We have access to a vast network of drivers all across the UK</li>
                <li>24 Hour / 7 Days a week operational service</li>
                <li>We offer Competitive Pricing based on genuine quotes</li>
                <li>Registered with Courier Exchange, APC Overnight and TNT</li>
                <li>Full AA Breakdown cover</li>
                <li>Instant Proof of delivery document</li>
                <li>Full goods in transit insurance</li>
                <li>No collection fuel surcharge</li>
                <li>No out of hours or weekend fuel surcharge</li>
              </ul>
            </div>
            <div className='max-w-2xl flex-1'>
              <ul className="list-disc">
                <li>Collect within 60* minutes anywhere in the UK (*based on clear traffic with no delays)</li>
                <li>Immediate account facilities available with flexible payment options</li>
                <li>A wide range of delivery options, from a single document to a full van load</li>
                <li>Single point of contact  no call centre</li>
                <li>Customer service driven</li>
                <li>Each shipment is delivered with care</li>
                <li>Professional and courteous drivers</li>
                <li>Bespoke courier services to meet your needs and demands</li>
                <li>Overnight Secure Storage with CCTV 25/30 Pallet storage facility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#DDDDDD] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <div className="max-w-5xl">

          <h3 className="font-bold mb-5">PERMISSIBLE ITEMS & BUSINESS SECTORS</h3>
          <p className=" mb-5">We can handle any type of parcel as long as it is correctly packaged and is not listed in our prohibited* items list shown below. Our courier services covers a wide range of business sectors:</p>
          <div className='flex flex-col md:flex-row gap-x-10'>
            <SliderServices />
          </div>
          <p className="text-[#6C0287] mb-5">All items should be packed in appropriate packaging with quilted lining or bubble wrap. Furthermore, if you wish to save the trunk from damage, you should pack it into an extra box.</p>
        </div>
      </div>


      <div className='bg-[#DBE0D8] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <div className="max-w-5xl">

          <h3 className="font-bold mb-5">*PROHIBITED ITEMS</h3>
          <p className=" mb-5">Below are examples of items that could be defined as <span className='text-[#6C0287]'>Prohibited</span> dependent on the country of origin, transit and destination which include but are not limited to:</p>
          <div className='flex flex-col md:flex-row gap-x-10'>
            <Dropdowns />
          </div>
          <p className=" mb-5">For further information on restricted and non-compensation items speak to one of our courier experts by email: info@asksamedaycouriers.co.uk.</p>
        </div>
      </div>

    </div>
  )
}
