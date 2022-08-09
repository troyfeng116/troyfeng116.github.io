import React from 'react'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardFonts, StandardMargin, StandardWidth } from 'Styles/Standard'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

import ItemList from '../ItemList'

export const ProblemSolver: React.FC = () => {
    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <div>
            <TextGradient
                className={`${StandardMargin.B18} ${StandardFonts.MediumTextBold} ${StandardWidth.FitContent}`}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                Programmer & Problem Solver
            </TextGradient>
            <TextGradient
                className={`${StandardMargin.B18} ${StandardFonts.SmallTextAltBold}`}
                style={{ lineHeight: 1.5 }}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                I have an extensive problem-solving background, thanks to my years in competitive mathematics, academic coursework, and personal technical projects. I have substantial knowledge
                experience in algorithms, data structures, number theory, probability, statistics, numerical and algorithmic computation, and combinatorics. My personal projects include an open-source
                npm library that uses machine learning to detect gibberish text, a backtracking algorithm visualizer for chess puzzles, a sorting algorithm visualizer, and 100+ computational number
                theory problems solved in HackerRank&apos;s ProjectEuler+ competition. I hope to combine my love of numbers and problem solving with my passion for building to conduct research at the
                intersection of computer science and mathematics, with applications in building ethical AI and deep learning models and the social impact of highly scalable and intelligent software.
            </TextGradient>
            <div className={`${StandardMargin.B18}`}>
                <ItemList label="Skills" items={['JavaScript (TypeScript, ES6)', 'Java', 'C', 'C++11', 'Python', 'Racket', 'UNIX', 'Git']} />
            </div>
            <ItemList label="Accomplishments" items={['AIME Qualifier (2016, 2019)', 'RIML Top Overall Scorer', 'Army Armstrong Math Award', 'MATHCOUNTS RI State Champion (2015)']} />
        </div>
    )
}
