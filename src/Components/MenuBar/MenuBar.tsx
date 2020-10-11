import './MenuBar.css'
import {
	FaHome,
	FaHandshake,
	FaShapes,
	FaPhotoVideo,
	FaBars,
	FaPhone,
	FaGithub
} from 'react-icons/fa'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface menuBarAttributes {
	dest?: string,
	text: string,
	icon?: JSX.Element,
	hideTextWhenSmall?: boolean,
	hideTextWhenBig?: boolean,
	hideWhenSmall?: boolean,
	hideWhenBig?: boolean,
	blankSpace?: boolean
	hamburger?: boolean,
	dropdown?: boolean,
}
export const MenuBar = () => {
	const [redraw, setRedraw] = useState<number>(0)

	const menubarItems: menuBarAttributes[] = [
		{text:'Troy Feng', dest: '/'},
		{text:'', blankSpace:true},
		{text:'Home', dest: '/', icon:<FaHome />, hideTextWhenSmall:true},
		{text:'About Me', dest: '/about', icon:<FaHandshake />, hideWhenSmall:true},
		{text:'Projects', dest: '/projects', icon:<FaShapes />, hideWhenSmall:true},
		{text:'Other', dest: '/other', icon:<FaPhotoVideo />, hideWhenSmall:true},
		{text:'', blankSpace:true},
		{text:'Links', icon:<FaBars />, hideTextWhenSmall:true, hamburger:true},
		{text:'Contact', dest: '/contact', icon:<FaPhone />, hideTextWhenBig:true, dropdown:true},
		{text:'GitHub', icon:<FaGithub />, hideTextWhenBig:true, dropdown:true},
		{text:'About Me', dest: '/about', icon:<FaHandshake />, hideWhenBig:true, dropdown:true},
		{text:'Projects', dest: '/projects', icon:<FaShapes />, hideWhenBig:true, dropdown:true},
		{text:'Other', dest: '/other', icon:<FaPhotoVideo />, hideWhenBig:true, dropdown:true},
	]

	const getClassName = (dest, hideWhenSmall, hideWhenBig, dropdown) => {
		let ans = dropdown ? "menubar-dropdown-wrapper" : "menubar-link-wrapper"
		if (hideWhenSmall) ans += " hide-when-small"
		if (hideWhenBig) ans += " hide-when-big"
		if (window.location.pathname === dest || window.location.pathname === "") ans += " active"
		return ans
	}
	
	const nonDropdownItems = menubarItems.map((item: menuBarAttributes, index) => {
		if (item.blankSpace) return <div key={index} className="menubar-space"></div>
		if (!item.hamburger && !item.dropdown) {
			return (
				<Link
					key={index}
					to={item.dest || '/'}
					className={getClassName(item.dest, item.hideWhenSmall, item.hideWhenBig, item.dropdown)}
					id={item.text==="Troy Feng" ? "menubar-center" : undefined}
					onClick={() => setRedraw(redraw+1)}
				>
					<div className="menubar-link-content">
						{item.icon && (
							<div className="menubar-icon">{item.icon}</div>
						)}
						<div 
							className={`menubar-link-text ${item.hideTextWhenSmall ? 'hide-when-small' : ''}`}
						>
							{item.text}
						</div>
					</div>
				</Link>
			)
		}
		return null
	})

	const dropdownItems = menubarItems.map((item: menuBarAttributes, index) => {
		if (item.hamburger) {
			return (
				<div key={index} className="icon-bars">
				    <div className="menubar-icon">{item.icon}</div>
			    </div>
			)
		}
		if (item.dropdown) {
			return (
				<Link
					key={index}
					to={item.dest || '/'}
					className={getClassName(item.dest, item.hideWhenSmall, item.hideWhenBig, item.dropdown)}
					onClick={() => setRedraw(redraw+1)}
				>
					<div className='menubar-dropdown'>
						<div className="menubar-icon">{item.icon}</div>
						<div className={`menubar-link-text ${item.hideTextWhenBig ? 'hide-when-big' : ''}`}
					>
							{item.text}
						</div>
					</div>
				</Link>
			)
		}
		return null
	})

    return (
        <nav className="menubar-container">
		    {nonDropdownItems}
			<div className="menubar-dropdown-super-container">
			<div className="menubar-dropdown-container">
			    {dropdownItems}
            </div>
			</div>
			
		</nav>
    )
}