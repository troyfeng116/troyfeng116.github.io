// Credit to: https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/

import './AnimateOnScroll.css'
import React, { ReactNode, useEffect, useRef, useState } from 'react'

interface AnimateOnScrollProps {
    children: ReactNode,
}

export const AnimateOnScroll = (props: AnimateOnScrollProps) => {
    const { children } = props
    const [isVisible, setIsVisible] = useState<boolean>(true)
    const domRef = useRef<any>()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting)
            })
        })
        observer.observe(domRef.current)
        return () => observer.unobserve(domRef.current)
    }, [])

    return (
        <div
            className={`animate-on-scroll-container ${isVisible ? 'animate-on-scroll-container-visible' : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    )
}