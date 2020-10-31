import './MenuBar.css'
import {
	FaHome,
	FaHandshake,
	FaShapes,
	FaPhotoVideo,
	FaBars,
	FaPhone,
	FaGithub,
	FaPlus,
} from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

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

export const MenuBar = () => {
	const [showHamburgerDropdown, setShowHamburgerDropdown] = useState<boolean>(false)

	const menubarItems: menuBarAttributes[] = [
		{text:'Troy Feng', dest: '/'},
		{text:'', blankSpace:true},
		{text:'Home', dest: '/', icon:<FaHome />, hideTextWhenSmall:true},
		{text:'About Me', dest: '/about', icon:<FaHandshake />, hideWhenSmall:true},
		{text:'Projects', dest: '/projects', icon:<FaShapes />, hideWhenSmall:true},
		{text:'Other', dest: '/other', icon:<FaPhotoVideo />, hideWhenSmall:true},
		{text:'', blankSpace:true},
		{text:'Contact', dest: '/contact', icon:<FaPhone />, dropdown:true},
		{text:'GitHub', icon:<FaGithub />, dropdown:true},
		{text:'About Me', dest: '/about', icon:<FaHandshake />, hideWhenBig:true, dropdown:true},
		{text:'Projects', dest: '/projects', icon:<FaShapes />, hideWhenBig:true, dropdown:true},
		{text:'Other', dest: '/other', icon:<FaPhotoVideo />, hideWhenBig:true, dropdown:true},
	]

	const getClassName = (hideWhenSmall, hideWhenBig, dropdown) => {
		let ans = dropdown ? "menubar-dropdown-wrapper" : "menubar-link-wrapper"
		if (hideWhenSmall) ans += " hide-when-small"
		if (hideWhenBig) ans += " hide-when-big"
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
					activeClassName='menubar-active-tab'
					id={item.text==="Troy Feng" ? "menubar-center" : undefined}
				>
					<div className="menubar-link-content">
						{item.icon && (
							<div className="menubar-icon">{item.icon}</div>
						)}
						<div 
							className={`menubar-link-text ${item.hideTextWhenSmall && 'hide-when-small'}`}
						>
							{item.text}
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
					activeClassName='menubar-dropdown-active-tab'
				>
					<div className='menubar-dropdown'>
						<div className="menubar-icon">{item.icon}</div>
						<div className={`menubar-link-text`}>
							{item.text}
						</div>
					</div>
				</NavLink>
			)
		}
		return null
	})

    return (
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
				<CSSTransition
					in={showHamburgerDropdown}
					timeout={230}
					classNames="menubar-dropdown-transition"
					unmountOnExit
				>
					<div className="menubar-dropdown-slider">
						<div className="menubar-dropdown-container">
							{dropdownItems}
						</div>
						<div className="menubar-dropdown-exit" onClick={() => setShowHamburgerDropdown(false)}>
							<FaPlus className="menubar-dropdown-exit-icon" />
						</div>
					</div>
				</CSSTransition>
			</div>
			
		</nav>
    )
}