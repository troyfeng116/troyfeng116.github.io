import './Projects.module.css'

import React, { useState } from 'react'
import BorderGradient from 'Components/BorderGradient'
import { StandardBorderRadii } from 'Components/Styles'

import Modal from '../Modal'

import ProjectsCard from './ProjectsCard'
import { projectGHLinks, projectImgs, projectSubtext, projectTitles, projectUrls } from './ProjectsConstants'

export const Projects: React.FC = () => {
    const [showImageModal, setShowImageModal] = useState<string | undefined>()

    const projectCards = projectUrls.map((url, index) => (
        <ProjectsCard
            key={`projects-card-${index}`}
            url={url}
            title={projectTitles[index]}
            projectImgs={projectImgs[index]}
            subtext={projectSubtext[index]}
            GHLink={projectGHLinks[index]}
            setShowImageModal={setShowImageModal}
        />
    ))

    return (
        <div className="projects-container">
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
        </div>
    )
}
