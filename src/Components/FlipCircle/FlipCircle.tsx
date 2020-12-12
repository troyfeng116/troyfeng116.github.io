import './FlipCircle.css'
import React, { ReactNode } from 'react'

interface FlipCircleProps {
    horizontal: boolean
    front: JSX.Element
    back: JSX.Element
    width: number
}

const FlipCircle: React.FC<FlipCircleProps> = (props) => {
    const { horizontal, front, back, width } = props
    return (
        <div className="flip-circle" style={{ width: width, height: width }}>
            <div className={`${horizontal ? 'flip-circle-inner-x' : 'flip-circle-inner-y'}`}>
                <div className="flip-circle-front">
                    {front}
                </div>
                <div className={`${horizontal ? 'flip-circle-back-x' : 'flip-circle-back-y'}`}>
                    {back}
                </div>
            </div>
        </div>
    )
}

export default FlipCircle