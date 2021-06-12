import React from 'react'
import TextGradient from 'Components/TextGradient'
import { StandardFonts, StandardMargin } from 'Styles/Standard'

import ItemList from '../ItemList'

export const ProblemSolver: React.FC = () => {
    return (
        <div>
            <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>Programmer & Problem Solver</p>
            </TextGradient>
            <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                <p className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`} style={{ lineHeight: 1.5 }}>
                    I have an extensive problem-solving background, thanks to my years in competitive mathematics, academic coursework, and personal technical projects. I have substantial knowledge
                    experience in algorithms, data structures, number theory, probability, statistics, numerical and algorithmic computation, and combinatorics. My personal projects include an
                    open-source npm library that uses machine learning to detect gibberish text, a backtracking algorithm visualizer for chess puzzles, a sorting algorithm visualizer, and 100+
                    computational number theory problems solved in HackerRank&apos;s ProjectEuler+ competition. I hope to combine my love of numbers and problem solving with my passion for building to
                    conduct research at the intersection of computer science and mathematics.
                </p>
            </TextGradient>
            <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                <ItemList label="Skills" items={['JavaScript (TypeScript, ES6)', 'Java', 'C', 'C++11', 'Python', 'Racket', 'UNIX', 'Git']} />
            </TextGradient>
            <TextGradient from="#d475d4" to="#fa9f55">
                <ItemList label="Accomplishments" items={['AIME Qualifier (2016, 2019)', 'RIML Top Overall Scorer', 'Army Armstrong Math Award', 'MATHCOUNTS RI State Champion (2015)']} />
            </TextGradient>
        </div>
    )
}
