import './TextGradient.module.css'

import React from 'react'

export enum TextGradientColors {
    Pink = '#d475d4',
    Orange = '#fa9f55',
    Blue = '#5078f0',
    Red = '#eb3648',
    DarkBlue = '#142878',
}

interface TextGradientProps {
    children: React.ReactChild
    from: TextGradientColors
    to: TextGradientColors
    className?: string
    style?: React.CSSProperties
    direction?: 'left' | 'top'
}

export const TextGradient: React.FC<TextGradientProps> = (props) => {
    const { children, from, to, className = '', style = {}, direction = 'left' } = props

    return (
        <div
            className={`text-gradient ${className}`}
            style={{ ...style, backgroundColor: from, backgroundImage: `linear-gradient(${direction === 'left' ? '90deg' : '180deg'}, ${from} 0, ${to} 100%)` }}
        >
            {children}
        </div>
    )
}
