import './FlipCircle.module.css'

import React from 'react'

interface FlipCircleProps {
    horizontal: boolean
    front: JSX.Element
    back: JSX.Element
    width: number
    constantRotate: boolean
}

export const FlipCircle: React.FC<FlipCircleProps> = (props) => {
    const { horizontal, front, back, width, constantRotate } = props
    let flipCircleInnerClassName = 'flip-circle-inner'
    if (constantRotate) flipCircleInnerClassName += '-rotate'
    flipCircleInnerClassName += horizontal ? '-x' : '-y'
    return (
        <div className="flip-circle" style={{ width: width, height: width }}>
            <div className={`flip-circle-inner ${flipCircleInnerClassName}`}>
                <div className="flip-circle-front">{front}</div>
                <div className={`${horizontal ? 'flip-circle-back-x' : 'flip-circle-back-y'}`}>{back}</div>
            </div>
        </div>
    )
}
