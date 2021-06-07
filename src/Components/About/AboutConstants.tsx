import React from 'react'
import { FaMusic, FaSwimmer, FaTableTennis } from 'react-icons/fa'
import Button, { ButtonColor, ButtonSize } from 'Components/Button'

import { EducationCellProps } from './EducationCell'
import { ExperienceCellProps } from './ExperienceCell'
import { Music, Swimming, Tennis } from './MoreAboutMe'

export const aboutTextArr = [
    `My name is Troy, and I'm originally from Rhode Island.
I'm a long-time problem solver, and I enjoy mathematics
(number theory, probability, & statistics), computer programming
(web development & algorithmic computation), and philosophy.
I also love learning, teaching, and sharing knowledge. When I'm not
busy studying or working, I'm most likely out with friends, playing
the piano, playing tennis, watching various TV shows (both American
and Chinese), or watching sports (I'm a huge fan of the ATP/WTA and 
swimming, and I also love the Boston sports teams).`,
    `I am currently an undergraduate student at Yale University in
Pauli Murray College, class of 2024 as I am on a leave of absence after
my first year (Class of 2023 always at heart). I will be majoring
in Computer Science & Mathematics (B.S.) and Philosophy (B.A. with a
concentration in psychology), and I am
interested in AI and quantum computing. I have also already taken and
plan to take more coursework in music performance (private lessons and
chamber music), Chinese (advanced language and history/culture),
sociology, and art history. On campus, you can usually probably find me
searching for new study spots, leading office hours and section as a 
mathematics peer tutor and CS50 TA, volunteering with Code Haven as
a classroom mentor, or practicing in the Addams Center or Pauli Murray
piano rooms.`,
    `I love building and perfecting products, and I am an experienced
React TypeScript web developer who can efficiently build and ship
industry-standard code and products within an inter-departmental team.
I am currently a Software Engineer Intern at Eureka Surveys, a market 
research startup that distributes paid surveys to over 50,000 daily
active users. At Eureka, I am a frontend engineer working in React
Typescript and Next.js, building and overseeing all web product engineering from
the ground-up. My frontend knowledge and skillset also includes data
visualization, UX product design, SEO, server side rendering, website
optimization, and analytics.`,
    `I have an extensive problem-solving background, thanks to my years
of experience in competitive mathematics, academic coursework, and
personal technical projects. I have substantial knowledge and experience
in Java/C/C++, algorithms and data structures, number theory, probability,
statistics, numerical and algorithmic computation, and combinatorics.
My personal projects include an open-source npm library that uses machine learning
to detect gibberish text, a backtracking algorithm visualizer for
chess puzzles, a sorting algorithm visualizer, and 100+ computational
number theory problems solved in HackerRank's ProjectEuler+ competition.
I hope to combine my love of numbers and problem solving with my passion
for building to conduct research at the intersection of computer science and
mathematics, namely in natural language and computational linguistics with
applications in behavioral economics and sociology.`,
    `Teamwork and collaboration are of the utmost importance to me in
everything that I do. I enjoy teaching as much as I enjoy learning,
and I am an enthusiastic communicator when it comes to
sharing knowledge. I have held various tutoring and mentorship positions
at Juni Learning and Yale, which have been rewarding and valuable
experiences for me and (I hope) the people I've met. Be it in the context
of software engineering, playing sports, or slogging through gruelling problem sets,
I am deeply invested in the success of my peers and teammates.
I know that I can only perform at my best in an environment
where those around me are also as invested in my success as their own,
and I constantly and actively seek such environments.`,
    `I have been playing the piano for 14 years, and I am an
experienced performer. Much of my formal performance experience is
as a classical pianist: I am a two-time winner (2015, 2017) of the
Rhode Island Philharmonic Concerto & Aria Competition, 2nd (2018),
3rd (2017), and 1st (2015) place finisher at the URI Piano Extravaganza!,
and an Honors Recital invitee at the RIMEA Solo & Ensemble Festival (2019).
In addition to my classical training, I also have experience as a
jazz pianist, jazz vibrophonist, and chamber music pianist. Some of my
personal favorite piano repertoire includes the Chopin Ballades,
Liszt's La Campanella, Keith Jarret's Köln Concert, and Brahms's 2nd
Piano Concerto.`,
    `Much of my skills in discipline, focus, time management, teamwork,
and leadership can be attributed to sports. During my career as
a five-year high school varsity swimmer, four-year high school varsity
tennis player, eight-year USA Swimming club swimmer, and eight-year USTA
tennis player, I met and trained with many of my closest friends to date.
Being with my teammates pushed me to 3 RIIL All-State honors,
9 RIIL All-Division honors, and 7 top 30 event season finishes in the
New England Swimming age group rankings. While my days as a formal
tennis player and swimmer are likely over, I still frequently hit the pool
and courts to spend time with friends and loosen up in my free time.`,
]

export const aboutImgUrls = [
    ['/Media/Images/mug-shot-2.jpg'],
    [
        '/Media/Images/Yale/MurrayTower1.jpg',
        '/Media/Images/Yale/Harkness1.jpg',
        '/Media/Images/Yale/MurrayTower4.jpg',
        '/Media/Images/Yale/Harkness2.jpg',
        '/Media/Images/Yale/MurrayTower5.jpg',
        '/Media/Images/Yale/Harkness3.jpg',
    ],
    ['/Media/Images/AboutImages/typescript-react.png'],
    ['/Media/Images/AboutImages/project-euler-sublime.png'],
    ['/Media/Images/AboutImages/collab.png'],
    ['/Media/Images/AboutImages/piano.png'],
    ['/Media/Images/AboutImages/swimming.png', 'Media/Images/AboutImages/tennis.png'],
]

export const aboutButtons = [
    undefined,
    undefined,
    <Button key={2} color={ButtonColor.Purple} size={ButtonSize.Small} onClick={() => window.open('https://eurekasurveys.com')}>
        Work sample (entire website)
    </Button>,
    <Button key={3} color={ButtonColor.Purple} size={ButtonSize.Small} onClick={() => window.open('https://github.com/troyfeng116')}>
        Github
    </Button>,
    undefined,
    <Button key={5} color={ButtonColor.Purple} size={ButtonSize.Small} href="/other">
        Listen
    </Button>,
    undefined,
]

export const EDUCATION_INFO: EducationCellProps[] = [
    {
        logoImgSrc: '/Media/Images/AboutImages/yale-logo.png',
        school: 'Yale University',
        timeAtSchool: '2019-2024',
        degree: 'Computer Science & Mathematics (B.S.) and Philosophy (Psychology concentration, B.A.)',
        gpa: '4.0',
        description:
            "I'm a sophomore double majoring in Computer Science & Mathematics and Philosophy (concentration in psychology). I'm interested in the various intersections between engineering/tech and various topics in philosophy and psychology, such as AI, philosophy of math & science, logic & truth, social psych, and ethical engineering. Originally class of 2023 (always '23 at heart), but took leave of absence following first year.",
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
            'Conducted research experiments and testing under guidance of Prof. Dragomir Radev',
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
        icon: <FaSwimmer />,
        component: <Swimming />,
    },
    {
        icon: <FaTableTennis />,
        component: <Tennis />,
    },
]
