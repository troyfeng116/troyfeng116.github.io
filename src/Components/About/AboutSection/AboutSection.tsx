import './AboutSection.css'
import React from 'react'
import Gallery from '../../Gallery/Gallery'

interface AboutSectionProps {
    even: boolean,
    text: string,
    imgUrls: string[],
}

export const AboutSection = (props: AboutSectionProps) => {
    const { even, text, imgUrls } = props
    const galleryItems = imgUrls.map((url) => {
        return (
            <div className='about-section-img-container'>
                <img
                    src={url}
                    className='about-section-img'
                    alt='Troy Feng - home'
                />
            </div>
        )
    })
    return (
        <section className={`about-section-container about-section-container-${even ? 'even' : 'odd'}`}>
            <div className={`about-section-gallery-container about-section-gallery-container-${even ? 'even' : 'odd'}`}>
                <Gallery
                    items={galleryItems}
                    showCircles={false}
                    arrowsInside={true}
                    timeoutSeconds={Math.floor(7 + Math.random() * 6)}
                />
            </div>
            <div className={`about-section-text-container about-section-text-container-${even ? 'even' : 'odd'}`}>
                <p className='about-section-text'>
                    {text}
                </p>
            </div>
        </section>
    )
}