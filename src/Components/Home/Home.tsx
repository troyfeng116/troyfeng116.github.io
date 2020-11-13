import './Home.css'
import React from 'react'
import { HomeSection } from './HomeSection/HomeSection'

export const Home = () => {
    const textArr = [
        `I am currently an undergraduate student at Yale University in Pauli Murray College, class of 2023.5 as I am on a leave of absence after my first year (Class of 2023 at heart). I will hopefully be double majoring in Computer Science & Mathematics (B.S.) and Physics (B.A.), and I am interested in AI and quantum computing. I have also already taken or plan to take coursework in music performance (private lessons and chamber music), Chinese (advanced language and history/culture), philosophy, and art history. On campus, I work as a peer tutor in the Math Department, I volunteer with Code Haven as a classroom mentor, and I am a problem writer for Yale Math Competition.`,
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
            <section className='home-bio-container'>
                <div className='home-bio-img-outer-container'>
                    <figure className='home-bio-img-container'>
                        <img className='home-bio-img' src='Media/Images/MugShot.jpg' />
                    </figure>
                </div>
                <div className='home-bio-text-container'>
                    <h2>Hello.</h2>
                    <p>
                        My name is Troy Feng, and I am
                    </p>
                </div>
            </section>
            {homeSections}
        </div>
    )
}