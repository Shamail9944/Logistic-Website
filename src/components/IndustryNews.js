
import Image from 'next/image'
import React from 'react'

export default function IndustryNews() {
  return (
    <div className='bg-[#FFFFFF] '>

      <div className='bg-[#dadadaa0] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-8 lg:py-10 justify-between'>
        <div className='max-w-7xl text-center self-center'>
          <h2 className='text-xl md:text-3xl font-bold'>INDUSTRY NEWS</h2>
          <div className='flex flex-col md:flex-row gap-x-4 mt-6'>
            <div className="max-w-sm rounded overflow-hidden mt-5 shadow-lg">
              <Image className="w-full" src="/news/news-1.jpg" height={250} width={200} alt="Sunset in the mountains" />

              <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-lg mb-2">FEDEX TNT ACQUISITION</div>
                <p className="text-gray-700 text-xs ">
                  Combining forces to give your business even more power. The FedEx integration of TNT is making solid progress. With the combination of our networks, you now have access to a robust portfolio of FedEx services and solutions to help you grow your business.
                </p>
              </div>
              <div className="px-0 pt-0 pb-0 md:px-6 md:pt-4 md:pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#FEDEX</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TNT</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ACQUISITION</span>
              </div>

            </div>
            <div className="max-w-sm rounded overflow-hidden mt-5 shadow-lg">
              <Image className="w-full" src="/news/news-2.jpg" height={250} width={200} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-lg mb-2">UNPACKING THE DEMAND OF THE UK COURIER</div>
                <p className="text-gray-700 text-xs ">
                  The battle between online and in-store shopping is changing the way we purchase products. Moreover, it’s changing the way we receive these purchased goods. Research suggests that UK shoppers are more likely to shop online for goods than in-store, the reason being that online shopping provides customers with more choice, the ability to compare prices.
                </p>
              </div>
              <div className="px-0 pt-0 pb-0 md:px-6 md:pt-4 md:pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DEMAND</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#UK</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#COURIER</span>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden mt-5 shadow-lg">
              <Image className="w-full" src="/news/news-3.jpg" height={250} width={200} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-lg mb-2">COURIER AND EXPRESS DELIVERY MARKET POSTS £1 BILLION INCREASE IN SALES IN 2016</div>
                <p className="text-gray-700 text-xs ">
                  That familiar knock on the door or ring of the doorbell – it seems Britain has never been busier receiving parcels and packages by courier and express delivery. Indeed, Mintel’s Courier and Express Delivery UK 2017 report reveals that the courier and express delivery market* witnessed an impressive £1 billion increase in sales in 2016.
                </p>
              </div>
              <div className="px-0 pt-0 pb-0 md:px-6 md:pt-4 md:pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#EXPRESS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SALES</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DELIVERY</span>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden mt-5 shadow-lg">
              <Image className="w-full" src="/news/news-4.png" height={250} width={200} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-lg mb-2">UK COURIER MARKET SURGES AS E-SHOPPING BOOMS – MINTEL</div>
                <p className="text-gray-700 text-xs ">
                  The importance of the online retail channel to the UK has become very clear from a new Mintel report that shows Britons sent 2.8 billion packages in 2016 and the market for courier and express delivery hit £10.1 billion last year. The research firm said Britain is busier than ever taking parcel deliveries by courier.
                </p>
              </div>
              <div className="px-0 pt-0 pb-0 md:px-6 md:pt-4 md:pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#UK</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#COURIER-MARKET</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#BOOM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
