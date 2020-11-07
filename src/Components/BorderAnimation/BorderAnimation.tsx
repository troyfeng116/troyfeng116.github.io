import './BorderAnimation.css'
import React, { ReactNode } from 'react'

interface BorderAnimationProps {
    children: ReactNode,
    color: string,
}

const BorderAnimation = (props: BorderAnimationProps) => {
    const { children, color } = props
    return (
        <div className="border-anim-wrapper">
            <svg viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg">
                <rect className="border-anim-shape" height="100%" width="100%" style={{stroke: color}} />
            </svg>
            <div className='border-anim-content'>{children}</div>
        </div>
    )
}

export default BorderAnimation