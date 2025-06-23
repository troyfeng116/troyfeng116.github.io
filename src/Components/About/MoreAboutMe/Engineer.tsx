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
                I love building and perfecting empathetic products from single-page to enterprise-scale applications, and I&apos;m an experienced web developer and product engineer who can efficiently
                build and ship industry-standard code and products within an inter-departmental team. As a software engineer intern at Eureka Surveys, I oversaw and led web frontend development and
                product engineering in React Typescript, Firebase, and Next.js, building substantial pages, components, and experiences. I have also built several SPA projects from the ground up using
                React, TypeScript, TailwindCSS, Firebase, and Node.js. Overall, I enjoy problem-solving to create empathetic user experiences for all people.
            </TextGradient>
            <div className={`${StandardMargin.B18}`}>
                <ItemList
                    label="Languages and Frameworks"
                    items={['JavaScript (TypeScript, ES6)', 'HTML5/CSS3', 'Node.js', 'ReactJS (v16.8, hooks)', 'Next.js', 'Firebase', 'D3.js', 'TailwindCSS', 'RESTful APIs', 'HTTP']}
                />
            </div>
            <ItemList label="Skills" items={['Server-side rendering', 'Agile development', 'UX and product design', 'Data visualization', 'SEO', 'Website optimization', 'Analytics']} />
        </div>
    )
}
