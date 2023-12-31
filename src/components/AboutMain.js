import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTruck } from 'react-icons/fa'
import { BiBarcodeReader } from 'react-icons/bi'
import { LuNetwork } from 'react-icons/lu'

export default function AboutMain() {
  return (
    <div className='bg-[#FFFFFF] w-full'>

      <div className='bg-[#FFFFFF] max-w-5xl text-black mx-auto flex items-start justify-start px-6 lg:px-0 py-4 lg:py-8 relative'>
        <div className='justify-start'>
          <h2 className='font-bold'>ABOUT</h2>
          <p>We are a reliable courier company specialising in sameday delivery service throughout the UK</p>
        </div>
        <div className="hidden md:block">
          <div className='absolute bottom-2 right-5 flex flex-row items-center bg-[#3938388e] px-4 rounded-md'>
            <h2 className='font-bold text-white'>Home</h2>
            <span className='font-bold text-white  text-2xl mx-2'>&#8594;</span>
            <h2 className='font-bold text-white'>About</h2>
          </div>
        </div>
      </div>

      <div className='bg-[#CCCCCC] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <div className=' flex flex-col md:flex-row gap-x-4 mt-6 max-w-5xl'>

          <div className='lg:flex-1 text-xs '>
            <p className=''>ASK Sameday Couriers specialises in Same Day instant commercial and domestic delivery service throughout the UK and Europe.</p>
            <p className='mb-4'>Whether you are a Government organisation that requires time critical or sensitive documents delivering, a printing or media company that needs to deliver an urgent print job, a supply chain company such as eBay or Amazon that needs to deliver an order on the same day to their customer; whatever type of parcel or item we can guarantee same day delivery by a reliable and professional driver.</p>
            <p className='mb-4'>If you are looking for a reliable courier company then we are at your disposal. We are registered with leading logistics companies such as APC Overnight & TNT/FedEx which allows us to access over 3000+ vehicles to handle both UK and European delivery demands.</p>
            <p className='mb-4'>We are a customer driven business and our number one priority is to collect on time and deliver on time. We will collect within 60 minutes* (pending no traffic delay) and once the delivery reaches its intended destination, the customer will receive proof of delivery by SMS or email. During transit, every vehicle is tracked by GPS and if there is any delay due to traffic conditions then we will notify our customer immediately with an estimated arrival time.</p>
          </div>

          <div className='lg:flex-1 text-xs'>
            <p className='mb-4'>Our customers can also be rest assured that all our vehicles and partner vehicles have full goods in transit insurance as full breakdown cover.</p>
            <p className='mb-4'>Although we are a young company, we are growing rapidly due to the rise in demand for British courier delivery firms spurred by online retail growth such as eBay, Amazon, Argos and other high street ecommerce companies which require fast delivery turnaround time slots.</p>
            <p className='mb-4'>Whatever your business needs and regardless of the size of goods, if you are looking for a reliable same day courier company then we are ready to work with you and will guarantee your parcel is dispatched same day, in the same condition it was collected and delivered on time anywhere in the UK.</p>
            <p className='mb-4'>We operate on a 24 hour, 7 days a week basis and offer a secure overnight storage facility with CCTV that can handle between 25 to 30 pallets.</p>
            <p className='mb-4 font-bold'>If you have any other particular delivery requirements or want to find out more information on our services then drop us a call and we will be happy to assist you further.</p>
          </div>

        </div>
        <div className='mt-6 max-w-5xl'>
          <Image
            src="/about-warehouse.jpg"
            width={1024}
            height={500}
            alt="Warehouse"
            className='mt-5 pb-10'
          />
        </div>
      </div>

      <div className='bg-[#DBE0D8] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>

        <h3 className="font-bold mb-5">LEARN MORE ABOUT OUR BUSINESS</h3>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='bg-[#e13f3f] flex items-center justify-center w-[350px] h-[400px] overflow-hidden rounded-md'
            style={{
              backgroundImage: `url('/services.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "330px",
              maxWidth: "350px",
              height: "400px",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="flex flex-col items-center justify-center bg-[#989898b5] p-12">
              <div className='font-bold text-9xl  text-[#FDAF17]  mb-5'><BiBarcodeReader /></div>
              <h2 className=' font-bold text-3xl mb-5 text-white'>Services</h2>
              <p className=' text-md text-center mb-3 font-semibold text-white'>We offer a bespoke courier service that meets your business demands</p>
              <Link href="/services">
                <button className='btn rounded-md border border-white/50 max-w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden bg-[#6C0287] font-bold text-xs md:text-md tracking-widest  text-white'>
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
          <div className='bg-[#e13f3f] flex items-center justify-center w-[350px] h-[400px] overflow-hidden rounded-md'
            style={{
              backgroundImage: `url('/fleet.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "330px",
              maxWidth: "350px",
              height: "400px",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="flex flex-col items-center justify-center bg-[#989898b5] p-12 ">
              <div className='font-bold text-9xl  text-[#FDAF17] mb-5'><FaTruck /></div>
              <h2 className=' font-bold text-3xl mb-5 text-white'>FLEET</h2>
              <p className=' text-md text-center mb-3 font-semibold text-white'>From small vans to long wheel based – we have the fleet to meet your needs</p>
              <Link href="/fleet">
                <button className='btn rounded-md border border-white/50 max-w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden hover:border-accent group bg-[#6C0287] font-bold text-xs  tracking-widest  text-white'>
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
          <div className='bg-[#e13f3f] flex items-center justify-center w-[350px] h-[400px] overflow-hidden rounded-md'
            style={{
              backgroundImage: `url('/network.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "330px",
              maxWidth: "350px",
              height: "400px",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="flex flex-col items-center justify-center bg-[#989898b5] p-12">
              <div className='font-bold text-9xl  text-[#FDAF17] mb-5'><LuNetwork /></div>
              <h2 className=' font-bold text-3xl mb-5 text-white'>NETWORK</h2>
              <p className=' text-md text-center mb-3 font-semibold text-white'>Our success is based on a strong relationship with our logistic partners</p>
              <Link href="/network">
                <button className='btn rounded-md border border-white/50 max-w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden hover:border-accent group bg-[#6C0287] font-bold text-xs  tracking-widest  text-white'>
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
