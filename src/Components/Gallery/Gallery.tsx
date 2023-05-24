import styles from './Gallery.module.css'

import React, { ReactElement, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { StandardBackgrounds, StandardTextColors } from 'Styles/Standard'
import { useTheme } from 'Styles/Theme/ThemeProvider'
import { useBackgroundThemeMap } from 'Styles/Theme/useBackgroundThemeMap'

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
    const { isDarkMode } = useTheme()
    const backgroundThemeMap = useBackgroundThemeMap()

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
        circles[i] = (
            <div
                className={`${styles.gallery_circle} ${i === circleIndex ? `${styles.gallery_circle_active} ${StandardBackgrounds.Purple}` : StandardBackgrounds.LightBlue}`}
                key={`gallery_circle_${i}`}
            />
        )
    }

    let itemClassName = `${styles.gallery_item}`
    if (transitionLeft === TRANSITION_IN) itemClassName += ` ${styles.gallery_item_left_in}`
    else if (transitionLeft === TRANSITION_OUT) itemClassName += ` ${styles.gallery_item_left_out}`
    if (transitionRight === TRANSITION_IN) itemClassName += ` ${styles.gallery_item_right_in}`
    else if (transitionRight === TRANSITION_OUT) itemClassName += ` ${styles.gallery_item_right_out}`

    return (
        <div className={`${styles.gallery_container}`}>
            <div className={`${styles.gallery_top}`}>
                <div
                    className={`
                        ${styles.gallery_arrow}
                        ${isDarkMode ? StandardTextColors.Orange : StandardTextColors.DarkBlue} ${backgroundThemeMap[StandardBackgrounds.Black]}
                        ${arrowsInside ? `${styles.gallery_arrow_left_inside}` : ''}
                        ${bigArrow ? `${styles.gallery_arrow_big}` : ''}
                    `}
                    style={{ opacity: 0.4, border: `1px solid ${isDarkMode ? '#fa9f55' : '#5078f0'}` }}
                    onClick={() => setTransitionLeft(TRANSITION_OUT)}
                >
                    <FaChevronLeft />
                </div>
                <div className={itemClassName} style={maxHeight ? { maxHeight: `${maxHeight}px`, width: 'auto' } : {}}>
                    {items[curIndex]}
                </div>
                <div
                    className={`
                        ${styles.gallery_arrow}
                        ${isDarkMode ? StandardTextColors.Orange : StandardTextColors.DarkBlue} ${backgroundThemeMap[StandardBackgrounds.Black]}
                        ${arrowsInside ? `${styles.gallery_arrow_right_inside}` : ''}
                        ${bigArrow ? `${styles.gallery_arrow_big}` : ''}
                    `}
                    style={{ opacity: 0.4, border: `1px solid ${isDarkMode ? '#fa9f55' : '#5078f0'}` }}
                    onClick={() => setTransitionRight(TRANSITION_OUT)}
                >
                    <FaChevronRight />
                </div>
            </div>
            {showCircles && <div className={`${styles.gallery_circle_container}`}>{circles}</div>}
        </div>
    )
}
