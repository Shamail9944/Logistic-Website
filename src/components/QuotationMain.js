'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation'


export default function QuotationMain() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [collectionPostcode, setCollectionPostcode] = useState("");
  const [dileveryPostcode, setDileveryPostcode] = useState("");
  const [parcelDetail, setParcelDetail] = useState("");
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    if (submitted) { return; }
    setFullName(""); setEmail(""); setPhone(""); setCollectionPostcode(""); setDileveryPostcode(""); setParcelDetail(""); setCode(""); setSubmitted(true);
    console.log(fullName, email, phone, collectionPostcode, dileveryPostcode, parcelDetail, code);
    const res = await fetch("/api/quotation", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fullName, email, phone, collectionPostcode, dileveryPostcode, parcelDetail, code }),
    }).then((res) => {
      if (res.status === 200) {
        toast.success('Quotation Request sent successfully. We will reach back shortly.', {
          type: "success",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error('Failed to send Quotation. Please Call on contact numbers provided.', {
          type: "error",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      // router.push('/')
      // redirect('/')
      return
    })
    // console.log(await res.json())
  }

  return (
    <div className='bg-[#FFFFFF] w-full'>

      <div className='bg-[#FFFFFF] max-w-5xl text-black mx-auto flex items-start justify-start px-6 lg:px-0 py-4 lg:py-8'>
        <div className='justify-start'>
          <h2 className='font-bold'>QUOTATION</h2>
          <p>Complete our secure quotation form and we will get to you with a price</p>
        </div>
      </div>

      <div className='bg-[#DBE0D8] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-0 py-4 lg:py-8 justify-between'>
        <div className=' flex flex-col gap-x-4 mt-6 max-w-5xl'>
          <p>In order to receive a quotation you must complete the form fields below. Once you have completed the form simply click the submit button. An automated email will be sent with your form submission and one of our agents will contact you within 1 business working day with a quotation for your shipment requirements.</p>

          <div className='border-2 border-solid border-[#FDAF17] px-6 py-4 rounded-lg my-4'>
            <form className='flex flex-col gap-1 w-full mx-auto'
              onSubmit={sendMail}>
              <div className=''>
                <h2 className='text-2xl font-semibold'>QUICK QUOTE</h2>
              </div>
              <div className='bg-[#FDAF17] h-1'></div>

              <input
                name='name'
                id='name'
                type="text"
                placeholder='Full Name'
                className='input mt-4 p-2 rounded-lg'
                required
                value={fullName}
                onChange={(e) => { setFullName(e.target.value); }} />

              <input
                name='email'
                id='email'
                type="text"
                placeholder='Email'
                className='input mt-4 p-2 rounded-lg'
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); }} />

              <input
                name='phone'
                id='phone'
                type="number"
                placeholder='Phone'
                className='input mt-4 p-2 rounded-lg'
                required
                value={phone}
                onChange={(e) => { setPhone(e.target.value); }} />

              <input
                name='collection-postcode'
                id='collection-postcode'
                type="text"
                placeholder='Collection Postcode'
                className='input mt-4 p-2 rounded-lg'
                value={collectionPostcode}
                onChange={(e) => { setCollectionPostcode(e.target.value); }} />

              <input
                name='dilevery-postcode'
                id='dilevery-postcode'
                type="text"
                placeholder='Dilevery Postcode'
                className='input mt-4 p-2 rounded-lg'
                value={dileveryPostcode}
                onChange={(e) => { setDileveryPostcode(e.target.value); }} />

              <textarea
                name='Parcel-Detail'
                id='message'
                type="text"
                rows={10}
                placeholder='Parcel-Detail'
                className="textarea mt-4 p-2 rounded-lg"
                required
                value={parcelDetail}
                onChange={(e) => { setParcelDetail(e.target.value); }}
              ></textarea>
              <p>Please provide parcel details for example: Parcel 1: Length: 1000mm, Width: 500mm, Height: 400mm, Weight: 3kg, Parcel 2: ...</p>


              <div>
                <h2 className='text-2xl font-semibold mt-12'>Verification Code</h2>
                <div className='bg-[#FDAF17] '></div>
                <div className='flex flex-row justify-between w-full'>
                  <input
                    name='code'
                    id='code'
                    type="number"
                    placeholder='2-Digit Code'
                    className='input mt-4 p-2 rounded-lg'
                    required
                    value={code}
                    onChange={(e) => { setCode(e.target.value); }} />

                  <button
                    className='btn rounded-full border font-bold bg-[#FDAF17] max-w-[170px] px-8 mt-5  flex items-center justify-center overflow-hidden hover:border-accent group'
                    type="submit">

                    <span className='group:hover:-translate-y-[120%] group:hover:opacity-0 transition-all duration-500'>Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
