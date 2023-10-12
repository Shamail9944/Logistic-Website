'use client'
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';
const FacebookChat = () => {
    return (
        <FacebookProvider appId="1028134491947827" chatSupport>
            <CustomChat pageId="139168849275585" minimized="true" />
        </FacebookProvider>
    )
}

export default FacebookChat