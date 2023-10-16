'use client'
import { news } from '@/components/NewsMain'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
const page = ({ params }) => {
    const XId = params.item
    // console.log(XId)
    const findObject = XId => news.find(item => item.id === XId)
    const reqObject = findObject(XId)
    // console.log(reqObject);
    return (
        <div className='bg-[#FFFFFF] w-full'>

            <div className='bg-[#FFFFFF] max-w-5xl text-black mx-auto flex items-start justify-start px-6 lg:px-0 py-4 lg:py-8'>
                <div className="justify-start">
                    <h2 className='font-bold text-[#FDAF17] text-[30px]'>{reqObject.title}</h2>
                </div>
            </div>

            <div className='bg-[#FFFFFF] text-black mx-auto max-w-5xl flex flex-col items-start px-6 lg:px-4 py-4 lg:py-8 justify-between'>
                <div className='flex flex-col mb-10'>
                    <Image
                        src={reqObject.img}
                        width={1200}
                        height={500}
                        alt="Warehouse"
                        className='mb-4'
                    />
                    <div className='flex flex-col md:flex-row'>
                        <div>
                            <p className='mb-5 text-black'>By {reqObject.postBy} In {reqObject.cat} Posted {reqObject.date}</p>
                            <h2 className='mb-2 text-2xl font-bold text-[#6C0287]'>{reqObject.title}</h2>
                            <p className='mb-5 text-black'>{reqObject.headline}</p>
                        </div>
                    </div>
                    {reqObject.article.map((object, index) => {
                        return (
                            <div key={index}>
                                <p className='mb-5 text-black'>{object.starter}</p>
                                {object.h1 ? <h2 className='mb-2 text-2xl font-bold text-[#6C0287]'>{object.h1}</h2> : ""}
                                {object.p1 ? <p className='mb-5 text-black'>{object.p1}</p> : ""}
                                {object.h2 ? <h2 className='mb-2 text-2xl font-bold text-[#6C0287]'>{object.h2}</h2> : ""}
                                {object.p2 ? <p className='mb-5 text-black'>{object.p2}</p> : ""}
                                {object.h3 ? <h2 className='mb-2 text-2xl font-bold text-[#6C0287]'>{object.h3}</h2> : ""}
                                {object.p3 ? <p className='mb-5 text-black'>{object.p3}</p> : ""}
                                {object.h4 ? <h2 className='mb-2 text-2xl font-bold text-[#6C0287]'>{object.h4}</h2> : ""}
                                {object.p4 ? <p className='mb-5 text-black'>{object.p4}</p> : ""}
                                {object.h5 ? <h2 className='mb-2 text-2xl font-bold text-[#6C0287]'>{object.h5}</h2> : ""}
                                {object.p5 ? <p className='mb-5 text-black'>{object.p5}</p> : ""}
                            </div>
                        )
                    })}
                    {reqObject.articlearticleImg ? <Image
                        src={reqObject.articlearticleImg}
                        width={1200}
                        height={500}
                        alt="Warehouse"
                        className='mb-4'
                    /> : ""}
                    <Link href={reqObject.readMoreBtnLink}>
                        <button className='btn rounded-md border border-white/50 w-[250px] h-[50px] px-4 flex items-center justify-center overflow-hidden bg-[#6C0287] font-bold text-lg md:text-md text-white'>
                            Read Article
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default page