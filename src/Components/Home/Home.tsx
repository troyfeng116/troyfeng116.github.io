import './Home.module.css'

import React, { useState } from 'react'
import { Redirect } from 'react-router'

import AgeCounter from '../AgeCounter'
import AnimateOnScroll from '../AnimateOnScroll'
import FlipCircle from '../FlipCircle'
import Gallery from '../Gallery'
import TextMultiColor from '../TextMultiColor'
import WordCounter from '../WordCounter'

import { likeWords, meWords } from './HomeConstants'
import HomeSlide from './HomeSlide'

export const Home: React.FC = () => {
    const [redirectTo, setRedirectTo] = useState<string | undefined>()

    if (redirectTo) {
        return <Redirect push to={redirectTo} />
    }

    const homeSlides = [
        <HomeSlide
            key={0}
            imageURL="Media/Images/Math.jpg"
            title="Problem Solver"
            subtitle="I enjoy computer programming, mathematics, numbers, and collaboration."
            redirectText="Projects"
            onClick={() => setRedirectTo('/projects')}
        />,
        <HomeSlide
            key={1}
            imageURL="Media/Videos/OldCampus.mp4"
            title="Student"
            subtitle="Studying Computer Science & Mathematics and Physics at Yale University."
            redirectText="Boola"
            onClick={() => setRedirectTo('/about')}
        />,
        <HomeSlide
            key={2}
            imageURL="Media/Videos/PianoSamples.mp4"
            title="Performer"
            subtitle="Long-time classically trained pianist, musician, and performer."
            redirectText="Listen"
            onClick={() => setRedirectTo('/other')}
        />,
        <HomeSlide key={3} imageURL="Media/Videos/Tweener.mp4" title="Competitor" subtitle="Tennis player and (retired) swimmer." redirectText="More" onClick={() => setRedirectTo('/about')} />,
        <HomeSlide
            key={4}
            imageURL="Media/Images/leaning-back.jpg"
            title="That Guy."
            subtitle="Entertainer, Instigator, Aloofly"
            redirectText="More about me"
            onClick={() => setRedirectTo('/about')}
        />,
    ]

    const frontCard = (
        <div className="home-bio-flip-front">
            <div className="home-bio-img-container">
                <img className="home-bio-img" src="Media/Images/mug-shot-1.jpg" alt="Troy Feng" />
            </div>
        </div>
    )

    const backCard = (
        <div className="home-bio-flip-back">
            <TextMultiColor text="TF" />
        </div>
    )

    return (
        <div className="home-container">
            <AnimateOnScroll>
                <section className="home-bio-container">
                    <FlipCircle horizontal={false} front={frontCard} back={backCard} width={275} constantRotate={true} />
                    <div className="home-bio-text-container">
                        <h2 className="home-bio-hello">Hello</h2>
                        <div className="home-bio-facts-container">
                            <div className="home-bio-text">
                                My name is Troy, and I am a
                                <span className="home-counter-display">
                                    <WordCounter words={meWords} timeout={-1} />
                                </span>
                            </div>
                            <div className="home-bio-text">
                                I am &nbsp;
                                <span className="home-counter-display">
                                    <AgeCounter />
                                </span>
                                &nbsp;seconds old
                            </div>
                            <div className="home-bio-text">
                                And I like &nbsp;
                                <span className="home-counter-display">
                                    <WordCounter words={likeWords} timeout={-1} />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimateOnScroll>
            <section className="home-gallery-container">
                <Gallery items={homeSlides} showCircles={true} arrowsInside={true} bigArrow={true} timeoutSeconds={16} startIndex={0} />
            </section>
        </div>
    )
}
