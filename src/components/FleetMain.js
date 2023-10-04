
import Image from 'next/image'
import React from 'react'
import { AiOutlineFullscreen } from 'react-icons/ai'
import { LuBoxes } from 'react-icons/lu'

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



      <div className='bg-[#DBE0D8] text-black mx-auto max-w-8xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>
        <h1 className='font-bold text-2xl'>DIFFERENT TYPES OF VEHICLES</h1>

        <div className=' flex flex-col md:flex-row gap-x-12 mt-6 max-w-4xl text-center'>

          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            <Image
              src="/small-van.png"
              width={300}
              height={300}
              alt="Warehouse"
              className='mt-5 pb-10'
            />
            <h2 className='mb-5 font-bold text-xl'>SMALL VANS</h2>
            <p className='mb-5'>Despite their size small vans have a deceptively big load space which means that you could carry a large number of items easily. They are also economical and agile enough to be driven short distances around local distances.</p>
            <p className='mb-5'>Capable of carrying up to 856 kg in weight and are ideal for quick deliveries such as parts, documents, white goods such as furniture, cookers, electrical items, computers, stationary etc.</p>
            <div className='text-6xl my-4 '><AiOutlineFullscreen /></div>
            <h2 className="font-bold">APPROXIMATE LOAD SPACE DIMENSIONS</h2>
            <p className="">Length: 1.8m, Width: 1.2m, Height: 1.2m</p>
            <div className='text-6xl my-4 '><LuBoxes /></div>
            <h2 className="font-bold">APPROXIMATE PAY LOAD</h2>
            <p className="">648 – 856kg or 1 euro pallet equivalence</p>
          </div>

          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            <Image
              src="/short-wheel-van.png"
              width={300}
              height={300}
              alt="Warehouse"
              className='mt-5 pb-10'
            />
            <h2 className='mb-5 font-bold text-xl'>SHORT WHEEL VANS</h2>
            <p className='mb-5'>Short wheel based vans provide a fairly large load space which can carry 8×4 sheets and two Euro pallets.</p>
            <p className='mb-5'>Able to carry up to 1.5 tonnes of cargo with a load space of 5-6 cubic metres, the medium van is the most popular size of van in the UK. These vans are suitable for both short and long journeys and ideal for transporting items that might not fit into a small van such as furniture, household goods, white goods, bulk printing material, parts and components, supply chain goods and any other packages of all sizes as short wheel vans have great load height.</p>
            <div className='text-6xl my-4 '><AiOutlineFullscreen /></div>
            <h2 className="font-bold">APPROXIMATE LOAD SPACE DIMENSIONS</h2>
            <p className="">Length: 2.4m, Width: 1.7m, Height: 1.4m</p>
            <div className='text-6xl my-4 '><LuBoxes /></div>
            <h2 className="font-bold">APPROXIMATE PAY LOAD</h2>
            <p className="">900 – 1200kg or 2 euro pallet equivalence</p>
          </div>

        </div>

        <div className=' flex flex-col md:flex-row gap-x-4 mt-6 max-w-4xl'>

          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            <Image
              src="/long-van.png"
              width={300}
              height={300}
              alt="Warehouse"
              className='mt-5 pb-10'
            />
            <h2 className='mb-5 font-bold text-xl'>LONG WHEEL VANS</h2>
            <p className='mb-5'>Long wheel vans are typically ideal for transporting big bulky loads such as logistics or removals. They tend to offer an extra three cubic metres of load space compared to short wheel based vans so that you can transport larger and longer loads.</p>
            <p className='mb-5'>These vans are ideal for larger cargo with a one tonne payload that are capable of carrying large objects such as engineering parts, large white goods such as fridge freezer, bulky office or home furniture, large consignment of printing material or lots of goods. Long wheel vans have a high roof and extended wheelbase with maximum storage space that can carry tall items that are easy to load and offload making it easy to move heavy loads on longer distances throughout the UK.</p>
            <div className='text-6xl my-4 '><AiOutlineFullscreen /></div>
            <h2 className="font-bold">APPROXIMATE LOAD SPACE DIMENSIONS</h2>
            <p className="">Length: 4.3m, Width: 1.8m, Height: 1.9m</p>
            <div className='text-6xl my-4 '><LuBoxes /></div>
            <h2 className="font-bold">APPROXIMATE PAY LOAD</h2>
            <p className="">1200 – 1500kg or 3 euro pallet equivalence</p>
          </div>

          <div className='lg:flex-1 text-xs flex flex-col items-center'>
            <Image
              src="/luton-van.png"
              width={300}
              height={300}
              alt="Warehouse"
              className='mt-5 pb-10'
            />
            <h2 className='mb-5 font-bold text-xl'>LUTON VANS</h2>
            <p className='mb-5'>A Luton is a long wheel base van fitted with a large box on its back. This type of van offers great flexibility to accommodate large consignments to the shape of its box. It is also very suitable to move heavy objects due to its load space. Loading and off-loading is also easier as these types of vans are equipped with a tailback lift. Luton vans are Ideal for carrying bulky items as well as a large number of boxes that can easily be stacked on top of each other.</p>
            <p className='mb-5'>Whether you require delivery of a piano, large consignment of boxes, large household or office furniture, white goods or any other bulky item that requires careful loading and off-loading then a Luton is the ideal logistics delivery van.</p>
            <div className='text-6xl my-4 '><AiOutlineFullscreen /></div>
            <h2 className="font-bold">APPROXIMATE LOAD SPACE DIMENSIONS</h2>
            <p className="">Length: 3.4m, Width: 2.0m, Height: 1.88m</p>
            <div className='text-6xl my-4 '><LuBoxes /></div>
            <h2 className="font-bold">APPROXIMATE PAY LOAD</h2>
            <p className="">1600 – 1800kg or 4 euro pallet equivalence</p>
          </div>

        </div>
      </div>
    </div>
  )
}
