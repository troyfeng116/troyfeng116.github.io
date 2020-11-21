import './About.css'
import React from 'react'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import { AboutSection } from './AboutSection/AboutSection'

export const About = () => {
    const textArr = [
        `My name is Troy, and I'm originally from Rhode Island. I'm a long-time problem solver, and I enjoy mathematics (number theory, probability & statistics), computer programming and web development, and quantum physics. I also love learning, teaching, and sharing knowledge. When I'm not busy studying or working, I'm most likely out with friends, playing the piano, playing tennis, or watching sports (I'm a fan of the Boston sports teams, and I also follow the ATP/WTA and swimming).`,
        `I am currently an undergraduate student at Yale University in Pauli Murray College, class of 2023.5 as I am on a leave of absence after my first year (Class of 2023 at heart). I will hopefully be double majoring in Computer Science & Mathematics (B.S.) and Physics (B.A.), and I am interested in AI and quantum computing. I have also already taken or plan to take coursework in music performance (private lessons and chamber music), Chinese (advanced language and history/culture), philosophy, and art history. On campus, I work as a peer tutor in the Math Department, I volunteer with Code Haven as a classroom mentor, and I am a problem writer for Yale Math Competition.`,
        `I am a Software Engineer Intern at Eureka Surveys.`,
        `I have been playing the piano for 14 years, `,
        `I enjoy Boston sports`,
    ]
    const imgUrls = [
        [
            'Media/Images/leaning-back.jpg',
        ],
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
            'Media/Images/leaning-back.jpg',
        ],
        [
            'Media/Images/leaning-back.jpg',
        ],
        [
            'Media/Images/leaning-back.jpg',
        ],
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