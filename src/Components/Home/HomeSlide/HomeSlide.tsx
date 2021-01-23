import './HomeSlide.module.css'

import React from 'react'
import Image from 'next/image'

interface HomeSlideProps {
    imageURL: string
    title: string
    subtitle: string
    redirectText: string
    onClick: () => void
}

export const HomeSlide: React.FC<HomeSlideProps> = (props) => {
    const { imageURL, title, subtitle, redirectText, onClick } = props

    return (
        <div className="home-slide-container">
            <div className="home-slide-content">
                <h2 className="home-slide-title">{title}</h2>
                <p className="home-slide-subtitle">{subtitle}</p>
                <div className="home-slide-button" onClick={onClick}>
                    {redirectText}
                </div>
            </div>
            <div className="home-slide-background">
                {imageURL.includes('mp4') ? (
                    <video key={imageURL} autoPlay muted loop className="home-slide-video">
                        <source src={imageURL} type="video/mp4" />
                    </video>
                ) : (
                    <Image src={imageURL} layout="fill" className="home-slide-img" alt={title} />
                )}
            </div>
        </div>
    )
}
