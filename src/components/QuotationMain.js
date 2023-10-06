
import React from 'react'

export default function QuotationMain() {
  return (
    <div className='bg-[#FFFFFF] w-full'>

      <div className='bg-[#FFFFFF] max-w-5xl text-black mx-auto flex items-start justify-start px-6 lg:px-4 py-4 lg:py-8'>
        <div className='justify-start'>
          <h2 className='font-bold'>QUOTATION</h2>
          <p>Complete our secure quotation form and we will get to you with a price</p>
        </div>
      </div>

      <div className='bg-[#CCCCCC] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <div className=' flex flex-col md:flex-row gap-x-4 mt-6 max-w-5xl'>
          <p>In order to receive a quotation you must complete the form fields below. Once you have completed the form simply click the submit button. An automated email will be sent with your form submission and one of our agents will contact you within 1 business working day with a quotation for your shipment requirements.</p>


        </div>
      </div>
    </div>
  )
}
