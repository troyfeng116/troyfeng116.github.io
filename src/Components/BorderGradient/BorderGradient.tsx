import React from 'react'
import { StandardFlex, StandardFlexChild } from 'Styles/Standard'

export enum BorderGradientColors {
    Pink = '#d475d4',
    Orange = '#fa9f55',
    Blue = '#5078f0',
    Red = '#eb3648',
    DarkBlue = '#142878',
    Green = '#22a872', // rgb(0, 252, 126)
}

interface BorderGradientProps {
    children: React.ReactNode
    fromColor: BorderGradientColors
    toColor: BorderGradientColors
    gradientAngle?: string
    borderSize?: number
    borderRadius?: number | string
    className?: string
    style?: React.CSSProperties
    borderStyle?: React.CSSProperties
    onClick?: React.MouseEventHandler<HTMLDivElement>
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
}

export const BorderGradient: React.FC<BorderGradientProps> = (props) => {
    const { children, fromColor, toColor, gradientAngle = '45deg', borderSize = 4, borderRadius = 0, className = '', style, borderStyle, onClick, onMouseEnter, onMouseLeave } = props

    return (
        <div className={`${className} ${StandardFlex.Col}`} style={{ ...style }} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div
                className={`${StandardFlexChild.Flex1} ${StandardFlex.Col}`}
                style={{
                    ...borderStyle,
                    padding: borderSize,
                    borderRadius: borderRadius,
                    background: `linear-gradient(${gradientAngle}, ${fromColor} 0, ${toColor} 100%)`,
                }}
            >
                {children}
            </div>
        </div>
    )
}
