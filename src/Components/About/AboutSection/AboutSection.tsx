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
            <div className='about-section-img-container' key={url}>
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
                {galleryItems.length > 1 ? (
                    <Gallery
                        items={galleryItems}
                        showCircles={false}
                        arrowsInside={true}
                        timeoutSeconds={7 + Math.random() * 6}
                    />
                ) : (
                        galleryItems
                    )}
            </div>
            <div className={`about-section-text-container about-section-text-container-${even ? 'even' : 'odd'}`}>
                <p className='about-section-text'>
                    {text}
                </p>
            </div>
        </section>
    )
}