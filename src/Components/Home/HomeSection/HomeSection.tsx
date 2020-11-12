import './HomeSection.css'
import React from 'react'
import Gallery from '../../Gallery/Gallery'

interface HomeSectionProps {
    even: boolean,
    text: string,
    imgUrls: string[],
}

export const HomeSection = (props: HomeSectionProps) => {
    const { even, text, imgUrls } = props
    const galleryItems = imgUrls.map((url) => {
        return (
            <img
                src={url}
                className='home-section-img'
                alt='Troy Feng - home'
            />
        )
    })
    return (
        <section className={`home-section-container home-section-container-${even ? 'even' : 'odd'}`}>
            <div className={`home-section-img-container home-section-img-container-${even ? 'even' : 'odd'}`}>
                <Gallery
                    items={galleryItems}
                    showCircles={false}
                    arrowsInside={true}
                    timeoutSeconds={10}
                />
            </div>
            <div className={`home-section-text-container home-section-text-container-${even ? 'even' : 'odd'}`}>
                <p className='home-section-text'>
                    {text}
                </p>
            </div>
        </section>
    )
}