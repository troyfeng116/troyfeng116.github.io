import './Projects.module.css'

import React, { useState } from 'react'
import BorderGradient from 'Components/BorderGradient'
import { StandardBorderRadii, StandardPadding } from 'Components/Styles'

import Modal from '../Modal'

import ProjectsCard from './ProjectsCard'
import { PROJECTS } from './ProjectsConstants'

export const Projects: React.FC = () => {
    const [showImageModal, setShowImageModal] = useState<string | undefined>()
    const [activeIndex, setActiveIndex] = useState<number>(-1)

    const projectCards = PROJECTS.map((projectInfo, index) => {
        const { url, title, projectImgs, subtext, ghLink } = projectInfo
        return (
            <ProjectsCard
                key={`projects-card-${index}`}
                url={url}
                title={title}
                projectImgs={projectImgs}
                subtext={subtext}
                ghLink={ghLink}
                setShowImageModal={setShowImageModal}
                isActive={index === activeIndex}
                handleCardClicked={() => setActiveIndex(index)}
                handleCardMouseEnter={() => setActiveIndex(index)}
                handleCardMouseLeave={() => setActiveIndex(-1)}
            />
        )
    })

    return (
        <main className={`projects-container ${StandardPadding.Y60}`}>
            {showImageModal && (
                <Modal onClick={() => setShowImageModal(undefined)}>
                    <div className="projects-modal-img-container">
                        <BorderGradient borderRadius={12} borderSize={6} fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
                            <img src={showImageModal} className={`projects-modal-img ${StandardBorderRadii.R12}`} alt="Failed to load. Click anywhere to exit" />
                        </BorderGradient>
                    </div>
                </Modal>
            )}
            <article className="projects-card-container">{projectCards}</article>
        </main>
    )
}
