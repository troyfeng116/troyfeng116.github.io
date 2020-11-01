import './About.css'
import React, { useState } from 'react'
import Gallery from '../Gallery/Gallery'
import AboutSlide from './AboutSlide/AboutSlide'
import { Redirect } from 'react-router'

export const About = () => {
    const [redirectTo, setRedirectTo] = useState<string | undefined>()

    const aboutSlides = [
        <AboutSlide
            imageURL='logo192.png'
            title='Problem Solver'
            subtitle='I enjoy computer programming, mathematics, numbers, and collaboration.'
            redirectText='Projects'
            onClick={() => setRedirectTo('/projects')}
        />,
        <AboutSlide
            imageURL='Media/Images/leaning-back.jpg'
            title='Student'
            subtitle='Studying Computer Science and Mathematics at Yale University.'
            redirectText='Boola'
            onClick={() => setRedirectTo('/')}
        />,
        <AboutSlide
            imageURL='Media/Images/leaning-back.jpg'
            title='Musician'
            subtitle='Long-time classically trained and experimental pianist.'
            redirectText='Listen here'
            onClick={() => setRedirectTo('./other')}
        />,
        <AboutSlide
            imageURL='Media/Images/leaning-back.jpg'
            title='Competitor'
            subtitle='Tennis player and (former) swimmer.'
            redirectText='Watch here'
            onClick={() => setRedirectTo('./other')}
        />,
        <AboutSlide
            imageURL='Media/Images/leaning-back.jpg'
            title='That Guy.'
            subtitle='Entertainer, Instigator, Aloofly'
            redirectText='Hehe'
            onClick={() => setRedirectTo('./projects')}
        />,
    ]

    if (redirectTo) {
        return <Redirect to={redirectTo} />
    }
    return (
        <div className='about-container'>
            <Gallery items={aboutSlides} />
        </div>
    )
}