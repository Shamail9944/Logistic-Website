
import Image from 'next/image'
import React from 'react'
import { AiOutlineFullscreen } from 'react-icons/ai'

export default function FleetMain() {
  return (
    <div className='bg-[#FFFFFF]'>


      <div className='bg-[#CCCCCC] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'
      // style={{
      //   backgroundImage: `url(/network-banner.jpg)`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   width: "100vw",
      //   height: "100vh"
      // }}
      >
        <div className='flex flex-col max-w-4xl text-black'>
          <h2 className='font-bold'>FLEET</h2>
          <p>From small vans to long wheel based - we have the fleet to meet your needs</p>
        </div>
      </div>



      <div className='bg-[#FFFFFF] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <h1 className='font-bold text-2xl'>DIFFERENT TYPES OF VEHICLES</h1>
       
        <div className=' flex flex-col md:flex-row gap-x-4 mt-6 max-w-4xl'>

          <div className='lg:flex-1 text-xs '>
            <Image
              src="/warehouse.jpg"
              width={300}
              height={300}
              alt="Warehouse"
              className='mt-5 pb-10'
            />
            <h2 className='mb-5 font-bold text-2xl'>SMALL VANS</h2>
            <p className='mb-5'>Despite their size small vans have a deceptively big load space which means that you could carry a large number of items easily. They are also economical and agile enough to be driven short distances around local distances.</p>
            <p className='mb-5'>Capable of carrying up to 856 kg in weight and are ideal for quick deliveries such as parts, documents, white goods such as furniture, cookers, electrical items, computers, stationary etc.</p>
            <div className='text-9xl '><AiOutlineFullscreen /></div>
            <h2 className="">APPROXIMATE LOAD SPACE DIMENSIONS</h2>
            <p className="">Length: 1.8m, Width: 1.2m, Height: 1.2m</p>
            <div className='text-9xl '><AiOutlineFullscreen /></div>
            <h2 className="">APPROXIMATE PAY LOAD</h2>
            <p className="">648 – 856kg or 1 euro pallet equivalence</p>
          </div>

          <div className='lg:flex-1 text-xs '>
            <Image
              src="/warehouse.jpg"
              width={300}
              height={300}
              alt="Warehouse"
              className='mt-5 pb-10'
            />
            <h2 className='mb-5 font-bold text-2xl'>SMALL VANS</h2>
            <p className='mb-5'>Despite their size small vans have a deceptively big load space which means that you could carry a large number of items easily. They are also economical and agile enough to be driven short distances around local distances.</p>
            <p className='mb-5'>Capable of carrying up to 856 kg in weight and are ideal for quick deliveries such as parts, documents, white goods such as furniture, cookers, electrical items, computers, stationary etc.</p>
            <div className='text-9xl '><AiOutlineFullscreen /></div>
            <h2 className="">APPROXIMATE LOAD SPACE DIMENSIONS</h2>
            <p className="">Length: 1.8m, Width: 1.2m, Height: 1.2m</p>
            <div className='text-9xl '><AiOutlineFullscreen /></div>
            <h2 className="">APPROXIMATE PAY LOAD</h2>
            <p className="">648 – 856kg or 1 euro pallet equivalence</p>
          </div>

        </div>
        
        <div className=' flex flex-col md:flex-row gap-x-4 mt-6 max-w-4xl'>

          <div className='lg:flex-1 text-xs '>
            <Image
              src="/warehouse.jpg"
              width={300}
              height={300}
              alt="Warehouse"
              className='mt-5 pb-10'
            />
            <h2 className='mb-5 font-bold text-2xl'>SMALL VANS</h2>
            <p className='mb-5'>Despite their size small vans have a deceptively big load space which means that you could carry a large number of items easily. They are also economical and agile enough to be driven short distances around local distances.</p>
            <p className='mb-5'>Capable of carrying up to 856 kg in weight and are ideal for quick deliveries such as parts, documents, white goods such as furniture, cookers, electrical items, computers, stationary etc.</p>
            <div className='text-9xl '><AiOutlineFullscreen /></div>
            <h2 className="">APPROXIMATE LOAD SPACE DIMENSIONS</h2>
            <p className="">Length: 1.8m, Width: 1.2m, Height: 1.2m</p>
            <div className='text-9xl '><AiOutlineFullscreen /></div>
            <h2 className="">APPROXIMATE PAY LOAD</h2>
            <p className="">648 – 856kg or 1 euro pallet equivalence</p>
          </div>

          <div className='lg:flex-1 text-xs '>
            <Image
              src="/warehouse.jpg"
              width={300}
              height={300}
              alt="Warehouse"
              className='mt-5 pb-10'
            />
            <h2 className='mb-5 font-bold text-2xl'>SMALL VANS</h2>
            <p className='mb-5'>Despite their size small vans have a deceptively big load space which means that you could carry a large number of items easily. They are also economical and agile enough to be driven short distances around local distances.</p>
            <p className='mb-5'>Capable of carrying up to 856 kg in weight and are ideal for quick deliveries such as parts, documents, white goods such as furniture, cookers, electrical items, computers, stationary etc.</p>
            <div className='text-9xl '><AiOutlineFullscreen /></div>
            <h2 className="">APPROXIMATE LOAD SPACE DIMENSIONS</h2>
            <p className="">Length: 1.8m, Width: 1.2m, Height: 1.2m</p>
            <div className='text-9xl '><AiOutlineFullscreen /></div>
            <h2 className="">APPROXIMATE PAY LOAD</h2>
            <p className="">648 – 856kg or 1 euro pallet equivalence</p>
          </div>

        </div>
      </div>
    </div>
  )
}
