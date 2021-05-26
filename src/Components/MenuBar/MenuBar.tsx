import './MenuBar.module.css'

import React, { useEffect, useState } from 'react'
import { FaBars, FaHandshake, FaHome, FaPhone, FaPhotoVideo, FaPlus, FaShapes } from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group'
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
} from '../Styles'
import TextGlow from '../TextGlow'
import TextGradient from '../TextGradient'

interface MenuBarAttributes {
    href: string
    label: string
    icon?: JSX.Element
    fromColor: string
    toColor: string
}

export const MenuBar: React.FC = () => {
    const [showHamburgerDropdown, setShowHamburgerDropdown] = useState<boolean>(false)
    const [isAtTop, setIsAtTop] = useState<boolean>(true)
    const router = useRouter()

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY === 0) {
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
        { label: 'Home', href: '/', icon: <FaHome />, fromColor: '#d475d4', toColor: '#5078f0' },
        { label: 'About Me', href: '/about', icon: <FaHandshake />, fromColor: '#5078f0', toColor: '#64e0ff' },
        { label: 'Projects', href: '/projects', icon: <FaShapes />, fromColor: '#64e0ff', toColor: '#5078f0' },
        { label: 'Other', href: '/other', icon: <FaPhotoVideo />, fromColor: '#5078f0', toColor: '#d475d4' },
    ]

    const dropdownLinkInfo: MenuBarAttributes[] = [
        { label: 'Contact', href: '/contact', icon: <FaPhone />, fromColor: '#', toColor: '#' },
        { label: 'About Me', href: '/about', icon: <FaHandshake />, fromColor: '#', toColor: '#' },
        { label: 'Projects', href: '/projects', icon: <FaShapes />, fromColor: '#', toColor: '#' },
        { label: 'Other', href: '/other', icon: <FaPhotoVideo />, fromColor: '#', toColor: '#' },
    ]

    const nonDropdownItems = nonDropdownLinkInfo.map((item: MenuBarAttributes, index) => {
        const { href, label, icon, fromColor, toColor } = item
        return (
            <Link key={index} href={href}>
                <a
                    className={`
                        menu-link-clear-format
                        ${StandardPadding.Y12} ${StandardLayout.FlexRowCenter}
                        ${StandardPosition.Relative} ${StandardFonts.SmallTextBold}
                    `}
                    style={{ minWidth: 150 }}
                >
                    {icon && (
                        <div style={{ color: fromColor }} className={`${StandardLayout.FlexRow}`}>
                            {icon}
                        </div>
                    )}
                    <TextGradient from={fromColor} to={toColor} className={`${StandardTextAlign.Center} ${StandardMargin.L6}`}>
                        {label}
                    </TextGradient>
                    {href === router.pathname && (
                        <div style={{ position: 'absolute', background: `linear-gradient(90deg, ${fromColor} 0, ${toColor} 100%)`, height: 4, top: '100%', left: 0, right: 0 }}></div>
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
                        ${StandardFonts.SmallTextBold} ${StandardTextAlign.Center}
                        ${StandardPadding.Y12} ${StandardLayout.FlexRowCenter}
                        ${StandardBorderRadii.R6} ${StandardTransition.All}
                        ${href === router.pathname ? `${StandardTextColors.White} ${StandardBackgrounds.Purple}` : `${StandardTextColors.Purple}`}
                    `}
                    style={{ minWidth: 150 }}
                    onClick={() => setShowHamburgerDropdown(false)}
                >
                    <span className={`${StandardLayout.FlexRow}`}>{icon}</span>
                    <span className={`${StandardTextAlign.Center} ${StandardMargin.L6}`}>{label}</span>
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
                    ${StandardWidth.Full} ${StandardBackgrounds.Black}
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
                                <TextGradient from="#5078f0" to="#d475d4">
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
                                <div style={{ color: '#d475d4' }} className={`${StandardLayout.FlexRow} ${StandardFonts.MediumText}`}>
                                    <FaHome />
                                </div>
                                {'/' === router.pathname && (
                                    <div style={{ position: 'absolute', background: 'linear-gradient(90deg, #d475d4 0, #5078f0 100%)', height: 4, top: '100%', left: 0, right: 0 }}></div>
                                )}
                            </a>
                        </Link>
                    </div>
                    <div
                        className={`menu-hamburger ${StandardFonts.MediumText} ${StandardPadding.All12} ${StandardLayout.FlexRowCenter} ${StandardTextColors.Pink} ${Clickable}`}
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
                        background: 'linear-gradient(135deg, #d475d4 0, #5078f0 100%)',
                    }}
                >
                    <div
                        style={{
                            borderTopLeftRadius: 12,
                            borderBottomLeftRadius: 12,
                        }}
                        className={`${StandardBackgrounds.Black} ${StandardPadding.T30} ${StandardPadding.B18} ${StandardPadding.X36} ${StandardPosition.Relative}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="menu-dropdown-container">
                            <Link href="/">
                                <header
                                    className={`menu-link-clear-format ${StandardBackgrounds.White} ${StandardTextColors.Pink} ${StandardLayout.FlexRowCenter} ${StandardFonts.H1Text} ${StandardMargin.XAuto} ${StandardMargin.B18} ${Clickable}`}
                                    style={{ width: 80, height: 80, borderRadius: '50%' }}
                                    onClick={() => setShowHamburgerDropdown(false)}
                                >
                                    <TextGlow text="TF" hover={true} />
                                </header>
                            </Link>
                            {dropdownItems}
                        </div>
                        <div
                            className={`${StandardFonts.MediumText} ${StandardTextColors.Pink} ${Clickable} ${StandardPosition.Absolute}`}
                            style={{ top: 18, left: 18 }}
                            onClick={() => setShowHamburgerDropdown(false)}
                        >
                            <FaPlus className="menu-dropdown-exit-icon" />
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <div style={{ height: 65, minHeight: 65 }} />
        </>
    )
}
