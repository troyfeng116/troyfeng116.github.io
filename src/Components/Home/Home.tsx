import './Home.css'
import React from 'react'
import { HomeSection } from './HomeSection/HomeSection'

export const Home = () => {
    const textArr = [
        `I am an undergraduate student at Yale University in Pauli Murray College, class of 2024 as 
        I am on a leave of absence after my first year (2023 always in my heart). I will be double 
        majoring in Computer Science & Mathemtaics (B.S.) and Physics (B.A.), and I am interested 
        in AI and quantum computing.`,
    ]
    const imgUrls = [
        [
            'Media/Images/MurrayTower1.jpg',
            'Media/Images/MurrayTower2.jpg',
            'Media/Images/MurrayTower3.jpg',
            'Media/Images/MurrayTower4.jpg',
            'Media/Images/MurrayTower5.jpg',
        ],
    ]
    const homeSections = textArr.map((text, index) => {
        return (
            <HomeSection
                key={index}
                even={index % 2 === 0}
                text={text}
                imgUrls={imgUrls[index]}
            />
        )
    })
    return (
        <div className='home-container'>
            {homeSections}
        </div>
    )
}