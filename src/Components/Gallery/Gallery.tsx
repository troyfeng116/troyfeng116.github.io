import './Gallery.css'
import React, { ReactElement, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const TRANSITION_IN = 0, TRANSITION_DONE = 1, TRANSITION_OUT = 2

/* Inherits width from container! */

interface GalleryProps {
    items: ReactElement[],
    maxHeight?: number,
    showCircles?: boolean,
    arrowsInside?: boolean,
    bigArrow?: boolean,
    timeoutSeconds?: number,
}

const Gallery = (props: GalleryProps) => {
    const { items, maxHeight, showCircles = true, arrowsInside, bigArrow, timeoutSeconds = 8 } = props
    const [curIndex, setCurIndex] = useState<number>(0)
    const [circleIndex, setCircleIndex] = useState<number>(0)
    const [transitionLeft, setTransitionLeft] = useState<number>(TRANSITION_DONE)
    const [transitionRight, setTransitionRight] = useState<number>(TRANSITION_DONE)
    const numItems = items.length

    useEffect(() => {
        if (transitionLeft === TRANSITION_OUT) {
            setCircleIndex((curIndex + numItems - 1) % numItems)
            const timeout = setTimeout(() => {
                setTransitionLeft(TRANSITION_IN)
                setCurIndex((curIndex + numItems - 1) % numItems)
            }, 180)
            return () => clearTimeout(timeout)
        }
        if (transitionLeft === TRANSITION_IN) {
            const timeout = setTimeout(() => {
                setTransitionLeft(TRANSITION_DONE)
            }, 180)
            return () => clearTimeout(timeout)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transitionLeft])

    useEffect(() => {
        if (transitionRight === TRANSITION_OUT) {
            setCircleIndex((circleIndex + 1) % numItems)
            const timeout = setTimeout(() => {
                setTransitionRight(TRANSITION_IN)
                setCurIndex((curIndex + 1) % numItems)
            }, 180)
            return () => clearTimeout(timeout)
        }
        if (transitionRight === TRANSITION_IN) {
            const timeout = setTimeout(() => {
                setTransitionRight(TRANSITION_DONE)
            }, 180)
            return () => clearTimeout(timeout)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transitionRight])

    useEffect(() => {
        if (timeoutSeconds < 0) return
        const timeout = setTimeout(() => {
            setTransitionRight(TRANSITION_OUT)
        }, timeoutSeconds * 1000)
        return () => {
            clearTimeout(timeout)
        }
    }, [curIndex])

    const circles = new Array(items.length)
    for (let i = 0; i < items.length; i++) {
        circles[i] = (
            <div
                className={`gallery-circle ${i === circleIndex && 'gallery-circle-active'}`}
                key={`gallery-circle-${i}`}
            ></div>
        )
    }

    let itemClassName = 'gallery-item'
    if (transitionLeft === TRANSITION_IN) itemClassName += ' gallery-item-left-in'
    else if (transitionLeft === TRANSITION_OUT) itemClassName += ' gallery-item-left-out'
    if (transitionRight === TRANSITION_IN) itemClassName += ' gallery-item-right-in'
    else if (transitionRight === TRANSITION_OUT) itemClassName += ' gallery-item-right-out'

    return (
        <div className='gallery-container'>
            <div className='gallery-top'>
                <div
                    className={`gallery-arrow ${arrowsInside && 'gallery-arrow-left-inside'} ${bigArrow && 'gallery-arrow-big'}`}
                    onClick={() => setTransitionLeft(TRANSITION_OUT)}
                >
                    <FaChevronLeft />
                </div>
                <div
                    className={itemClassName}
                    style={maxHeight ? { maxHeight: maxHeight.toString() + 'px', width: 'auto' } : {}}
                >
                    {items[curIndex]}
                </div>
                <div
                    className={`gallery-arrow ${arrowsInside && 'gallery-arrow-right-inside'} ${bigArrow && 'gallery-arrow-big'}`}
                    onClick={() => setTransitionRight(TRANSITION_OUT)}
                >
                    <FaChevronRight />
                </div>
            </div>
            {showCircles && (
                <div className='gallery-circle-container'>
                    {circles}
                </div>
            )}
        </div>
    )
}

export default Gallery