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

export const MenuBar = () => {
    return (
        <nav className="menubar-container">
		    <Link to="/" className="menubar-link" id="menubar-center">Troy Feng</Link>
		    <div className="menubar-space"></div>
		    <Link to="/" className="menubar-link">
			    <FaHome className="menubar-icon" />
			    <div className="menubar-link-text hide-when-small">Home</div>
		    </Link>
		    <Link to="/about" className="menubar-link hide-when-small">
				<FaHandshake className="menubar-icon" />
			    About Me
		    </Link>
		    <Link to="/projects" className="menubar-link hide-when-small">
				<FaShapes className="menubar-icon" />
			    Projects
		    </Link>
		    <Link to="../other/other.html" className="menubar-link hide-when-small">
				<FaPhotoVideo className="menubar-icon" />
			    Other
		    </Link>
		    <div className="menubar-space"></div>
		    <div className="icon-container">
			    <div className="icon-bars">
				    <FaBars className="menubar-icon" />
					<div className="menubar-link-text hide-when-small">Links</div>
			    </div>
			    <a href="./about.html" className="menubar-dropdown active hide-when-big">
					<FaHandshake className="menubar-icon" />
				    About
			    </a>
			    <a href="../projects/projects.html" className="menubar-dropdown hide-when-big">
					<FaShapes className="menubar-icon" />
				    Projects
			    </a>
			    <a href="../other/other.html" className="menubar-dropdown hide-when-big">
					<FaPhotoVideo className="menubar-icon" />
				    Other
			    </a>
			    <a href="../contact/contact.html" className="menubar-dropdown">
					<FaPhone className="menubar-icon" />
				    Contact
			    </a>
			    <a href="https://github.com/troyfeng116" className="menubar-dropdown">
				    <FaGithub className="menubar-icon" />
				    GitHub
			    </a>
            </div>
	    </nav>
    );
};