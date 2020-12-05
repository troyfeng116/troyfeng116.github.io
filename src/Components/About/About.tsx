import './About.css'
import React from 'react'
import { AnimateOnScroll } from '../AnimateOnScroll/AnimateOnScroll'
import { AboutSection } from './AboutSection/AboutSection'

export const About = () => {

    const textArr = [
        `My name is Troy, and I'm originally from Rhode Island. I'm a long-time problem solver, and I enjoy mathematics (number theory, probability & statistics), computer programming and web development, and quantum physics. I also love learning, teaching, and sharing knowledge. When I'm not busy studying or working, I'm most likely out with friends, playing the piano, playing tennis, watching various TV shows (both American and Chinese), or watching sports (I'm a fan of the Boston sports teams, and I also follow the ATP/WTA and swimming).`,
        `I am currently an undergraduate student at Yale University in Pauli Murray College, class of 2023.5 as I am on a leave of absence after my first year (Class of 2023 at heart). I will hopefully be double majoring in Computer Science & Mathematics (B.S.) and Physics (B.A.), and I am interested in AI and quantum computing. I have also already taken or plan to take coursework in music performance (private lessons and chamber music), Chinese (advanced language and history/culture), philosophy, and art history. On campus, I work as a peer tutor in the Math Department, I volunteer with Code Haven as a classroom mentor, and I am a problem writer for Yale Math Competition.`,
        `I am an experienced React TypeScript web developer with the ability to efficiently build and ship industry-standard code within an inter-departmental team. I am currently a Software Engineer Intern at Eureka Surveys, a market research startup that distributes paid surveys to over 50,000 daily active users. At Eureka, I do frontend development in React Typescript and Next.js, building substantial features from the ground-up including the company landing page and blog. I also have substantial experience in competitive mathematics, Java, C/C++, numerical analysis, number theory, and algorithmic computation through DSA coursework at Yale and personal projects.`,
        `I have been playing the piano for 14 years, and I am an experienced performer. Much of my formal performance experience is as a classical pianist: I am a two-time winner (2015, 2017) of the Rhode Island Philharmonic Concerto & Aria Competition, 2nd (2018), 3rd (2017), and 1st (2015) place finisher at the URI Piano Extravaganza!, and an Honors invitee at the RIMEA Solo & Ensemble Festival (2019). In addition to my classical training, I also have experience as a jazz pianist, jazz vibrophonist, and chamber pianist. Some of my personal favorite piano repertoire includes the Chopin Ballades, Liszt's La Campanella, Keith Jarret's Köln Concert, and Brahms's 2nd Piano Concerto.`,
        `Much of my skills in discipline, focus, time management, teamwork, and leadership can be attributed to playing sports. During my career as a five-year high school varsity swimmer, four-year high school varsity tennis player, eight-year USA Swimming club swimmer, and eight-year USTA tennis player, I met and trained with many of my closest friends to date. Being with my teammates pushed me to 3 RIIL All-State honors, 9 RIIL All-Division honors, and 7 top 30 event season finishes in the New England Swimming age group rankings. While my days as a formal tennis player and swimmer are likely over, I still frequently hit the pool and courts to spend time with friends and loosen up in my free time.`,
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
                    key={index}
                    even={index % 2 === 0}
                    text={text}
                    imgUrls={imgUrls[index]}
                />
            </AnimateOnScroll>
        )
    })

    return (
        <div className="about-container">
            {aboutSections}
        </div>
    )
}