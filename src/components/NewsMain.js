
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiShareAlt } from 'react-icons/bi'


const news = [
  {
    img: "/fleet.jpg",
    postBy: "ASK Sameday Couriers",
    cat: "Industry News",
    date: "14th November 2018",
    title: "FEDEX TNT ACQUISITION",
    headline: "Combining forces to give your business even more power. The FedEx integration of TNT is making solid progress.",
    articlecontext: "Combining forces to give your business even more power.The FedEx integration of TNT is making solid progress. With the combination of our networks, you now have access to a robust portfolio of FedEx services and solutions to help you grow your business.",
    articlearticleImg: "https://asksamedaycouriers.co.uk/cmsbo/wp-content/uploads/2018/11/connect-infographic.jpg"
  },
  {
    img: "/network.jpg",
    postBy: "ASK Sameday Couriers",
    cat: "Industry News",
    date: "14th November 2018",
    title: "UNPACKING THE DEMAND OF THE UK COURIER",
    headline: "Combining forces to give your business even more power. The FedEx integration of TNT is making solid progress. With the combination of our networks, you now have access to a robust portfolio of ",
    articlecontext: "Combining forces to give your business even more power.The FedEx integration of TNT is making solid progress. With the combination of our networks, you now have access to a robust portfolio of FedEx services and solutions to help you grow your business.",
    articlearticleImg: ""
  },
  {
    img: "/services.jpg",
    postBy: "ASK Sameday Couriers",
    cat: "Industry News",
    date: "14th November 2018",
    title: "FEDEX TNT ACQUISITION",
    headline: "Combining forces to give your business even more power. The FedEx integration of TNT is making solid progress. With the combination of our networks, you now have access to a robust portfolio of ",
    articlecontext: "Combining forces to give your business even more power.The FedEx integration of TNT is making solid progress. With the combination of our networks, you now have access to a robust portfolio of FedEx services and solutions to help you grow your business.",
    articlearticleImg: ""
  },

]

export default function NewsMain() {
  return (
    <div className='bg-[#FFFFFF] w-full'>

      <div className='bg-[#FFFFFF] max-w-5xl text-black mx-auto flex items-start justify-start px-6 lg:px-0 py-4 lg:py-8'>
        <div className="justify-start">
          <h2 className='font-bold text-[#FDAF17] text-[30px]'>FEDEX TNT ACQUISITION</h2>
        </div>
      </div>

      <div className='bg-[#FFFFFF] text-black mx-auto max-w-5xl flex flex-col items-start px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        {news.map((item, index) => {
          return (
            <div key={index} className='flex flex-col mb-10'>
              <Image
                src={item.img}
                width={1200}
                height={500}
                alt="Warehouse"
                className='mb-4'
              />
              <div className='flex flex-col md:flex-row'>
                <div className='mr-5 my-5 text-4xl text-slate-600'><BiShareAlt /></div>
                <div>
                  <p className='mb-5 text-black'>By {item.postBy} In {item.cat} Posted {item.date}</p>
                  <h2 className='mb-5  text-2xl font-bold text-[#6C0287]'>{item.title}</h2>
                  <p className='mb-5 text-black'>{item.headline}</p>

                  <div className='flex justify-start pb-8'>
                    <Link href="/">
                      <button className='btn rounded-md border border-white/50 max-w-[200px] h-[50px] px-8 flex items-center justify-center overflow-hidden hover:border-accent group bg-[#6C0287] font-bold text-sm text-white'>
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )

        })}
      </div>
    </div>
  )
}
