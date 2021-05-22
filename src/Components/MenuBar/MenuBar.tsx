import './MenuBar.module.css'

import React, { useEffect, useState } from 'react'
import { FaBars, FaHandshake, FaHome, FaPhone, FaPhotoVideo, FaPlus, FaShapes } from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import { useRouter } from 'next/router'

import AnimateOnScroll from '../AnimateOnScroll'
import { StandardBackgrounds, StandardTextColors } from '../Styles'
import TextGlow from '../TextGlow'
import TextGradient from '../TextGradient'

interface MenuBarAttributes {
    dest?: string
    label: string
    icon?: JSX.Element
    hideTextWhenSmall?: boolean
    hideWhenSmall?: boolean
    hideWhenBig?: boolean
    blankSpace?: boolean
    dropdown?: boolean
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

    const menubarItems: MenuBarAttributes[] = [
        { label: 'Troy Feng', dest: '/', fromColor: '#5078f0', toColor: '#d475d4' },
        { label: '', blankSpace: true, fromColor: '#', toColor: '#' },
        { label: 'Home', dest: '/', icon: <FaHome />, hideTextWhenSmall: true, fromColor: '#d475d4', toColor: '#7878ff' },
        { label: 'About Me', dest: '/about', icon: <FaHandshake />, hideWhenSmall: true, fromColor: '#7878ff', toColor: '#ffff00' },
        { label: 'Projects', dest: '/projects', icon: <FaShapes />, hideWhenSmall: true, fromColor: '#ffff00', toColor: '#78ffff' },
        { label: 'Other', dest: '/other', icon: <FaPhotoVideo />, hideWhenSmall: true, fromColor: '#78ffff', toColor: '#d475d4' },
        { label: '', blankSpace: true, fromColor: '#', toColor: '#' },
        { label: 'Contact', dest: '/contact', icon: <FaPhone />, dropdown: true, fromColor: '#2850f0', toColor: '#d475d4' },
        { label: 'About Me', dest: '/about', icon: <FaHandshake />, hideWhenBig: false, dropdown: true, fromColor: '#2850f0', toColor: '#d475d4' },
        { label: 'Projects', dest: '/projects', icon: <FaShapes />, hideWhenBig: false, dropdown: true, fromColor: '#2850f0', toColor: '#d475d4' },
        { label: 'Other', dest: '/other', icon: <FaPhotoVideo />, hideWhenBig: false, dropdown: true, fromColor: '#2850f0', toColor: '#d475d4' },
    ]

    const getClassName = (hideWhenSmall: boolean | undefined, hideWhenBig: boolean | undefined, dropdown: boolean | undefined): string => {
        let ans = dropdown !== undefined && dropdown === true ? 'menubar-dropdown-wrapper' : `menubar-link-wrapper ${StandardTextColors.Blue}`
        if (hideWhenSmall !== undefined && hideWhenSmall === true) ans += ' menubar-hide-when-small'
        if (hideWhenBig !== undefined && hideWhenBig === true) ans += ' menubar-hide-when-big'
        return ans
    }

    const nonDropdownItems = menubarItems.map((item: MenuBarAttributes, index) => {
        const { blankSpace, dropdown, dest, label, icon, hideWhenSmall, hideWhenBig, hideTextWhenSmall, fromColor, toColor } = item
        if (blankSpace) return <div key={index} className="menubar-space"></div>
        if (label === 'Troy Feng') {
            return (
                <CSSTransition key={index} in={isAtTop} timeout={230} classNames="menubar-opacity-transition" unmountOnExit>
                    <Link href={dest || '/'}>
                        <a
                            className={`
                            menubar-link-content
                            ${dest === router.pathname ? 'menubar-active-tab' : ''}
                            ${getClassName(hideWhenSmall, hideWhenBig, dropdown)} 
                        `}
                            id="menubar-center"
                        >
                            {icon && (
                                <div style={{ color: fromColor }} className="menubar-icon">
                                    {icon}
                                </div>
                            )}
                            <TextGradient from={fromColor} to={toColor} className={`menubar-link-text ${hideTextWhenSmall ? 'menubar-hide-when-small' : ''}`}>
                                {label}
                            </TextGradient>
                        </a>
                    </Link>
                </CSSTransition>
            )
        }
        if (!dropdown) {
            return (
                <Link key={index} href={dest || '/'}>
                    <a
                        className={`
                            menubar-link-content
                            ${dest === router.pathname ? 'menubar-active-tab' : ''}
                            ${getClassName(hideWhenSmall, hideWhenBig, dropdown)} 
                        `}
                        id={label === 'Troy Feng' ? 'menubar-center' : undefined}
                    >
                        {icon && (
                            <div style={{ color: fromColor }} className="menubar-icon">
                                {icon}
                            </div>
                        )}
                        <TextGradient from={fromColor} to={toColor} className={`menubar-link-text ${hideTextWhenSmall ? 'menubar-hide-when-small' : ''}`}>
                            {label}
                        </TextGradient>
                        {dest === router.pathname && label !== 'Troy Feng' && (
                            <div style={{ position: 'absolute', background: `linear-gradient(90deg, ${fromColor} 0, ${toColor} 100%)`, height: 4, top: '100%', left: 0, right: 0 }}></div>
                        )}
                    </a>
                </Link>
            )
        }
        return null
    })

    const dropdownItems = menubarItems.map((item: MenuBarAttributes, index) => {
        if (item.dropdown) {
            return (
                <Link key={index} href={item.dest || '/'}>
                    <a
                        className={`menubar-dropdown ${StandardTextColors.Purple} ${item.dest === router.pathname ? `menubar-dropdown-active-tab ${StandardBackgrounds.Purple}` : ''} ${getClassName(
                            item.hideWhenSmall,
                            item.hideWhenBig,
                            item.dropdown,
                        )}`}
                        onClick={() => setShowHamburgerDropdown(false)}
                    >
                        <span className="menubar-icon">{item.icon}</span>
                        <span className="menubar-link-text">{item.label}</span>
                    </a>
                </Link>
            )
        }
        return null
    })

    return (
        <>
            <nav className="menubar-container" onClick={(e) => e.stopPropagation()}>
                {nonDropdownItems}
                <div className="menubar-dropdown-super-container">
                    <div className="menubar-hamburger" onClick={() => setShowHamburgerDropdown(!showHamburgerDropdown)}>
                        <div className={`menubar-icon ${StandardTextColors.Pink}`}>
                            <FaBars />
                        </div>
                    </div>
                </div>
            </nav>
            <CSSTransition in={showHamburgerDropdown} timeout={230} classNames="menubar-dropdown-transition" unmountOnExit>
                <div className="menubar-dropdown-slider" onClick={(e) => e.stopPropagation()}>
                    <div className="menubar-dropdown-container">
                        <Link href="/">
                            <header className={`menubar-dropdown-logo-wrapper menubar-dropdown-logo ${StandardBackgrounds.Purple}`} onClick={() => setShowHamburgerDropdown(false)}>
                                <TextGlow text="TF" hover={true} />
                            </header>
                        </Link>
                        {dropdownItems}
                    </div>
                    <div className="menubar-dropdown-exit" onClick={() => setShowHamburgerDropdown(false)}>
                        <FaPlus className="menubar-dropdown-exit-icon" />
                    </div>
                </div>
            </CSSTransition>
            <div style={{ height: 65, minHeight: 65 }} />
        </>
    )
}
