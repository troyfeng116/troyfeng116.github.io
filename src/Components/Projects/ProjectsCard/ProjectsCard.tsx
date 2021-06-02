import './ProjectsCard.module.css'

import React from 'react'
import { FaGithub } from 'react-icons/fa'
import BorderGradient from 'Components/BorderGradient'
import TextGradient from 'Components/TextGradient'

import Gallery from '../../Gallery'
import {
    Clickable,
    StandardBackgrounds,
    StandardBorderRadii,
    StandardFlex,
    StandardFlexChild,
    StandardFonts,
    StandardJustify,
    StandardLayout,
    StandardMargin,
    StandardPadding,
    StandardPosition,
    StandardTextColors,
} from '../../Styles'

interface ProjectsCardProps {
    url: string
    title: string
    projectImgs: string[]
    subtext: string
    ghLink: string
    setShowImageModal: React.Dispatch<React.SetStateAction<string | undefined>>
    isActive: boolean
    handleCardClicked: () => void
    handleCardMouseEnter: () => void
    handleCardMouseLeave: () => void
}

export const ProjectsCard: React.FC<ProjectsCardProps> = (props) => {
    const { url, title, projectImgs, subtext, ghLink, setShowImageModal, isActive, handleCardClicked, handleCardMouseEnter, handleCardMouseLeave } = props
    return (
        <BorderGradient
            className={`projects-card ${isActive ? 'projects-card-active' : ''} ${StandardPosition.Relative} ${StandardBorderRadii.R12} ${Clickable}`}
            borderRadius={12}
            borderSize={6}
            fromColor="#d475d4"
            toColor="#fa9f55"
            gradientAngle="120deg"
            onClick={() => handleCardClicked()}
            onMouseEnter={() => handleCardMouseEnter()}
            onMouseLeave={() => handleCardMouseLeave()}
        >
            <section
                className={`
                    ${StandardFlexChild.Flex1} ${StandardFlex.Col} ${StandardJustify.Center}
                    ${StandardPadding.Y24} ${StandardPadding.X30} ${StandardBorderRadii.R12}
                    ${StandardBackgrounds.Black}
                `}
            >
                <TextGradient from="#d475d4" to="#fa9f55">
                    <section className={`${StandardFlex.Col}`}>
                        <a className={`${StandardFonts.LargeTextBold} ${StandardMargin.B18}`} href={url} target="_blank" rel="noopener noreferrer">
                            {title}
                        </a>
                        <div className={`projects-card-image-container ${StandardMargin.B18} ${StandardFlex.Col}`}>
                            {projectImgs.length > 1 ? (
                                <Gallery
                                    items={projectImgs.map((imgURL) => (
                                        <img
                                            key={imgURL}
                                            src={imgURL}
                                            width={400}
                                            height={180}
                                            className="projects-card-image"
                                            onClick={() => setShowImageModal(imgURL)}
                                            alt="Troy Feng - project sample unavailable"
                                        />
                                    ))}
                                    maxHeight={300}
                                    showCircles={false}
                                    arrowsInside={true}
                                    timeoutSeconds={Math.random() * 5 + 8}
                                />
                            ) : (
                                <img
                                    src={projectImgs[0]}
                                    width={400}
                                    height={180}
                                    className="projects-card-image"
                                    onClick={() => setShowImageModal(projectImgs[0])}
                                    alt="Troy Feng - project sample unavailable"
                                />
                            )}
                        </div>
                        <a className={`${StandardFonts.SmallTextBold} ${StandardMargin.B18}`} href={url} target="_blank" rel="noopener noreferrer">
                            {subtext}
                        </a>
                        <a className={`${StandardFonts.SmallTextBold} ${StandardLayout.FlexRow}`} href={ghLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub className={`${StandardMargin.R6} ${StandardTextColors.Pink}`} /> GitHub
                        </a>
                    </section>
                </TextGradient>
            </section>
        </BorderGradient>
    )
}
