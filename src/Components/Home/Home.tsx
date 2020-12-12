import './Home.css'
import React, { useState } from 'react'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import HomeSlide from './HomeSlide/HomeSlide'
import Gallery from '../Gallery/Gallery'
import AgeCounter from '../AgeCounter/AgeCounter'
import WordCounter from '../WordCounter/WordCounter'
import FlipCircle from '../FlipCircle/FlipCircle'
import { Redirect } from 'react-router'

export const Home = () => {
    const [redirectTo, setRedirectTo] = useState<string | undefined>()

    const meWords = [
        'problem solver',
        'problem maker',
        'problem',
        'talented individual (ask my mom)',
        'performer',
        'entertainer',
        'programmer',
        'tenista',
        'pianist',
        'Bulldog',
    ]

    const likeWords = [
        'the New England Patriots',
        'snow',
        'broccoli',
        '琅琊榜 (Nirvana in Fire)',
        'sci-fi and action movies',
        'driving',
        'the Celtics',
        'pistachios',
        'The Office',
    ]

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
            onClick={() => setRedirectTo('/about')}
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
            onClick={() => setRedirectTo('./about')}
        />,
    ]

    if (redirectTo) {
        return <Redirect push to={redirectTo} />
    }

    const frontCard = (
        <div className="home-bio-flip-front">
            <div className="home-bio-img-container">
                <img className="home-bio-img" src="Media/Images/mug-shot-1.jpg" alt="Troy Feng" />
            </div>
        </div>
    )

    const backCard = <div className="home-bio-flip-back">TF</div>

    return (
        <div className="home-container">
            <AnimateOnScroll>
                <section className="home-bio-container">
                    <FlipCircle horizontal={false} front={frontCard} back={backCard} width={275} />

                    <div className="home-bio-text-container">
                        <h2 className="home-bio-hello">Hello</h2>
                        <div className="home-bio-facts-container">
                            <div className="home-bio-text">
                                My name is Troy, and I am a
                                <span className="home-counter-display"><WordCounter words={meWords} timeout={-1} /></span>
                            </div>
                            <div className="home-bio-text">
                                I am &nbsp;
                                <span className="home-counter-display"><AgeCounter /></span>
                                &nbsp;seconds old
                            </div>
                            <div className="home-bio-text">
                                And I like &nbsp;
                                <span className="home-counter-display"><WordCounter words={likeWords} timeout={-1} /></span>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimateOnScroll>
            <section className="home-gallery-container">
                <Gallery
                    items={homeSlides}
                    showCircles={true}
                    arrowsInside={true}
                    bigArrow={true}
                    timeoutSeconds={16}
                    startIndex={0}
                />
            </section>
        </div>
    )
}