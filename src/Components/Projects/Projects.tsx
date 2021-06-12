import './Projects.module.css'

import React, { useState } from 'react'
import BorderGradient from 'Components/BorderGradient'
import Modal from 'Components/Modal'
import { StandardBorderRadii, StandardFlex, StandardFlexChild, StandardLayout, StandardOverflow, StandardPadding, StandardPosition } from 'Components/Styles'

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
                isActive={index === activeIndex}
                handleCardClicked={() => setActiveIndex(index)}
                handleCardMouseEnter={() => setActiveIndex(index)}
                handleCardMouseLeave={() => setActiveIndex(-1)}
                handleImgClicked={(imgSrc) => setShowImageModal(imgSrc)}
            />
        )
    })

    return (
        <main className={`projects-container ${StandardPadding.Y60} ${StandardFlexChild.Flex1} ${StandardLayout.FlexRow}`}>
            {showImageModal && (
                <Modal onClick={() => setShowImageModal(undefined)}>
                    <div className={`${StandardPosition.Relative}`} style={{ maxWidth: '85vw' }}>
                        <BorderGradient borderRadius={12} borderSize={6} fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
                            <img
                                src={showImageModal}
                                alt="Failed to load. Click anywhere to exit"
                                className={`${StandardBorderRadii.R12}`}
                                style={{ objectFit: 'cover', maxHeight: '80vh', width: '100%', maxWidth: '100%' }}
                            />
                        </BorderGradient>
                    </div>
                </Modal>
            )}
            <article className={`projects-card-container ${StandardFlex.Row} ${StandardPadding.All42} ${StandardOverflow.XScroll}`}>{projectCards}</article>
        </main>
    )
}
