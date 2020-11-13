import './About.css'
import React, { useState } from 'react'
import Gallery from '../Gallery/Gallery'
import AboutSlide from './AboutSlide/AboutSlide'
import { Redirect } from 'react-router'

export const About = () => {
    const [redirectTo, setRedirectTo] = useState<string | undefined>()

    const aboutSlides = [
        <AboutSlide
            imageURL='Media/Images/Math.jpg'
            title='Problem Solver'
            subtitle='I enjoy computer programming, mathematics, numbers, and collaboration.'
            redirectText='Projects'
            onClick={() => setRedirectTo('/projects')}
        />,
        <AboutSlide
            imageURL='Media/Videos/OldCampus.mp4'
            title='Student'
            subtitle='Studying Computer Science & Mathematics and Physics at Yale University.'
            redirectText='Boola'
            onClick={() => setRedirectTo('/')}
        />,
        <AboutSlide
            imageURL='Media/Videos/PianoSamples.mp4'
            title='Performer'
            subtitle='Long-time classically trained pianist, musician, and performer.'
            redirectText='Listen here'
            onClick={() => setRedirectTo('./other')}
        />,
        <AboutSlide
            imageURL='Media/Videos/Tweener.mp4'
            title='Competitor'
            subtitle='Tennis player and (retired) swimmer.'
            redirectText='Watch here'
            onClick={() => setRedirectTo('./other')}
        />,
        <AboutSlide
            imageURL='Media/Images/leaning-back.jpg'
            title='That Guy.'
            subtitle='Entertainer, Instigator, Aloofly'
            redirectText='Home'
            onClick={() => setRedirectTo('./')}
        />,
    ]

    if (redirectTo) {
        return <Redirect to={redirectTo} />
    }
    return (
        <div className='about-container'>
            <Gallery
                items={aboutSlides}
                showCircles={true}
                arrowsInside={true}
                bigArrow={true}
                timeoutSeconds={16}
            />
        </div>
    )
}