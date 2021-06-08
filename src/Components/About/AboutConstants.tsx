import React from 'react'
import { FaAtom, FaLaptopCode, FaMusic, FaSwimmer, FaTableTennis } from 'react-icons/fa'

import { EducationCellProps } from './EducationCell'
import { ExperienceCellProps } from './ExperienceCell'
import { Engineer, Music, ProblemSolver, Swimming, Tennis } from './MoreAboutMe'

export const EDUCATION_INFO: EducationCellProps[] = [
    {
        logoImgSrc: '/Media/Images/AboutImages/yale-logo.png',
        school: 'Yale University',
        timeAtSchool: '2019-2024',
        degree: 'Computer Science & Mathematics (B.S.) and Philosophy (Psychology concentration, B.A.)',
        gpa: '4.0',
        description:
            "I'm a sophomore double majoring in Computer Science & Mathematics and Philosophy (concentration in psychology). I'm interested in the various intersections between engineering/tech and various topics in philosophy and psychology, such as AI, philosophy of math & science, logic & truth, social psych, and ethical engineering. I was originally class of 2023 (always '23 at heart), but I took a leave of absence following first year.",
        coursework: [
            'Vector Analysis',
            'Linear Algebra',
            'Intro to Computer Science',
            'Data Structures',
            'Discrete Mathematics',
            'Systems Programming & Computer Organization',
            'Philosophy of Technology',
            'Philosophy of Mathematics',
            'Intro to Psychology',
        ],
        activities: ['Yale Undergraduate Piano Collective', 'Yale Math Competition Problem Writer', 'Code Haven Classroom Mentor'],
    },
    {
        logoImgSrc: '/Media/Images/AboutImages/wheeler-logo.png',
        school: 'The Wheeler School',
        timeAtSchool: '2007-2019',
        gpa: '4.36',
        coursework: [
            'AP Calculus BC',
            'Multivariable Calculus',
            'AP Computer Science A',
            'AP Microeconomics',
            'AP Macroeconomics',
            'AP Statistics',
            'AP Physics C: Mechanics',
            'AP Biology',
            'AP Chemistry',
            'AP Calculus AB',
            'AP Environmental Science',
            'AP US History',
            'AP Music Theory',
            'AP Spanish',
        ],
        activities: ['Varsity swim (5 years, captain)', 'Varsity tennis (4 years, captain)', 'Math team (captain)', 'Classical Music Club (president)'],
        awards: ['National Merit Scholar', 'Cum laude (junior inductee)', 'National AP Scholar', 'U.S. Presidential Scholars Program semifinalist'],
    },
]

export const WORK_EXPERIENCE: ExperienceCellProps[] = [
    {
        title: 'Research Assistant',
        company: 'Language and Information Learning at Yale (LILY)',
        companyHref: 'https://yale-lily.github.io/',
        timeAtPosition: 'February 2021 - current',
        description: [
            'Conducted research experiments and testing under Prof. Dragomir Radev',
            'Used Python (nltk, transformers, Jupyter, etc.) to consolidate text summarization models into single API',
            'Designed and tested Python modules and documentation in codebase referenced in new NLP lab publications',
            'Worked in project team in collaboration with Microsoft Research',
        ],
    },
    {
        title: 'Software Engineer Intern',
        company: 'Eureka Surveys',
        companyHref: 'https://eurekasurveys.com/',
        timeAtPosition: 'August 2020 - current',
        description: [
            'Oversaw and led frontend web development in TypeScript, ReactJS, Next.js, Vercel, and Firebase',
            ' Built and launched end-to-end novel survey creation tool from the ground up with real-time data visualizations and NLP analysis, grew from 0 to hundreds of researcher customers in three weeks',
            "Researched and leveraged OpenAI's beta API of GPT-3 powered engines for powerful NLP-based survey quality control",
            'Designed and implemented full-stack programmatic admin tools using Node.js + Firebase backend and React TypeScript + Next.js frontend',
        ],
        workSampleLabel: 'Entire website',
        workSampleHref: 'https://eurekasurveys.com/',
        workSampleNote: '(I suggest logging in as a researcher to see our novel survey creation product)',
    },
    {
        title: 'Peer Tutor',
        company: 'Yale University Math Department',
        timeAtPosition: 'August 2020 - June 2021',
        description: [
            "Held open drop-in office hours twice a week for Yale's MATH 115 (Calculus of Functions of One Variable I) course",
            'Led student discussions + collaboration and answered general questions about course material + problem sets for sessions of 5-25 students',
        ],
    },
    {
        title: 'Computer Science Instructor',
        company: 'Juni Learning',
        companyHref: 'https://junilearning.com/',
        timeAtPosition: 'August 2020 - April 2021',
        description: [
            'Tutored 8 kids ages 6-16 in weekly one-on-one remote learning sessions',
            'Taught fundamental computer science concepts in JavaScript, Python, and Scratch, ranging in level from beginner to AP Computer Science A preparation',
        ],
    },
]

export const SWIMMING_TIMES: { event: string; scyTime: string; lcmTime?: string }[] = [
    { event: '100 BK', scyTime: '54.83', lcmTime: '1:03.71' },
    { event: '200 BK', scyTime: '1:49.39', lcmTime: '2:19.73' },
    { event: '200 IM', scyTime: '2:00.13', lcmTime: '2:20.89' },
    { event: '50 FR', scyTime: '22.80', lcmTime: '26.63' },
    { event: '100 FR', scyTime: '50.49', lcmTime: '57.25' },
    { event: '200 FR', scyTime: '1:49.60', lcmTime: '2:06.04' },
    { event: '100 FL', scyTime: '54.69', lcmTime: '1:03.27' },
    { event: '200 FL', scyTime: '2:02.80' },
]

export const MORE_ABOUT_ME_ITEMS: { icon: JSX.Element; component: JSX.Element }[] = [
    {
        icon: <FaMusic />,
        component: <Music />,
    },
    {
        icon: <FaLaptopCode />,
        component: <Engineer />,
    },
    {
        icon: <FaAtom />,
        component: <ProblemSolver />,
    },
    {
        icon: <FaSwimmer />,
        component: <Swimming />,
    },
    {
        icon: <FaTableTennis />,
        component: <Tennis />,
    },
]
