
import Image from 'next/image'
import React from 'react'

export default function NetworkMain() {
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
          <h2 className='font-bold'>NETWORK</h2>
          <p>Our success is based on delivering on time and utilising global logistics companies to meet demands</p>
        </div>
      </div>



      <div className='bg-[#CCCCCC] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <h1 className='font-bold text-2xl'>OUR COURIER NETWORK</h1>
        <div className=' flex flex-col md:flex-row gap-x-8 mt-6 max-w-5xl'>

          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            <Image
              src="/apc-logo.png"
              width={300}
              height={300}
              alt="apc"
              className='mt-5 pb-10'
            />
            <h2 className='mb-5 font-bold text-2xl text-center'>APC OVERNIGHT: THE UK LARGEST INDEPENDENT DELIVERY NETWORK</h2>
            <p className='mb-5 text-center'>A parcel that is important enough to be sent overnight deserves the care and handling of APC Overnight. We’re proud to be the UK’s largest independent delivery network, with 105 locations. That means you’ll always leave your consignments in the hands of people who know you and your business; who care about helping you keep your promises. We specialise in timed deliveries, ensuring your package gets there when you said it would, and in pristine condition.

            </p>
          </div>
          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            <Image
              src="/tnt-logo.png"
              width={300}
              height={300}
              alt="tnt"
              className='mt-5 pb-10'
            />
            <h2 className='mb-5 font-bold text-2xl text-center'>TNT IS ONE OF THE WORLD’S LARGEST EXPRESS DELIVERY COMPANIES AND ARE PART OF FEDEX</h2>
            <p className='mb-5 text-center'>TNT Express, a FedEx company, is one of the world’s largest express delivery companies. On a daily basis, TNT Express delivers close to one million consignments ranging from documents and parcels to palletised freight. The company offers road and air delivery services in Europe, the Middle East and Africa, Asia-Pacific and the Americas.</p>
          </div>



        </div>
      </div>
    </div>
  )
}
