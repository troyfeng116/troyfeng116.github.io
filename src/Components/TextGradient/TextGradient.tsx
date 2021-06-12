import './TextGradient.module.css'

import React from 'react'

interface TextGradientProps {
    children: React.ReactChild
    from: string | TextGradientColors
    to: string | TextGradientColors
    className?: string
    style?: React.CSSProperties
    direction?: 'left' | 'top'
}

export enum TextGradientColors {
    Pink = '#d475d4',
    Orange = '#fa9f55',
    Blue = '#5078f0',
}

export const TextGradient: React.FC<TextGradientProps> = (props) => {
    const { children, from, to, className = '', style = {}, direction = 'left' } = props

    return (
        <div className={`text-gradient ${className}`} style={{ ...style, background: `-webkit-linear-gradient(${direction}, ${from} 0, ${to} 100%)`, WebkitBackgroundClip: 'text' }}>
            {children}
        </div>
    )
}
