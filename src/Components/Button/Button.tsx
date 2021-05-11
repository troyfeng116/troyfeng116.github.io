import './Button.module.css'

import React from 'react'
import { StandardBackgrounds, StandardBorderRadii, StandardFonts, StandardTextColors } from 'Components/Styles'
import Link from 'next/link'

export enum ButtonColor {
    Purple = 'Purple',
}

export enum ButtonSize {
    Small = 'Small',
    Medium = 'Medium',
    Big = 'Big',
}

interface ButtonProps {
    children: React.ReactChild
    className?: string
    color?: ButtonColor
    size?: ButtonSize
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    disabled?: boolean
    style?: React.CSSProperties
    href?: string
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { children, className, color = ButtonColor.Purple, size = ButtonSize.Small, onClick, disabled, style, href } = props

    let childClassName = ''
    let bgClassName = ''

    switch (color) {
        case ButtonColor.Purple:
            childClassName += ` ${StandardTextColors.White}`
            bgClassName += ` std-btn-purple ${StandardBackgrounds.Purple}`
            break
    }

    switch (size) {
        case ButtonSize.Small:
            childClassName += ` ${StandardFonts.SmallText}`
            bgClassName += ` std-btn-small ${StandardBorderRadii.R4}`
            break
        case ButtonSize.Medium:
            childClassName += ` ${StandardFonts.MediumText}`
            bgClassName += ` std-btn-medium ${StandardBorderRadii.R4}`
            break
        case ButtonSize.Big:
            childClassName += ` ${StandardFonts.MediumText}`
            bgClassName += ` std-btn-big ${StandardBorderRadii.R4}`
            break
    }

    const shouldDisable = disabled
    if (href !== undefined) {
        return (
            <Link href={href} passHref>
                <a
                    className={`std-btn ${className} ${bgClassName} ${childClassName}`}
                    style={{ ...style, cursor: shouldDisable ? 'not-allowed' : undefined, opacity: shouldDisable ? 0.5 : undefined }}
                    onClick={(e) => {
                        if (!shouldDisable && onClick) onClick(e)
                    }}
                >
                    {children}
                </a>
            </Link>
        )
    }
    return (
        <button
            className={`std-btn ${className} ${bgClassName} ${childClassName}`}
            disabled={shouldDisable}
            style={style}
            onClick={(e) => {
                if (!shouldDisable && onClick) onClick(e)
            }}
        >
            {children}
        </button>
    )
}
