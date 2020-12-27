import './About.css'
import React from 'react'
import AnimateOnScroll from '../AnimateOnScroll'
import AboutSection from './AboutSection'
import { aboutTextArr, aboutImgUrls } from './AboutConstants'

export const About: React.FC = () => {
    const aboutSections = aboutTextArr.map((text, index) => (
        <AnimateOnScroll key={index}>
            <AboutSection
                key={index}
                even={index % 2 === 0}
                text={text}
                imgUrls={aboutImgUrls[index]}
            />
        </AnimateOnScroll>
    ))

    return (
        <div className="about-container">
            {aboutSections}
        </div>
    )
}