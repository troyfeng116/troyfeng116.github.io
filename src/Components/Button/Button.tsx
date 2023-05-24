import styles from './Button.module.css'

import React from 'react'
import Link from 'next/link'
import { Clickable, StandardBackgrounds, StandardBorderRadii, StandardFonts, StandardPadding, StandardTextColors } from 'Styles/Standard'

export enum ButtonColor {
    Purple = 'Purple',
    Orange = 'Orange',
    Pink = 'Pink',
    PinkOrange = 'PinkOrange',
    DarkBlueBlue = 'DarkBlueBlue',
}

export enum ButtonSize {
    Small = 'Small',
    Medium = 'Medium',
    Big = 'Big',
}

interface ButtonProps {
    children: React.ReactNode
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
            bgClassName += ` ${styles.std_btn_purple} ${StandardBackgrounds.Purple}`
            break
        case ButtonColor.Orange:
            childClassName += ` ${StandardTextColors.Black}`
            bgClassName += ` ${styles.std_btn_orange} ${StandardBackgrounds.Orange}`
            break
        case ButtonColor.Pink:
            childClassName += ` ${StandardTextColors.Black}`
            bgClassName += ` ${styles.std_btn_pink} ${StandardBackgrounds.Pink}`
            break
        case ButtonColor.PinkOrange:
            childClassName += ` ${StandardTextColors.Black}`
            bgClassName += ` ${styles.std_btn_pink_orange} ${StandardBackgrounds.PinkOrangeGradient}`
            break
        case ButtonColor.DarkBlueBlue:
            childClassName += ` ${StandardTextColors.White}`
            bgClassName += ` ${styles.std_btn_dark_blue_blue}`
            break
    }

    switch (size) {
        case ButtonSize.Small:
            childClassName += ` ${StandardFonts.SmallTextBold}`
            bgClassName += ` ${styles.std_btn_small} ${StandardBorderRadii.R4} ${StandardPadding.Y6} ${StandardPadding.X18}`
            break
        case ButtonSize.Medium:
            childClassName += ` ${StandardFonts.MediumTextBold}`
            bgClassName += ` ${styles.std_btn_medium} ${StandardBorderRadii.R6} ${StandardPadding.Y12} ${StandardPadding.X24}`
            break
        case ButtonSize.Big:
            childClassName += ` ${StandardFonts.MediumTextBold}`
            bgClassName += ` ${styles.std_btn_big} ${StandardBorderRadii.R4} ${StandardPadding.T18} ${StandardPadding.X30}`
            break
    }

    const shouldDisable = disabled
    if (href !== undefined) {
        return (
            <Link
                href={href}
                passHref
                className={`${styles.std_btn} ${className} ${bgClassName} ${childClassName}`}
                style={{ ...style, cursor: shouldDisable ? 'not-allowed' : undefined, opacity: shouldDisable ? 0.5 : undefined }}
                onClick={(e) => {
                    if (!shouldDisable && onClick) onClick(e)
                }}
            >
                {children}
            </Link>
        )
    }
    return (
        <button
            className={`std-btn ${className} ${bgClassName} ${childClassName} ${Clickable}`}
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
