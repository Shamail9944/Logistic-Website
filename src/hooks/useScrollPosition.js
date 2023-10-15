import React, { useEffect, useState } from 'react'

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState()
    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.screenY)
        }
        window.addEventListener('scroll', updatePosition)
        updatePosition()
        return () => window.removeEventListener('scroll', updatePosition)
    }, [])
    return scrollPosition
}

