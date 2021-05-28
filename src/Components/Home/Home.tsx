import './Home.module.css'

import React from 'react'

import AgeCounter from '../AgeCounter'
import AnimateOnScroll from '../AnimateOnScroll'
import Gallery from '../Gallery'
import { StandardFonts, StandardLayout, StandardMargin, StandardPadding, StandardTextColors } from '../Styles'
import WordTyper from '../WordTyper'

import { likeWords, meWords } from './HomeConstants'
import HomeFlip from './HomeFlip'
import HomeSlide from './HomeSlide'

export const Home: React.FC = () => {
    const homeSlides = [
        <HomeSlide
            key={0}
            imageURL="/Media/Images/Math.jpg"
            title="Problem Solver"
            subtitle="I enjoy computer programming, mathematics, numbers, and collaboration."
            redirectText="Projects"
            href="/projects"
        />,
        <HomeSlide
            key={1}
            imageURL="/Media/Videos/OldCampus.mp4"
            title="Student"
            subtitle="Studying Computer Science & Mathematics and Philosophy at Yale University."
            redirectText="More about me"
            href="/about"
        />,
        <HomeSlide
            key={2}
            imageURL="/Media/Videos/PianoSamples.mp4"
            title="Performer"
            subtitle="Long-time classically trained pianist, musician, and performer."
            redirectText="Listen"
            href="/other"
        />,
        <HomeSlide key={3} imageURL="/Media/Videos/Tweener.mp4" title="Competitor" subtitle="Tennis player and (retired) swimmer." redirectText="More" href="/about" />,
        <HomeSlide key={4} imageURL="/Media/Images/leaning-back.jpg" title="That Guy." subtitle="Entertainer, Instigator, Aloofly" redirectText="More about me" href="/about" />,
    ]

    return (
        <div className={`home-container ${StandardPadding.Y36} ${StandardPadding.X72} ${StandardLayout.FlexColCenter}`}>
            <AnimateOnScroll>
                <section className="home-bio-container">
                    <HomeFlip />
                    <div className="home-bio-text-container">
                        <h2 className={`${StandardFonts.H1Text} ${StandardTextColors.Blue}`}>Hello!</h2>
                        <div className="home-bio-facts-container">
                            <div className={`home-bio-text ${StandardFonts.SmallText} ${StandardTextColors.Purple}`}>
                                My name is Troy, and I am a
                                <span className={`home-counter-display ${StandardFonts.MediumTextAlt}`}>
                                    <WordTyper words={meWords} />
                                </span>
                            </div>
                            <div className={`home-bio-text ${StandardFonts.SmallText} ${StandardTextColors.Purple}`}>
                                I am &nbsp;
                                <span className={`home-counter-display ${StandardFonts.MediumTextAlt} ${StandardTextColors.Blue}`}>
                                    <AgeCounter />
                                </span>
                                &nbsp;seconds old
                            </div>
                            <div className={`home-bio-text ${StandardFonts.SmallText} ${StandardTextColors.Purple}`}>
                                And I like &nbsp;
                                <span className={`home-counter-display ${StandardFonts.MediumTextAlt}`}>
                                    <WordTyper words={likeWords} />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimateOnScroll>
            {/* <section className="home-gallery-container">
                <Gallery items={homeSlides} showCircles={true} arrowsInside={true} bigArrow={true} timeoutSeconds={16} startIndex={0} />
            </section> */}
        </div>
    )
}
