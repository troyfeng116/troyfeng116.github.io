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
                experience in algorithms, data structures, operating systems, distributed systems, number theory, probability, statistics, numerical/algorithmic computation, spectral/algebraic graph
                theory, computational game theory, and combinatorics. My personal projects include an open-source npm library that uses machine learning to detect gibberish text, a backtracking
                algorithm visualizer for chess puzzles, a sorting algorithm visualizer, and 100+ computational number theory problems solved in HackerRank&apos;s ProjectEuler+ competition.
            </TextGradient>
            <div className={`${StandardMargin.B18}`}>
                <ItemList label="Skills" items={['JavaScript (TypeScript, ES6)', 'Java', 'C', 'C++11', 'Python', 'Racket', 'UNIX', 'Git']} />
            </div>
            <ItemList label="Accomplishments" items={['AIME Qualifier (2016, 2019)', 'RIML Top Overall Scorer', 'Army Armstrong Math Award', 'MATHCOUNTS RI State Champion (2015)']} />
        </div>
    )
}
