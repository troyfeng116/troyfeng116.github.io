import './Home.css'
import React, { useEffect, useState } from 'react'
import { HomeSection } from './HomeSection/HomeSection'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'

export const Home = () => {
    const [wordIndex, setWordIndex] = useState<number>(0)
    const meWords = [
        'problem solver',
        'performer',
        'entertainer',
        'programmer',
        'tenista',
        'pianist',
    ]

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setWordIndex((wordIndex + 1) % meWords.length)
        }, 2000)
        return () => clearTimeout(timeOut)
    }, [wordIndex])

    const textArr = [
        `I am currently an undergraduate student at Yale University in Pauli Murray College, class of 2023.5 as I am on a leave of absence after my first year (Class of 2023 at heart). I will hopefully be double majoring in Computer Science & Mathematics (B.S.) and Physics (B.A.), and I am interested in AI and quantum computing. I have also already taken or plan to take coursework in music performance (private lessons and chamber music), Chinese (advanced language and history/culture), philosophy, and art history. On campus, I work as a peer tutor in the Math Department, I volunteer with Code Haven as a classroom mentor, and I am a problem writer for Yale Math Competition.`,
        `I am a Software Engineer Intern at Eureka Surveys.`
    ]
    const imgUrls = [
        [
            'Media/Images/MurrayTower1.jpg',
            'Media/Images/MurrayTower2.jpg',
            'Media/Images/MurrayTower3.jpg',
            'Media/Images/MurrayTower4.jpg',
            'Media/Images/MurrayTower5.jpg',
        ],
        [
            'Media/Images/Math.jpg',
            'Media/Images/leaning-back.jpg',
        ],
    ]
    const homeSections = textArr.map((text, index) => {
        return (
            <AnimateOnScroll key={index}>
                <HomeSection
                    even={index % 2 === 0}
                    text={text}
                    imgUrls={imgUrls[index]}
                />
            </AnimateOnScroll>
        )
    })
    return (
        <div className='home-container'>
            <AnimateOnScroll>
                <section className='home-bio-container'>
                    <div className='home-bio-img-outer-container'>
                        <figure className='home-bio-img-container'>
                            <img className='home-bio-img' src='Media/Images/MugShot.jpg' alt='Troy Feng' />
                        </figure>
                    </div>
                    <div className='home-bio-text-container'>
                        <h2>Hello</h2>
                        <p>
                            My name is Troy Feng, and I am a&nbsp;
                            <span
                                className='home-bio-me-word'
                                style={{ color: '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0') }}
                            >
                                {meWords[wordIndex]}
                            </span>
                        </p>
                    </div>
                </section>
            </AnimateOnScroll>
            {homeSections}
        </div>
    )
}