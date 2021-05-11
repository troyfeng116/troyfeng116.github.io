import './About.module.css'

import React from 'react'

import AnimateOnScroll from '../AnimateOnScroll'

import { aboutButtons, aboutImgUrls, aboutTextArr } from './AboutConstants'
import AboutSection from './AboutSection'

export const About: React.FC = () => {
    const aboutSections = aboutTextArr.map((text, index) => (
        <AnimateOnScroll key={index}>
            <AboutSection key={index} even={index % 2 === 0} text={text} imgUrls={aboutImgUrls[index]} moreInfoButton={aboutButtons[index]} />
        </AnimateOnScroll>
    ))

    return <div className="about-container">{aboutSections}</div>
}
