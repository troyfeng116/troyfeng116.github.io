import './HomeFlip.module.css'

import React from 'react'

import FlipCircle from '../../FlipCircle'
import TextMultiColor from '../../TextMultiColor'

export const HomeFlip: React.FC = () => {
    const frontCard = (
        <div className="home-bio-flip-front">
            <div className="home-bio-img-container">
                <img className="home-bio-img" height={259} width={259} src="/Media/Images/mug-shot-1.jpg" alt="Troy Feng" />
            </div>
        </div>
    )

    const backCard = (
        <div className="home-bio-flip-back">
            <TextMultiColor text="TF" />
        </div>
    )

    return <FlipCircle horizontal={false} front={frontCard} back={backCard} width={275} constantRotate={false} />
}
