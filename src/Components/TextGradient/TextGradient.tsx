import './TextGradient.module.css'

import React from 'react'

interface TextGradientProps {
    children: React.ReactChild
    from: string
    to: string
    className?: string
    style?: React.CSSProperties
    direction?: 'left' | 'top'
}

export const TextGradient: React.FC<TextGradientProps> = (props) => {
    const { children, from, to, className = '', style = {}, direction = 'left' } = props

    return (
        <div className={`text-gradient ${className}`} style={{ ...style, background: `-webkit-linear-gradient(${direction}, ${from} 0, ${to} 100%)`, WebkitBackgroundClip: 'text' }}>
            {children}
        </div>
    )
}
