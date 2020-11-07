import './BorderAnimation.css'
import React, { ReactNode } from 'react'

interface BorderAnimationProps {
    children: ReactNode,
    color: string,
    shape: BorderShape,
}

export enum BorderShape {
    Square = 'SQUARE',
    Rect = 'RECT',
    Circle = 'CIRCLE',
}

const BorderAnimation = (props: BorderAnimationProps) => {
    const { children, color, shape } = props

    const viewBox = shape === BorderShape.Square ? '0 0 100 100' :
        shape === BorderShape.Rect ? '0 0 100 40' : '0 0 100 100'
    return (
        <div className="border-anim-wrapper">
            <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
                <rect className="border-anim-shape" height="100%" width="100%" style={{stroke: color}} />
            </svg>
            <div className='border-anim-content'>{children}</div>
        </div>
    )
}

export default BorderAnimation