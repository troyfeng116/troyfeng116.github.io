import './HomeSlide.module.css'

import React from 'react'
import { Button, ButtonColor, ButtonSize } from 'Components/Button/Button'

import { StandardFonts, StandardTextColors } from '../../Styles'

interface HomeSlideProps {
    imageURL: string
    title: string
    subtitle: string
    redirectText: string
    href: string
}

export const HomeSlide: React.FC<HomeSlideProps> = (props) => {
    const { imageURL, title, subtitle, redirectText, href } = props

    return (
        <div className="home-slide-container">
            <div className="home-slide-content">
                <h2 className={`home-slide-title ${StandardFonts.LargeText} ${StandardTextColors.Purple}`}>{title}</h2>
                <p className={`home-slide-subtitle ${StandardFonts.SmallText} ${StandardTextColors.Purple}`}>{subtitle}</p>
                <Button color={ButtonColor.Purple} size={ButtonSize.Medium} href={href}>
                    {redirectText}
                </Button>
            </div>
            <div className="home-slide-background">
                {imageURL.includes('mp4') ? (
                    <video key={imageURL} autoPlay muted loop className="home-slide-video">
                        <source src={imageURL} type="video/mp4" />
                    </video>
                ) : (
                    <img src={imageURL} className="home-slide-img" alt={title} />
                )}
            </div>
        </div>
    )
}
