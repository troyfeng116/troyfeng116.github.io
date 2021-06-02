import React from 'react'

import { StandardFlex, StandardFlexChild } from '../Styles'

interface BorderGradientProps {
    children: React.ReactChild
    fromColor?: string
    toColor?: string
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
    const {
        children,
        fromColor = '#d475d4',
        toColor = '#5078f0',
        gradientAngle = '45deg',
        borderSize = 4,
        borderRadius = 0,
        className = '',
        style,
        borderStyle,
        onClick,
        onMouseEnter,
        onMouseLeave,
    } = props
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
