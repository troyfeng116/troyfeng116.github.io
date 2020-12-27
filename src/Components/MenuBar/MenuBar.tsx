import './MenuBar.css'
import {
	FaHome,
	FaHandshake,
	FaShapes,
	FaPhotoVideo,
	FaBars,
	FaPhone,
	FaPlus,
} from 'react-icons/fa'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import AnimateOnScroll from '../AnimateOnScroll'
import TextGlow from '../TextGlow'

interface menuBarAttributes {
	dest?: string,
	text: string,
	icon?: JSX.Element,
	hideTextWhenSmall?: boolean,
	hideWhenSmall?: boolean,
	hideWhenBig?: boolean,
	blankSpace?: boolean
	dropdown?: boolean,
}

export const MenuBar: React.FC = () => {
	const [showHamburgerDropdown, setShowHamburgerDropdown] = useState<boolean>(false)

	const menubarItems: menuBarAttributes[] = [
		{ text: 'Troy Feng', dest: '/' },
		{ text: '', blankSpace: true },
		{ text: 'Home', dest: '/', icon: <FaHome />, hideTextWhenSmall: true },
		{ text: 'About Me', dest: '/about', icon: <FaHandshake />, hideWhenSmall: true },
		{ text: 'Projects', dest: '/projects', icon: <FaShapes />, hideWhenSmall: true },
		{ text: 'Other', dest: '/other', icon: <FaPhotoVideo />, hideWhenSmall: true },
		{ text: '', blankSpace: true },
		{ text: 'Contact', dest: '/contact', icon: <FaPhone />, dropdown: true },
		{ text: 'About Me', dest: '/about', icon: <FaHandshake />, hideWhenBig: false, dropdown: true },
		{ text: 'Projects', dest: '/projects', icon: <FaShapes />, hideWhenBig: false, dropdown: true },
		{ text: 'Other', dest: '/other', icon: <FaPhotoVideo />, hideWhenBig: false, dropdown: true },
	]

	const getClassName = (hideWhenSmall: boolean | undefined, hideWhenBig: boolean | undefined, dropdown: boolean | undefined): string => {
		let ans = (dropdown !== undefined && dropdown === true) ? 'menubar-dropdown-wrapper' : 'menubar-link-wrapper'
		if (hideWhenSmall !== undefined && hideWhenSmall === true) ans += ' menubar-hide-when-small'
		if (hideWhenBig !== undefined && hideWhenBig === true) ans += ' menubar-hide-when-big'
		return ans
	}

	const nonDropdownItems = menubarItems.map((item: menuBarAttributes, index) => {
		if (item.blankSpace) return <div key={index} className="menubar-space"></div>
		if (!item.dropdown) {
			return (
				<NavLink
					key={index}
					exact to={item.dest || '/'}
					className={getClassName(item.hideWhenSmall, item.hideWhenBig, item.dropdown)}
					activeClassName="menubar-active-tab"
					id={item.text === "Troy Feng" ? "menubar-center" : undefined}
				>
					<div className="menubar-link-content">
						{item.icon && (
							<div className="menubar-icon">{item.icon}</div>
						)}
						<div
							className={`menubar-link-text ${item.hideTextWhenSmall && 'menubar-hide-when-small'}`}
						>
							{item.text === 'Troy Feng' ? (<TextGlow text="Troy Feng" hover={true} />) : item.text}
						</div>
					</div>
				</NavLink>
			)
		}
		return null
	})

	const dropdownItems = menubarItems.map((item: menuBarAttributes, index) => {
		if (item.dropdown) {
			return (
				<NavLink
					key={index}
					exact to={item.dest || '/'}
					className={getClassName(item.hideWhenSmall, item.hideWhenBig, item.dropdown)}
					activeClassName="menubar-dropdown-active-tab"
					onClick={() => setShowHamburgerDropdown(false)}
				>
					<div className="menubar-dropdown">
						<div className="menubar-icon">{item.icon}</div>
						<div className="menubar-link-text">{item.text}</div>
					</div>
				</NavLink>
			)
		}
		return null
	})

	return (
		<>
			<AnimateOnScroll>
				<nav className="menubar-container">
					{nonDropdownItems}
					<div className="menubar-dropdown-super-container">
						<div
							className="menubar-hamburger"
							onClick={() => setShowHamburgerDropdown(!showHamburgerDropdown)}
						>
							<div className="menubar-icon">
								<FaBars />
							</div>
						</div>
					</div>
				</nav>
			</AnimateOnScroll>
			<CSSTransition
				in={showHamburgerDropdown}
				timeout={230}
				classNames="menubar-dropdown-transition"
				unmountOnExit
			>
				<div className="menubar-dropdown-slider">
					<div className="menubar-dropdown-container">
						<NavLink
							to="/"
							className="menubar-dropdown-logo-wrapper"
							onClick={() => setShowHamburgerDropdown(false)}
						>
							<header className="menubar-dropdown-logo">
								<TextGlow text="TF" hover={true} />
							</header>
						</NavLink>
						{dropdownItems}
					</div>
					<div className="menubar-dropdown-exit" onClick={() => setShowHamburgerDropdown(false)}>
						<FaPlus className="menubar-dropdown-exit-icon" />
					</div>
				</div>
			</CSSTransition>
		</>
	)
}