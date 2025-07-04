import styles from './Projects.module.css'

import React, { useState } from 'react'
import BorderGradient, { BorderGradientColors } from 'Components/BorderGradient'
import Modal from 'Components/Modal'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import {
    StandardBorderRadii,
    StandardFlex,
    StandardFlexChild,
    StandardFonts,
    StandardMargin,
    StandardOverflow,
    StandardPadding,
    StandardPosition,
    StandardTextAlign,
    StandardWidth,
} from 'Styles/Standard'
import { useBorderGradientThemeMap } from 'Styles/Theme/useBorderGradientThemeMap'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

import ProjectsCard from './ProjectsCard'
import { PROJECTS } from './ProjectsConstants'

export const Projects: React.FC = () => {
    const [showImageModal, setShowImageModal] = useState<string | undefined>()
    const [activeIndex, setActiveIndex] = useState<number>(-1)
    const borderGradientThemeMap = useBorderGradientThemeMap()
    const textGradientThemeMap = useTextGradientThemeMap()

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
        <main className={`${styles.projects_container} ${StandardPadding.Y90} ${StandardFlexChild.Flex1}`}>
            {showImageModal && (
                <Modal onClick={() => setShowImageModal(undefined)}>
                    <div className={`${StandardPosition.Relative}`} style={{ maxWidth: '85vw' }}>
                        <BorderGradient
                            borderRadius={12}
                            borderSize={6}
                            fromColor={borderGradientThemeMap[BorderGradientColors.Pink]}
                            toColor={borderGradientThemeMap[BorderGradientColors.Orange]}
                            gradientAngle="120deg"
                        >
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
            <TextGradient
                className={`${styles.projects_title} ${StandardTextAlign.Center} ${StandardMargin.XAuto} ${StandardFonts.LargeTextBold} ${StandardPadding.X42} ${StandardWidth.FitContent}`}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                A collection of some personal technical projects.
            </TextGradient>
            <article className={`${styles.projects_card_container} ${StandardFlex.Row} ${StandardPadding.All42} ${StandardOverflow.XScroll}`}>{projectCards}</article>
        </main>
    )
}
