import './Home.css'
import React, { useEffect, useState } from 'react'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import HomeSlide from './HomeSlide/HomeSlide'
import Gallery from '../Gallery/Gallery'

export const Home = () => {
    const [wordIndex, setWordIndex] = useState<number>(0)
    const [redirectTo, setRedirectTo] = useState<string | undefined>()

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

    const homeSlides = [
        <HomeSlide
            imageURL='Media/Images/Math.jpg'
            title='Problem Solver'
            subtitle='I enjoy computer programming, mathematics, numbers, and collaboration.'
            redirectText='Projects'
            onClick={() => setRedirectTo('/projects')}
        />,
        <HomeSlide
            imageURL='Media/Videos/OldCampus.mp4'
            title='Student'
            subtitle='Studying Computer Science & Mathematics and Physics at Yale University.'
            redirectText='Boola'
            onClick={() => setRedirectTo('/')}
        />,
        <HomeSlide
            imageURL='Media/Videos/PianoSamples.mp4'
            title='Performer'
            subtitle='Long-time classically trained pianist, musician, and performer.'
            redirectText='Listen here'
            onClick={() => setRedirectTo('./other')}
        />,
        <HomeSlide
            imageURL='Media/Videos/Tweener.mp4'
            title='Competitor'
            subtitle='Tennis player and (retired) swimmer.'
            redirectText='Watch here'
            onClick={() => setRedirectTo('./other')}
        />,
        <HomeSlide
            imageURL='Media/Images/leaning-back.jpg'
            title='That Guy.'
            subtitle='Entertainer, Instigator, Aloofly'
            redirectText='Home'
            onClick={() => setRedirectTo('./')}
        />,
    ]

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
                        <h2 className='home-bio-hello'>Hello</h2>
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
            <section className='home-gallery-container'>
                <Gallery
                    items={homeSlides}
                    showCircles={true}
                    arrowsInside={true}
                    bigArrow={true}
                    timeoutSeconds={16}
                />
            </section>
        </div>
    )
}