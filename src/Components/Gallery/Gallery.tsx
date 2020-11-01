import './Gallery.css'
import React, { ReactElement, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

/* Inherits width from container! */

interface GalleryProps {
    items: ReactElement[],
}

const Gallery = (props: GalleryProps) => {
    const { items } = props
    const [curIndex, setCurIndex] = useState<number>(0)
    const numItems = items.length

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurIndex((curIndex + 1) % numItems)
        }, 10*1000)
        return () => clearTimeout(timeout)
    }, [curIndex])

    const circles = new Array(items.length)
    for (let i = 0; i < items.length; i++) {
        circles[i] = (
            <div className={`gallery-circle ${i == curIndex && 'gallery-circle-active'}`} key={`gallery-circle-${i}`}></div>
        )
    }

    return (
        <div className='gallery-container'>
            <div className='gallery-top'>
                <div
                    className='gallery-arrow'
                    onClick={() => setCurIndex((curIndex+numItems-1)%numItems)}
                >
                    <FaChevronLeft />
                </div>
                <div className='gallery-item'>
                    {items[curIndex]}
                </div>
                    <div
                        className='gallery-arrow'
                        onClick={() => setCurIndex((curIndex+1)%numItems)}
                    >
                    <FaChevronRight />
                </div>
            </div>
            <div className='gallery-circle-container'>
                {circles}
            </div>
        </div>
    )
}

export default Gallery