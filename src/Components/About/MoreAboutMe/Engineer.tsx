import React from 'react'
import { StandardFonts, StandardMargin } from 'Components/Styles'
import TextGradient from 'Components/TextGradient'

import ItemList from '../ItemList'

export const Engineer: React.FC = () => {
    return (
        <div>
            <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>Engineer & Builder</p>
            </TextGradient>
            <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                <p className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`} style={{ lineHeight: 1.5 }}>
                    I love building and perfecting products from single-page to enterprise-scale applications, and I am an experienced web developer who can efficiently build and ship
                    industry-standard code and products within an inter-departmental team. As a software engineer intern at Eureka Surveys, I am a frontend engineer working in React Typescript and
                    Next.js, building and overseeing all web engineering. I have also built multiple full-stack SPA projects from the ground up using React, TypeScript, TailwindCSS, Firebase, and
                    Node.js.
                </p>
            </TextGradient>
            <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                <ItemList label="Languages and Frameworks" items={['JavaScript (TypeScript, ES6)', 'HTML5/CSS3', 'Node.js', 'ReactJS (v16.8, hooks)', 'Next.js', 'Firebase', 'D3.js', 'TailwindCSS']} />
            </TextGradient>
            <TextGradient from="#d475d4" to="#fa9f55">
                <ItemList label="Skills" items={['Server-side rendering', 'Agile development', 'UX and product design', 'Data visualization', 'SEO', 'Website optimization', 'Analytics']} />
            </TextGradient>
        </div>
    )
}
