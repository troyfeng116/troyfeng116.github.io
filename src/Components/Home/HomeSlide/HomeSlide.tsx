import './HomeSlide.css'
import React from 'react'

interface HomeSlideProps {
    imageURL: string,
    title: string,
    subtitle: string,
    redirectText?: string,
    onClick: () => void,
}

const HomeSlide = (props: HomeSlideProps) => {
    const { imageURL, title, subtitle, redirectText, onClick } = props

    return (
        <div className="home-slide-container">
            <div className="home-slide-content">
                <h2 className="home-slide-title">
                    {title}
                </h2>
                <p className="home-slide-subtitle">
                    {subtitle}
                </p>
                {redirectText !== undefined && (
                    <div className="home-slide-button" onClick={onClick}>
                        {redirectText}
                    </div>
                )}
            </div>
            <div className="home-slide-background">
                {imageURL.includes('mp4') ? (
                    <video key={imageURL} autoPlay muted loop className='home-slide-video'>
                        <source src={imageURL} type='video/mp4' />
                    </video>
                ) : (
                        <img src={imageURL} className='home-slide-img' alt={title} />
                    )}
            </div>
        </div>
    )
}

export default HomeSlide