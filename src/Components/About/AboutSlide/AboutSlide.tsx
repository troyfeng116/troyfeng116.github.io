import './AboutSlide.css'
import React, { CSSProperties } from 'react'

interface AboutSlideProps {
    imageURL: string,
    title: string,
    subtitle: string,
    redirectText: string,
    onClick: () => void,
}

export const AboutSlide = (props: AboutSlideProps) => {
    const { imageURL, title, subtitle, redirectText, onClick } = props
    const slideCSS: CSSProperties = {
        backgroundImage: `url(${imageURL})`
    }
    return (
        <div className='about-slide-container' style={slideCSS}>
            <h2 className='about-slide-title'>
                {title}
            </h2>
            <p className='about-slide-subtitle'>
                {subtitle}
            </p>
            <div className='about-slide-button' onClick={onClick}>
                {redirectText}
            </div>
        </div>
    )
}