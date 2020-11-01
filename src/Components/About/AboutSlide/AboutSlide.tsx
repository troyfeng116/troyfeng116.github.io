import './AboutSlide.css'
import React, { CSSProperties } from 'react'

interface AboutSlideProps {
    imageURL: string,
    title: string,
    subtitle: string,
    redirectText: string,
    onClick: () => void,
}

const AboutSlide = (props: AboutSlideProps) => {
    const { imageURL, title, subtitle, redirectText, onClick } = props

    return (
        <div className='about-slide-container'>
            <div className='about-slide-content'>
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
            <div className='about-slide-background'>
                {imageURL.includes('mp4') ? (
                    <video autoPlay muted loop className='about-slide-video'>
                        <source src={imageURL} type='video/mp4' />
                    </video> 
                    ) : (
                    <img src={imageURL} className='about-slide-img' />
                )}
            </div>
        </div>
    )
}

export default AboutSlide