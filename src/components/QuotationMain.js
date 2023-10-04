
import React from 'react'

export default function QuotationMain() {
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
          <h2 className='font-bold'>QUOTATION</h2>
          <p>Complete our secure quotation form and we will get to you with a price</p>
        </div>
      </div>



      <div className='bg-[#DBE0D8] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <h1 className='font-bold text-2xl'>DIFFERENT TYPES OF VEHICLES</h1>

        <div className=' flex flex-col md:flex-row gap-x-12 mt-6 max-w-5xl text-center'>

          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            XXXXXXX
          </div>

          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            XXXXXXXX
          </div>

        </div>

        <div className=' flex flex-col md:flex-row gap-x-4 mt-6 max-w-5xl'>

          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            XXXXXX
          </div>

          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            XXXXXX
          </div>

        </div>
      </div>
    </div>
  )
}
