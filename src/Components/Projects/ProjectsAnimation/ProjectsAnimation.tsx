import './ProjectsAnimation.css'
import React, { ReactNode, useEffect, useState } from 'react'
import { colorArr } from '../../../Constants'

interface ProjectsAnimationProps {
    children: ReactNode,
}

const ProjectsAnimation = (props: ProjectsAnimationProps) => {
    const { children } = props
    const [color, setColor] = useState<number>(0)
    const numColors = colorArr.length

    useEffect(() => {
        const timeout = setTimeout(() => {
            setColor((color + 1) % numColors)
        }, 2000)
        return () => clearTimeout(timeout)
    }, [color, numColors])

    return (
        <div className="projects-border-anim-wrapper">
            <svg viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg">
                <rect className="projects-border-anim-shape" height="100%" width="100%" style={{ stroke: colorArr[color] }} />
            </svg>
            <div className='projects-border-anim-content'>{children}</div>
        </div>
    )
}

export default ProjectsAnimation