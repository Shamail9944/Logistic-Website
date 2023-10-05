
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
              <Image className="w-full" src="/slider/1.jpg" height={100} width={100} alt="Sunset in the mountains" />

              <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-xl mb-2">FEDEX TNT ACQUISITION</div>
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
              <Image className="w-full" src="/network.jpg" height={100} width={100} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-xl mb-2">FEDEX TNT ACQUISITION</div>
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
              <Image className="w-full" src="/services.jpg" height={100} width={100} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-xl mb-2">FEDEX TNT ACQUISITION</div>
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
              <Image className="w-full" src="/fleet.jpg" height={100} width={100} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-xl mb-2">FEDEX TNT ACQUISITION</div>
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
          </div>
        </div>
      </div>
    </div>
  )
}
