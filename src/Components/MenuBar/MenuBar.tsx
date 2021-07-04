import './MenuBar.module.css'

import React, { useEffect, useState } from 'react'
import { FaBars, FaHandshake, FaHome, FaPhone, FaPhotoVideo, FaPlus, FaShapes } from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group'
import BorderGradient, { BorderGradientColors } from 'Components/BorderGradient'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import ThemeToggle from 'Components/ThemeToggle'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    Clickable,
    StandardBackgrounds,
    StandardBorderRadii,
    StandardFonts,
    StandardJustify,
    StandardLayout,
    StandardMargin,
    StandardPadding,
    StandardPosition,
    StandardTextAlign,
    StandardTextColors,
    StandardTransition,
    StandardWidth,
    StandardZIndex,
} from 'Styles/Standard'
import { useBackgroundThemeMap } from 'Styles/Theme/useBackgroundThemeMap'
import { useBorderGradientThemeMap } from 'Styles/Theme/useBorderGradientThemeMap'
import { useTextColorTheme } from 'Styles/Theme/useTextColorTheme'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

interface MenuBarAttributes {
    href: string
    label: string
    icon?: JSX.Element
    fromColor: TextGradientColors
    toColor: TextGradientColors
}

export const MenuBar: React.FC = () => {
    const [showHamburgerDropdown, setShowHamburgerDropdown] = useState<boolean>(false)
    const [isAtTop, setIsAtTop] = useState<boolean>(true)
    const backgroundThemeMap = useBackgroundThemeMap()
    const textGradientThemeMap = useTextGradientThemeMap()
    const borderGradientThemeMap = useBorderGradientThemeMap()
    const textColorThemeMap = useTextColorTheme()
    const router = useRouter()

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY <= 0) {
                setIsAtTop(true)
            } else setIsAtTop(false)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const handleClick = () => setShowHamburgerDropdown(false)
        window.addEventListener('click', handleClick)
        return () => window.removeEventListener('click', handleClick)
    }, [])

    const nonDropdownLinkInfo: MenuBarAttributes[] = [
        { label: 'Home', href: '/', icon: <FaHome />, fromColor: TextGradientColors.Pink, toColor: TextGradientColors.Blue },
        { label: 'About Me', href: '/about', icon: <FaHandshake />, fromColor: TextGradientColors.Blue, toColor: TextGradientColors.Pink },
        { label: 'Projects', href: '/projects', icon: <FaShapes />, fromColor: TextGradientColors.Pink, toColor: TextGradientColors.Blue },
        { label: 'Other', href: '/other', icon: <FaPhotoVideo />, fromColor: TextGradientColors.Blue, toColor: TextGradientColors.Pink },
    ]

    const dropdownLinkInfo: MenuBarAttributes[] = [
        { label: 'Contact', href: '/contact', icon: <FaPhone />, fromColor: TextGradientColors.Blue, toColor: TextGradientColors.Pink },
        { label: 'About Me', href: '/about', icon: <FaHandshake />, fromColor: TextGradientColors.Pink, toColor: TextGradientColors.Blue },
        { label: 'Projects', href: '/projects', icon: <FaShapes />, fromColor: TextGradientColors.Blue, toColor: TextGradientColors.Pink },
        { label: 'Other', href: '/other', icon: <FaPhotoVideo />, fromColor: TextGradientColors.Pink, toColor: TextGradientColors.Blue },
    ]

    const nonDropdownItems = nonDropdownLinkInfo.map((item: MenuBarAttributes, index) => {
        const { href, label, icon, fromColor, toColor } = item
        return (
            <Link key={index} href={href}>
                <a
                    className={`
                        menu-link-clear-format
                        ${StandardPadding.Y12} ${StandardLayout.FlexRowCenter}
                        ${StandardPosition.Relative} ${StandardFonts.LinkText}
                    `}
                    style={{ minWidth: 150 }}
                >
                    {icon && (
                        <div style={{ color: textGradientThemeMap[fromColor] }} className={`${StandardLayout.FlexRow}`}>
                            {icon}
                        </div>
                    )}
                    <TextGradient from={textGradientThemeMap[fromColor]} to={textGradientThemeMap[toColor]} className={`${StandardTextAlign.Center} ${StandardMargin.L6}`}>
                        {label}
                    </TextGradient>
                    {href === router.pathname && (
                        <div
                            style={{
                                position: 'absolute',
                                background: `linear-gradient(90deg, ${textGradientThemeMap[fromColor]} 0, ${textGradientThemeMap[toColor]} 100%)`,
                                height: 4,
                                top: '100%',
                                left: 0,
                                right: 0,
                            }}
                        ></div>
                    )}
                </a>
            </Link>
        )
    })

    const dropdownItems = dropdownLinkInfo.map((item: MenuBarAttributes, index) => {
        const { href, icon, label } = item
        return (
            <Link key={index} href={href || '/'}>
                <a
                    className={`
                        menu-dropdown menu-link-clear-format
                        ${StandardFonts.LinkText} ${StandardTextAlign.Center}
                        ${StandardPadding.Y12} ${StandardLayout.FlexRowCenter}
                        ${StandardBorderRadii.R6} ${StandardTransition.All}
                    `}
                    style={{ minWidth: 150, border: href === router.pathname ? '2px solid #5078f0' : undefined }}
                    onClick={() => setShowHamburgerDropdown(false)}
                >
                    <span className={`${StandardLayout.FlexRow} ${textColorThemeMap[StandardTextColors.Pink]}`}>{icon}</span>
                    <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Blue]}>
                        <span className={`${StandardTextAlign.Center} ${StandardMargin.L12}`}>{label}</span>
                    </TextGradient>
                </a>
            </Link>
        )
    })

    return (
        <>
            <nav
                className={`
                    ${StandardLayout.FlexRow} ${StandardJustify.Between}
                    ${StandardPosition.Fixed} ${StandardZIndex.Z4}
                    ${StandardWidth.Full} ${backgroundThemeMap[StandardBackgrounds.Black]}
                    ${StandardTransition.All}
                    ${StandardPadding.Y6}
                `}
                onClick={(e) => e.stopPropagation()}
                style={{ top: 0, opacity: !isAtTop ? 0.8 : undefined }}
            >
                <div className={`${StandardLayout.FlexRow}`}>
                    <CSSTransition in={isAtTop} timeout={230} classNames="menu-opacity-transition" unmountOnExit>
                        <Link href="/">
                            <a className={`menu-link-clear-format menu-center ${StandardPadding.X60} ${StandardMargin.R30} ${StandardFonts.H1Text} ${StandardTextAlign.Center}`}>
                                <TextGradient from={textGradientThemeMap[TextGradientColors.Blue]} to={textGradientThemeMap[TextGradientColors.Pink]}>
                                    Troy Feng
                                </TextGradient>
                            </a>
                        </Link>
                    </CSSTransition>
                    <div className={`menu-hide-when-small ${StandardLayout.FlexRow} ${StandardMargin.L36}`}>{nonDropdownItems}</div>
                </div>
                <div className={`${StandardLayout.FlexRow}`}>
                    <div className={`menu-hide-when-large ${StandardLayout.FlexRow} ${StandardMargin.R18}`}>
                        <Link href="/">
                            <a
                                className={`
                                    menu-link-clear-format
                                    ${StandardPadding.Y12} ${StandardLayout.FlexRowCenter}
                                    ${StandardPosition.Relative}
                                `}
                                style={{ minWidth: 72 }}
                            >
                                <div className={`${StandardLayout.FlexRow} ${StandardFonts.MediumText} ${textColorThemeMap[StandardTextColors.Pink]}`}>
                                    <FaHome />
                                </div>
                                {'/' === router.pathname && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            background: `linear-gradient(90deg, ${borderGradientThemeMap[BorderGradientColors.Pink]} 0, ${borderGradientThemeMap[BorderGradientColors.Blue]} 100%)`,
                                            height: 4,
                                            top: '100%',
                                            left: 0,
                                            right: 0,
                                        }}
                                    ></div>
                                )}
                            </a>
                        </Link>
                    </div>
                    <div
                        className={`menu-hamburger ${StandardFonts.MediumText} ${StandardPadding.All12} ${StandardLayout.FlexRowCenter} ${textColorThemeMap[StandardTextColors.Pink]} ${Clickable}`}
                        style={{ minWidth: 72 }}
                        onClick={() => setShowHamburgerDropdown(!showHamburgerDropdown)}
                    >
                        <FaBars />
                    </div>
                </div>
            </nav>
            <CSSTransition in={showHamburgerDropdown} timeout={230} classNames="menu-dropdown-transition" unmountOnExit>
                <div
                    className={`menu-dropdown-slider ${StandardPosition.Fixed}`}
                    style={{
                        borderTopLeftRadius: 12,
                        borderBottomLeftRadius: 12,
                        zIndex: 5,
                        top: 72,
                        padding: '5px 0 5px 5px',
                        background: `linear-gradient(135deg, ${borderGradientThemeMap[BorderGradientColors.Pink]} 0, ${borderGradientThemeMap[BorderGradientColors.Blue]} 100%)`,
                    }}
                >
                    <div
                        style={{
                            borderTopLeftRadius: 12,
                            borderBottomLeftRadius: 12,
                        }}
                        className={`
                            ${backgroundThemeMap[StandardBackgrounds.Black]} ${StandardPosition.Relative}
                            ${StandardLayout.FlexCol} ${StandardPadding.T30} ${StandardPadding.B18} ${StandardPadding.X36}
                        `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={`${StandardLayout.FlexCol}`}>
                            <BorderGradient
                                className={`${StandardMargin.B18}`}
                                borderRadius="50%"
                                borderSize={3}
                                fromColor={borderGradientThemeMap[BorderGradientColors.Pink]}
                                toColor={borderGradientThemeMap[BorderGradientColors.Blue]}
                                gradientAngle="45deg"
                            >
                                <Link href="/">
                                    <a
                                        className={`
                                            menu-link-clear-format
                                            ${backgroundThemeMap[StandardBackgrounds.Black]}
                                            ${StandardLayout.FlexRowCenter} ${StandardFonts.H1Text}
                                        `}
                                        style={{ width: 80, height: 80, borderRadius: '50%' }}
                                        onClick={() => setShowHamburgerDropdown(false)}
                                    >
                                        <TextGradient from={textGradientThemeMap[TextGradientColors.Blue]} to={textGradientThemeMap[TextGradientColors.Pink]} direction="top">
                                            TF
                                        </TextGradient>
                                    </a>
                                </Link>
                            </BorderGradient>
                            {dropdownItems}
                        </div>
                        <div
                            className={`${StandardFonts.MediumText} ${textColorThemeMap[StandardTextColors.Pink]} ${Clickable} ${StandardPosition.Absolute}`}
                            style={{ top: 18, left: 18 }}
                            onClick={() => setShowHamburgerDropdown(false)}
                        >
                            <FaPlus style={{ transform: 'rotate(45deg)' }} />
                        </div>
                        <ThemeToggle className={`${StandardMargin.T18}`} />
                    </div>
                </div>
            </CSSTransition>
            <div style={{ height: 65, minHeight: 65 }} />
        </>
    )
}
