'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
useRouter
const BtnNews = ({ item }) => {
    const router = useRouter()
    function handleClick() {
        console.log(item)
        router.push(`/news/${item.id}`)
    }
    return (
        <button onClick={handleClick} className='btn rounded-md border border-white/50 max-w-[200px] h-[50px] px-8 flex items-center justify-center overflow-hidden hover:border-accent group bg-[#6C0287] font-bold text-sm text-white'>
            Read More
        </button>
    )
}

export default BtnNews