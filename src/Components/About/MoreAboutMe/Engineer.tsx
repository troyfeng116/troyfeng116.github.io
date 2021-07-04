import React from 'react'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardFonts, StandardMargin, StandardWidth } from 'Styles/Standard'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

import ItemList from '../ItemList'

export const Engineer: React.FC = () => {
    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <div>
            <TextGradient
                className={`${StandardMargin.B18} ${StandardFonts.MediumTextBold} ${StandardWidth.FitContent}`}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                Engineer & Builder
            </TextGradient>
            <TextGradient
                className={`${StandardMargin.B18} ${StandardFonts.SmallTextAltBold}`}
                style={{ lineHeight: 1.5 }}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                I love building and perfecting products from single-page to enterprise-scale applications, and I am an experienced web developer who can efficiently build and ship industry-standard
                code and products within an inter-departmental team. As a software engineer intern at Eureka Surveys, I am a frontend engineer working in React Typescript and Next.js, building and
                overseeing all web engineering. I have also built multiple full-stack SPA projects from the ground up using React, TypeScript, TailwindCSS, Firebase, and Node.js.
            </TextGradient>
            <div className={`${StandardMargin.B18}`}>
                <ItemList label="Languages and Frameworks" items={['JavaScript (TypeScript, ES6)', 'HTML5/CSS3', 'Node.js', 'ReactJS (v16.8, hooks)', 'Next.js', 'Firebase', 'D3.js', 'TailwindCSS']} />
            </div>
            <ItemList label="Skills" items={['Server-side rendering', 'Agile development', 'UX and product design', 'Data visualization', 'SEO', 'Website optimization', 'Analytics']} />
        </div>
    )
}
