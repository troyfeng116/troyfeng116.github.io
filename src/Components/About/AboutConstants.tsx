import React from 'react'
import { FaAtom, FaLaptopCode, FaMusic, FaSwimmer, FaTableTennis } from 'react-icons/fa'

import { WhoAmIProps } from './WhoAmI/WhoAmI'
import { EducationCellProps } from './EducationCell'
import { ExperienceCellProps } from './ExperienceCell'
import { Engineer, Music, ProblemSolver, Swimming, Tennis } from './MoreAboutMe'

export const WHO_AM_I_INFO: WhoAmIProps = {
    paragraphs: [
        'I am a problem solver at heart. I love tackling uncertain state-of-the-art problems where I don’t know if an answer even exists, let alone if I can find it. As a student, I am double majoring in computer science & math at Yale. I have a strong background in math and programming, specifically in number theory, probability & statistics, data structures & algorithms, distributed systems, and deep learning. Pure math and programming have always been two different fields where I can constantly challenge myself to struggle and think about cool problems.',
        'The only thing better than solving problems is doing it with friends or in a team. I love helping people solve problems as much as solving them myself. That is what fuels my interest in teaching/mentorship, product engineering, research for ethical AI & deep learning, and ethics/philosophy in tech & engineering. I hope to avoid "being smart in a narrow way", and I do my best to learn, build, and code with a focus on awareness and empathy. I hope to use my academic training and industry experience to improve my product-building empathy and intuition, expand my problem-solving skills, and develop the critical thinking and communication foundations needed to research and work in ethical AI and product engineering for social good and equity.',
        "I'm originally from Rhode Island, and I love New England weather and the Boston sports teams. I also enjoy playing tennis and swimming, as well as following both closely on the collegiate and professional level. Finally, I am a long-time pianist, and I love performing for anyone and anything.",
    ],
    skills: [
        'Go',
        'gRPC',
        'C',
        'C++',
        'Python',
        'Kubernetes',
        'Docker',
        'JavaScript (TypeScript, ES6)',
        'React (v16.8, hooks)',
        'Next.js',
        'Java',
        'SQL',
        'MATLAB',
        'Bash',
        'UNIX',
        'Git',
        'CI/CD (Travis, Jenkins)',
        'distributed systems',
        'multi-threading',
        'concurrency',
        'deep learning',
    ],
}

export const EDUCATION_INFO: EducationCellProps[] = [
    {
        logoImgSrc: '/Media/Images/AboutImages/yale-logo.png',
        school: 'Yale University',
        timeAtSchool: '2019-2024',
        degree: 'Computer Science and Mathematics (B.S.)',
        gpa: '3.97',
        description: [
            "I'm a junior majoring in Computer Science & Mathematics. I'm interested in the various intersections between engineering/tech and topics in philosophy and psychology, including AI & morality, philosophy of math & science, logic & truth, social psych, the effects of software on society, and ethical engineering. I was originally class of 2023 (always '23 at heart), but I took a leave of absence following first year.",
            "On campus, when I'm not in class or studying, you can find me working on lab research, mentoring/TAing for a math or CS class, unplugging in a piano practice room, at Toad's, in a heated debate, or wandering campus in search of new study/nap spots.",
        ],
        coursework: [
            'Intro to Abstract Algebra',
            'Advanced Probability',
            'Analysis II: Lebesgue Integration and Fourier Series',
            'Discrete Mathematics',
            'Advanced Vector Analysis and Linear Algebra',
            'Building Distributed Systems',
            'Randomized Algorithms',
            'AI for Games',
            'Intensive Algorithms',
            'Data Structures',
            'Systems Programming & Computer Organization',
            'Computational Models of Human Behavior',
            'Philosophy of Technology',
            'Philosophy of Mathematics',
            'Modal Logic',
        ],
        activities: ['Math/CS Teaching Assistant', 'Yale Undergraduate Piano Collective', 'Yale Math Competition Problem Writer', 'Code Haven Classroom Mentor'],
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
        title: 'Software Engineer Intern',
        company: 'IMC Trading',
        companyHref: 'https://www.imc.com/us/',
        timeAtPosition: 'June 2023 - August 2023',
        description: [],
    },
    {
        title: 'Software Developer Intern',
        company: 'IBM',
        companyHref: 'https://www.ibm.com/us-en?ar=1',
        timeAtPosition: 'May 2022 - August 2022',
        description: [
            'Automated company-wide cloud credential management system in Python + Docker + React + TypeScript + Next.js frontend and Travis + Kubernetes + Redis backend/CI',
            'Streamlined maintenance of 10,000+ sensitive credentials utilized across various company departments; optimized manual storage time by 90%',
            'Researched and leveraged state-of-the-art IBM cloud architecture, cloud secret management systems, and encryption techniques to improve cloud security and precision of resource access permissions',
        ],
    },
    {
        title: 'Research Assistant',
        company: 'Language and Information Learning at Yale (LILY)',
        companyHref: 'https://yale-lily.github.io/',
        timeAtPosition: 'February 2021 - current',
        description: [
            'Conducted research experiments and testing in NLP and computational linguistics (automatic text summarization, deep learning for code generation) under Prof. Dragomir Radev',
            'Architected end-to-end deep learning pipeline for code generation; preprocessed datasets, researched and leveraged state-of-the-art distributed deep learning frameworks (PyTorch Lightning, deepspeed, accelerate) to train and run inference with large (10B+ parameter) language models on multi-GPU lab hardware',
            "Evaluated fine-tuned and few-shot natural-language-to-code generation performance of 13 billion+ parameter language models including Salesforce's codegen, EleutherAI's GPT-J, Meta AI's LLaMa, and OpenAI's GPT-4/Codex; results submitted to NeurIPS 2023",
            'Used Python (nltk, transformers, Jupyter, torch, TensorFlow, etc.) to consolidate various text summarization models, evaluation metrics, and datasets into an accessible API',
            'Implemented custom continuous integration servers from scratch using Github webhooks',
            'Designed, wrote, and tested Python modules and documentation for open-source codebase referenced in new NLP lab publication published on ArXiV (https://arxiv.org/abs/2108.12738)',
            'Worked in project team in collaboration with Microsoft Research',
        ],
    },
    {
        title: 'Peer Tutor/Undergraduate Learning Assistant (ULA)',
        company: 'Yale University Math + CS Departments',
        timeAtPosition: 'August 2020 - current',
        description: [
            'ULA for CPSC 365 (Algorithms, S23) and CPSC 223 (Data Structures and Programming Techniques, F22)',
            'Peer Tutor for MATH 244 (Discrete Math, F22+S22), MATH 115 (Calculus of Functions of One Variable I, S21+F20)',
            'Held open drop-in office hours twice a week for Yale CS and MATH courses',
            'Graded and provided feedback on problem sets, quizzes, and exams',
            'Led student discussions + collaboration and answered general questions about course material + problem sets for sessions of 5-25 students',
        ],
    },
    {
        title: 'Teaching Assistant',
        company: 'CS50',
        companyHref: 'https://pll.harvard.edu/course/cs50-introduction-computer-science',
        timeAtPosition: 'August 2021 - December 2021',
        description: [
            'Course TA for CS50 @ Yale: Introduction to Computer Science',
            'Led and taught weekly sections of 10-15 students; covered topics including data structures and algorithms in C + Python, SQL databases, and web development using HTML + CSS + JavaScript + Flask',
            'Held weekly office hours to help with debugging and answer questions about programming problem sets and course material',
            'Graded and provided feedback on problem sets, quizzes, and exams',
        ],
    },
    {
        title: 'Software Engineer Intern',
        company: 'Eureka Surveys',
        companyHref: 'https://eurekasurveys.com/',
        timeAtPosition: 'August 2020 - August 2021',
        description: [
            "Researched, experimented with, and integrated OpenAI's GPT-3 powered beta API (fine-tuning, enhanced semantic search, completions) for powerful NLP-based survey quality control and low-quality-response detection; successfully filtered 10% of all survey volume",
            'Oversaw and led frontend web development and product engineering in React + Next.js + Vercel + Firebase (TypeScript) deployed to 40k daily active users; boosted site traffic by 35% and optimized site speed by 80%',
            'Built and launched complete end-to-end survey creation tool from the ground up with real-time data visualizations and state-of-the-art ML/NLP techniques; grew from 0 to hundreds of researcher customers in three weeks',
            'Designed and implemented full-stack projects using Node.js + Firebase backend and React + Next.js frontend to streamline community and product management',
            'Closely collaborated with product team, including UX designers and analysts; practiced industry-standard agile development, code review, and version control',
        ],
        workSampleLabel: 'Entire website',
        workSampleHref: 'https://eurekasurveys.com/',
        workSampleNote: '(I suggest logging in as a researcher to see our novel survey creation product)',
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
    { event: '200 BK', scyTime: '1:59.39', lcmTime: '2:19.73' },
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
