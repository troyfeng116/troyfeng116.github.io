import './About.css'
import React from 'react'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import { AboutSection } from './AboutSection/AboutSection'

export const About = () => {
    const textArr = [
        `I am currently an undergraduate student at Yale University in Pauli Murray College, class of 2023.5 as I am on a leave of absence after my first year (Class of 2023 at heart). I will hopefully be double majoring in Computer Science & Mathematics (B.S.) and Physics (B.A.), and I am interested in AI and quantum computing. I have also already taken or plan to take coursework in music performance (private lessons and chamber music), Chinese (advanced language and history/culture), philosophy, and art history. On campus, I work as a peer tutor in the Math Department, I volunteer with Code Haven as a classroom mentor, and I am a problem writer for Yale Math Competition.`,
        `I am a Software Engineer Intern at Eureka Surveys.`,
        `I am a pianist`,
        `I enjoy Boston sports`,
    ]
    const imgUrls = [
        [
            'Media/Images/Yale/MurrayTower1.jpg',
            //'Media/Images/MurrayTower2.jpg',
            //'Media/Images/MurrayTower3.jpg',
            'Media/Images/Yale/Harkness1.jpg',
            'Media/Images/Yale/MurrayTower4.jpg',
            'Media/Images/Yale/Harkness2.jpg',
            'Media/Images/Yale/MurrayTower5.jpg',
            'Media/Images/Yale/Harkness3.jpg',
        ],
        [
            'Media/Images/Math.jpg',
            'Media/Images/leaning-back.jpg',
        ],
        [
            'Media/Images/leaning-back.jpg',
        ],
        [
            'Media/Images/leaning-back.jpg',
        ]
    ]
    const aboutSections = textArr.map((text, index) => {
        return (
            <AnimateOnScroll key={index}>
                <AboutSection
                    even={index % 2 === 0}
                    text={text}
                    imgUrls={imgUrls[index]}
                />
            </AnimateOnScroll>
        )
    })

    return (
        <div className='about-container'>
            {aboutSections}
        </div>
    )
}