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
import { NavLink, Link, Switch, BrowserRouter } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

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
	const [activeTab, setActiveTab] = useState<string>("Home")

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

	const getClassName = (text, hideWhenSmall, hideWhenBig, dropdown) => {
		let ans = dropdown ? "menubar-dropdown-wrapper" : "menubar-link-wrapper"
		if (hideWhenSmall) ans += " hide-when-small"
		if (hideWhenBig) ans += " hide-when-big"
		if (text === activeTab) ans += " active"
		return ans
	}
	
	const nonDropdownItems = menubarItems.map((item: menuBarAttributes) => {
		if (item.blankSpace) return <div className="menubar-space"></div>
		if (!item.hamburger && !item.dropdown) {
			return (
				<Link
					to={item.dest || '/'}
					className={getClassName(item.text, item.hideWhenSmall, item.hideWhenBig, item.dropdown)}
					id={item.text==="Troy Feng" ? "menubar-center" : undefined}
					onClick={() => setActiveTab(item.text === "Troy Feng" ? "Home" : item.text)}
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
	const dropdownItems = menubarItems.map((item: menuBarAttributes) => {
		if (item.hamburger) {
			return (
				<div className="icon-bars">
				    <div className="menubar-icon">{item.icon}</div>
			    </div>
			)
		}
		if (item.dropdown) {
			return (
				<Link 
					to={item.dest || '/'}
					className={getClassName(item.text, item.hideWhenSmall, item.hideWhenBig, item.dropdown)}
					onClick={() => setActiveTab(item.text)}
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
		    <div className="icon-container">
			    {dropdownItems}
            </div>
		</nav>
    )
}