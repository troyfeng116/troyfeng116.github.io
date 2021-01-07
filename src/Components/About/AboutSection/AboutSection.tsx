import './AboutSection.css'

import React from 'react'

import Gallery from '../../Gallery'

interface AboutSectionProps {
    even: boolean
    text: string
    imgUrls: string[]
}

export const AboutSection: React.FC<AboutSectionProps> = (props) => {
    const { even, text, imgUrls } = props
    const galleryItems = imgUrls.map((url) => {
        return (
            <div className="about-section-img-container" key={url}>
                <img width={450} height={550} src={url} className="about-section-img" alt="Troy Feng - about" />
            </div>
        )
    })
    return (
        <section className={`about-section-container about-section-container-${even ? 'even' : 'odd'}`}>
            <div className={`about-section-gallery-container about-section-gallery-container-${even ? 'even' : 'odd'}`}>
                {galleryItems.length > 1 ? <Gallery items={galleryItems} showCircles={false} arrowsInside={true} timeoutSeconds={-1} /> : galleryItems}
            </div>
            <div className={`about-section-text-container about-section-text-container-${even ? 'even' : 'odd'}`}>
                <p className="about-section-text">{text}</p>
            </div>
        </section>
    )
}
