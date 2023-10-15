'use client'

import React from 'react'
import ReactPlayer from 'react-player/youtube'

import dynamic from 'next/dynamic'

export default function SliderVid() {
    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
    return (
        <div>
            <ReactPlayer url="https://asksamedaycouriers.co.uk/cmsbo/wp-content/uploads/2018/11/video-promo.mp4" loop={true} playing={true} muted={true} width="100%" height="100%" />
        </div>
    )
}
