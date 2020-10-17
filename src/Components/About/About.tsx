import './About.css'
import React from 'react'
import Gallery from '../Gallery/Gallery'
import { AboutSlide } from './AboutSlide/AboutSlide'

export const About = () => {
    const testItems = [
        <AboutSlide
            imageURL='../Media/leaning-back.jpg'
            title='I am cool'
            subtitle='I am very cool'
            redirectText='About me'
            onClick={() => false}
        />,
        <div>TEST2</div>,
        <div>TEST3</div>,
        <div>TEST4</div>,
        <div>TEST5</div>,
    ]

    return (
        <div className='about-container'>
            ABOUT
            <Gallery items={testItems} />
        </div>
    )
}