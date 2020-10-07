import React, { useState } from 'react';

export const NavBar = () => {
    return (
        <nav className="menubar-container">
		    <a href="../index.html" className="menubar-link" id="menubar-center">Troy Feng</a>
		    <div className="menubar-space"></div>
		    <a href="../index.html" className="menubar-link">
			    <i className="fas fa-home"></i>
			    <div className="menubar-link-text hide-when-small">Home</div>
		    </a>
		    <a href="./about.html" className="menubar-link active hide-when-small">
			    <i className="fas fa-handshake"></i>
			    About Me
		    </a>
		    <a href="../projects/projects.html" className="menubar-link hide-when-small">
			    <i className="fas fa-shapes"></i>
			    Projects
		    </a>
		    <a href="../other/other.html" className="menubar-link hide-when-small">
			    <i className="fas fa-photo-video"></i>
			    Other
		    </a>
		    <div className="menubar-space"></div>
		    <div className="icon-container">
			    <div className="icon-bars">
				    <i className="fas fa-bars"></i><div className="menubar-link-text hide-when-small">Links</div>
			    </div>
			    <a href="./about.html" className="menubar-dropdown active hide-when-big">
				    <i className="fas fa-handshake"></i>
				    About
			    </a>
			    <a href="../projects/projects.html" className="menubar-dropdown hide-when-big">
				    <i className="fas fa-shapes"></i>
				    Projects
			    </a>
			    <a href="../other/other.html" className="menubar-dropdown hide-when-big">
				    <i className="fas fa-photo-video"></i>
				    Other
			    </a>
			    <a href="../contact/contact.html" className="menubar-dropdown">
				    <i className="fas fa-phone"></i>
				    Contact
			    </a>
			    <a href="https://github.com/troyfeng116" className="menubar-dropdown">
				    <i className="fab fa-github"></i>
				    GitHub
			    </a>
            </div>
	    </nav>
    );
};