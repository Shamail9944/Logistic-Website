import { news } from '@/components/NewsMain'
import Image from 'next/image'
import React from 'react'
const page = ({ params }) => {
    console.log(params.item)
    const xId = params.item.toString()
    function findSpecificNews({ news }) {
        news.map((item, index) => {
            return (item.id === xId ? item : "No item found")
        })
    }
    console.log(findSpecificNews({ news }))
    return (
        <div className='bg-[#FFFFFF] w-full'>

            <div className='bg-[#FFFFFF] max-w-5xl text-black mx-auto flex items-start justify-start px-6 lg:px-0 py-4 lg:py-8'>
                <div className="justify-start">
                    <h2 className='font-bold text-[#FDAF17] text-[30px]'>Alpha</h2>
                </div>
            </div>

            {/* <div className='bg-[#FFFFFF] text-black mx-auto max-w-5xl flex flex-col items-start px-6 lg:px-4 py-4 lg:py-8 justify-between'>
                {item.map((object, index) => {
                    return (
                        <div key={index} className='flex flex-col mb-10'>
                            <Image
                                src={object.img}
                                width={1200}
                                height={500}
                                alt="Warehouse"
                                className='mb-4'
                            />
                            <div className='flex flex-col md:flex-row'>
                                <div>
                                    <p className='mb-5 text-black'>By {object.postBy} In {object.cat} Posted {object.date}</p>
                                    <h2 className='mb-5  text-2xl font-bold text-[#6C0287]'>{object.title}</h2>
                                    <p className='mb-5 text-black'>{object.headline}</p>

                                    <div className='flex justify-start pb-8'>
                                        <BtnNews item={item} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })}
            </div> */}
        </div>
    )
}

export default page