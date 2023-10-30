
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiShareAlt } from 'react-icons/bi'
import BtnNews from './BtnNews'


export const news = [
  {
    id: "1",
    img: "/news/news-1.jpg",
    title: "FEDEX TNT ACQUISITION",
    postBy: "ASK Sameday Couriers",
    date: "14th November 2018",
    cat: "Industry News",
    headline: "Combining forces to give your business even more power. The FedEx integration of TNT is making solid progress.",
    article: [
      { starter: "Combining forces to give your business even more power.\n\nThe FedEx integration of TNT is making solid progress. With the combination of our networks, you now have access to a robust portfolio of FedEx services and solutions to help you grow your business." },
    ],
    readMoreBtnLink: "https://asksamedaycouriers.co.uk/cmsbo/wp-content/uploads/2018/11/connect-infographic.jpg",
    articlearticleImg: "/news/news-11.jpg"
  },
  {
    id: "2",
    img: "/news/news-2.jpg",
    title: "UNPACKING THE DEMAND OF THE UK COURIER",
    postBy: "ASK Sameday Couriers",
    date: "14th November 2018",
    cat: "Industry News",
    headline: "The battle between online and in-store shopping is changing the way we purchase products. Moreover, it’s changing the way we receive these purchased goods.",
    article: [
      { starter: "The battle between online and in-store shopping is changing the way we purchase products. Moreover, it’s changing the way we receive these purchased goods. Research suggests that UK shoppers are more likely to shop online for goods than in-store, the reason being that online shopping provides customers with more choice, the ability to compare prices easily and indeed cheaper prices altogether … all from the comfort of their own home. However, when there is an increase in online purchases, there is the consequence of a rise in delivery demands. Retailers such as Amazon and fashion company Pretty Little Thing have even introduced ‘Same Day Delivery’ in areas such as major cities, including Greater London, Manchester, Edinburgh, Bristol, Cardiff and others. Whilst not all companies are currently able to offer this same-day service, customers’ needs are being prioritised and the online market is still expected to grow by over 15% by 2022. FORWARDER investigates the most recent demands from our basket-buyers and how they are affecting the UK courier. Based on recent research performed by Royal Mail**, here are the patterns that seem to be occurring with our brown-boxed deliveries." },
      { h1: "CUSTOMER EXPECTATIONS" },
      { p1: "Whether you’re buying or selling a product, you want to make sure your parcel arrives as efficiently as possible. Apparently, as customers, we also want it delivered for free. Statistics suggest that there is a common attitude towards free delivery, with 44% of online shoppers expecting free delivery, and 35% expecting to spend a maximum of £20 to qualify for free delivery. Furthermore, customers admitted that if their free delivery expectations are not met, some would wait for a free delivery offer before pressing the checkout button, with others abandoning their cart entirely." },
      { h2: "TRUST" },
      { p2: "The trust seems to be in tracking when it comes to parcel deliveries. Whether it’s checking courier updates online or signing up to SMS notifications, 61% of shoppers want to know when their item has been dispatched and 65% also want progress updates throughout the journey. The ease of refreshing an app or checking emails gives customers a feeling of control over their packages, knowing exactly when it leaves the warehouse, all the way up to the ring of the doorbell." },
      { h3: "COURIER SERVICES" },
      { p3: "Whilst the majority of parcels are delivered by courier services such as Royal Mail, Hermes, DPD and Yodel, self-employed courier drivers are an alternative method of delivering a parcel. Known as ‘lifestyle couriers’, it is estimated that 5–7%* of UK logistics workers are self-employed courier drivers. Lifestyle couriers tend to have previous courier experience and may choose to work at weekends as an extra source of income. With the rise and demand of online purchases, some lifestyle couriers deliver around 70 parcels a day from the back of their car." },
    ],
    readMoreBtnLink: "https://forwardermagazine.com/forwarder-focus/unpacking-the-demand-of-the-uk-courier/",
  },
  {
    id: "3",
    img: "/news/news-3.jpg",
    title: "COURIER AND EXPRESS DELIVERY MARKET POSTS £1 BILLION INCREASE IN SALES IN 2016",
    postBy: "ASK Sameday Couriers",
    date: "14th July 2020",
    cat: "Industry News",
    headline: "That familiar knock on the door or ring of the doorbell – it seems Britain has never been busier receiving parcels and packages by courier and express delivery. Indeed, Mintel’s Courier and Express Delivery UK 2017 report reveals that the courier and express delivery market* witnessed an impressive £1 billion increase in sales in 2016, with the UK spending as much as £10.1 billion on these services.",
    article: [
      { starter: "That familiar knock on the door or ring of the doorbell – it seems Britain has never been busier receiving parcels and packages by courier and express delivery. Indeed, Mintel’s Courier and Express Delivery UK 2017 report reveals that the courier and express delivery market* witnessed an impressive £1 billion increase in sales in 2016, with the UK spending as much as £10.1 billion on these services.\n\nOverall, 2.8 billion packages and parcels were delivered in 2016, with the number growing by 65% in four years, up from 1.7 billion in 2012. And while the number of items delivered has soared, this has driven a boom in the value of the courier and express delivery market, increasing by 63% from £6.2 billion in 2012 to £10.1 billion in 2016.\n\nAnd while value sales grew by a speedy 11% in the last year alone, in 2017 sales are expected to reach £10.8 billion. What is more, the market is forecast to grow by 22% to reach £13.2 billion in 2021, with market volumes expected to increase by 33% to reach four billion packages in the same time period.\n\nBritish online retail sales are expected to grow by 55.3% over this same five year period to reach £81.94 billion, enforcing the mutual dependence of these two trajectories.\n\nOverall, almost nine in 10 (87%) Brits have sent or received a parcel in the last 6 months.\n\nMarco Amasanti, Business-to-Business Analyst at Mintel said:\n“The crux of the recent surge in courier and express delivery services surrounds the ongoing digitalisation of all consumer behaviour, in which e-commerce is the apex. As online channels continue to increase their grip across retailing, the industry is only expected to grow further as supply strives to match surging demand. Money previously spent in retail stores is now increasingly spent online, boosting business-to-consumer delivery demand not only through the initial purchase, but also through the return of goods bought online. The business-to-consumer sector, underlined by the rise in e-commerce will be key to future growth.”\n\nWhen it comes to delivery, growth has been also driven in the market due to consumers wanting their parcels and packages as soon as they have been ordered. The value of next day deliveries reached £5.5 billion in 2016, up from £3.1 billion in 2012. While same day deliveries have risen from £488 million in 2012 to £1 billion in 2016." },
    ],
    readMoreBtnLink: "http://www.mintel.com/press-centre/retail-press-centre/courier-and-express-delivery-market-posts-1-billion-increase-in-sales-in-2016"
  },
  {
    id: "4",
    img: "/news/news-4.png",
    title: "COURIER AND EXPRESS DELIVERY MARKET POSTS £1 BILLION INCREASE IN SALES IN 2016",
    postBy: "ASK Sameday Couriers",
    date: "14th July 2020",
    cat: "Industry News",
    headline: "The importance of the online retail channel to the UK has become very clear from a new Mintel report that shows Britons sent 2.8 billion packages in 2016 and the market for courier and express delivery hit £10.1 billion last year.\n\nThe research firm said Britain is busier than ever taking parcel deliveries by courier and express delivery with sales in this area rising by £1 billion last year alone.",
    article: [
      { starter: "The importance of the online retail channel to the UK has become very clear from a new Mintel report that shows Britons sent 2.8 billion packages in 2016 and the market for courier and express delivery hit £10.1 billion last year.\n\nThe research firm said Britain is busier than ever taking parcel deliveries by courier and express delivery with sales in this area rising by £1 billion last year alone. Overall, 87% of Britons have sent or received a parcel in the last six months.\n\nThe number of parcels being delivered has risen 65% in a four-year period, up from 1.7 billion in 2012. And while the number of items delivered has soared, this has driven a boom in the value of the courier and express delivery market, increasing by 63% from £6.2 billion in 2012 to £10.1 billion in 2016.\n\nWhile that fact may not be of interest to many fashion consumers, the money-making potential in the courier sector means there will be more companies competing for business and offering more flexible solutions for shoppers to get their goods faster, which can only be good news both for shoppers and for stores seeking delivery speed and flexibility.\n\nAnd that’s a key fact as the Mintel report also said that speed is of the essence. The number one complaint for users of courier services is a long waiting time for parcels to be delivered. One in six (15%) users have had to wait a long time for a parcel to be delivered in the past six months, rising to 30% of those aged 16-24, possibly because the younger age group is selecting cheaper delivery options in order to keep costs down.\n\nThe courier market is forecast to grow by 22% to reach £13.2 billion in 2021, with market volumes expected to increase by 33% to reach four billion packages in the same time period.\n\nBritish online retail sales are expected to grow by 55.3% over this same five-year period to reach £81.94 billion, with the two heavily dependent on each other." },
    ],
    readMoreBtnLink: "https://uk.fashionnetwork.com/news/Uk-courier-market-surges-as-e-shopping-booms-mintel,847064.html#.W-xFwNX7TIU",
  },
]

export default function NewsMain() {
  return (
    <div className='bg-[#FFFFFF] w-full'>

      <div className='bg-[#FFFFFF] max-w-5xl text-black mx-auto flex justify-center px-6 lg:px-0 py-4 lg:py-8'>
        <div className="font-bold text-[#FDAF17] text-4xl content-center flex">
          NEWS STAND
        </div>
      </div>

      <div className='bg-[#FFFFFF] text-black mx-auto max-w-5xl flex flex-col items-start px-6 lg:px-4 py-4 lg:py-1 justify-between'>
        {news.map((item, index) => {
          return (
            <div key={index} className='flex flex-col items-center'>
              <Image
                src={item.img}
                width={800}
                height={300}
                alt="Warehouse"
                className='mb-4 z-[20]'
              />
              <div className='flex flex-col md:flex-row mt-1'>
                <div className='mr-5 my-5 text-4xl text-slate-600'><BiShareAlt /></div>
                <div>
                  <p className='mb-2 text-black'>By {item.postBy} In {item.cat} Posted {item.date}</p>
                  <h2 className='mb-2  text-2xl font-bold text-[#6C0287]'>{item.title}</h2>
                  <p className='mb-2 text-black'>{item.headline}</p>

                  <div className='flex justify-start pb-8'>
                    <BtnNews item={item} />
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
