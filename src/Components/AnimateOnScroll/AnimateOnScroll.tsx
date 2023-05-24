// Credit to: https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/

import styles from './AnimateOnScroll.module.css'

import React, { ReactNode, useEffect, useRef, useState } from 'react'

interface AnimateOnScrollProps {
    children: ReactNode
}

const INVIS_BELOW = 0,
    INVIS_ABOVE = 1,
    VISIBLE = 2

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = (props) => {
    const { children } = props
    const [isVisible, setIsVisible] = useState<number>(VISIBLE)
    const domRef = useRef<HTMLDivElement>(null)
    const prevY = useRef<number>(0)

    useEffect(() => {
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const curY = entry.boundingClientRect.y
                const { isIntersecting } = entry
                if (curY === 0) {
                    setIsVisible(VISIBLE)
                    return
                }
                if (curY < prevY.current) {
                    if (isIntersecting) setIsVisible(VISIBLE)
                    else setIsVisible(INVIS_BELOW)
                } else {
                    if (isIntersecting) setIsVisible(VISIBLE)
                    else setIsVisible(INVIS_ABOVE)
                }
                prevY.current = curY
            })
        }
        if (domRef.current !== null) {
            const observer = new IntersectionObserver(callback)
            observer.observe(domRef.current)
            return () => {
                if (domRef.current !== null) {
                    observer.unobserve(domRef.current)
                }
            }
        }
    }, [domRef.current])

    const className =
        isVisible === INVIS_BELOW
            ? `${styles.animate_on_scroll_container_invis_below}`
            : isVisible === INVIS_ABOVE
                ? `${styles.animate_on_scroll_container_invis_above}`
                : `${styles.animate_on_scroll_container_visible}`

    return (
        <div className={`${styles.animate_on_scroll_container} ${className}`} ref={domRef}>
            {children}
        </div>
    )
}
