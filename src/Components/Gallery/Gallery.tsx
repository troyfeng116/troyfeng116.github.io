import './Gallery.module.css'

import React, { ReactElement, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { StandardBackgrounds, StandardTextColors } from '../Styles'

const TRANSITION_IN = 0,
    TRANSITION_DONE = 1,
    TRANSITION_OUT = 2

/* Inherits width from container! */

interface GalleryProps {
    items: ReactElement[]
    maxHeight?: number
    showCircles?: boolean
    arrowsInside?: boolean
    bigArrow?: boolean
    timeoutSeconds?: number
    startIndex?: number
}

export const Gallery: React.FC<GalleryProps> = (props) => {
    const { items, maxHeight, showCircles = true, arrowsInside, bigArrow, timeoutSeconds = 8, startIndex = -1 } = props
    const numItems = items.length
    // Default start index is random
    const [curIndex, setCurIndex] = useState<number>(startIndex < 0 ? Math.floor(Math.random() * items.length) : startIndex)
    const [circleIndex, setCircleIndex] = useState<number>(curIndex)
    const [transitionLeft, setTransitionLeft] = useState<number>(TRANSITION_DONE)
    const [transitionRight, setTransitionRight] = useState<number>(TRANSITION_DONE)

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
        circles[i] = <div className={`gallery-circle ${i === circleIndex ? `gallery-circle-active ${StandardBackgrounds.Purple}` : StandardBackgrounds.LightBlue}`} key={`gallery-circle-${i}`} />
    }

    let itemClassName = 'gallery-item'
    if (transitionLeft === TRANSITION_IN) itemClassName += ' gallery-item-left-in'
    else if (transitionLeft === TRANSITION_OUT) itemClassName += ' gallery-item-left-out'
    if (transitionRight === TRANSITION_IN) itemClassName += ' gallery-item-right-in'
    else if (transitionRight === TRANSITION_OUT) itemClassName += ' gallery-item-right-out'

    return (
        <div className="gallery-container">
            <div className="gallery-top">
                <div
                    className={`gallery-arrow ${StandardTextColors.Orange} ${arrowsInside ? 'gallery-arrow-left-inside' : ''} ${bigArrow ? 'gallery-arrow-big' : ''}`}
                    onClick={() => setTransitionLeft(TRANSITION_OUT)}
                >
                    <FaChevronLeft />
                </div>
                <div className={itemClassName} style={maxHeight ? { maxHeight: `${maxHeight}px`, width: 'auto' } : {}}>
                    {items[curIndex]}
                </div>
                <div
                    className={`gallery-arrow ${StandardTextColors.Orange} ${arrowsInside ? 'gallery-arrow-right-inside' : ''} ${bigArrow ? 'gallery-arrow-big' : ''}`}
                    onClick={() => setTransitionRight(TRANSITION_OUT)}
                >
                    <FaChevronRight />
                </div>
            </div>
            {showCircles && <div className="gallery-circle-container">{circles}</div>}
        </div>
    )
}
