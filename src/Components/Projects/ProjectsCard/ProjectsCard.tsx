import './ProjectsCard.css'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import Gallery from '../../Gallery'

interface ProjectsCardProps {
    url: string
    title: string
    projectImgs: string[]
    subtext: string
    GHLink: string
    setShowImageModal: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const ProjectsCard: React.FC<ProjectsCardProps> = (props) => {
    const { url, title, projectImgs, subtext, GHLink, setShowImageModal } = props
    return (
        <section className="projects-card">
            <section className="projects-card-content">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <h2>{title}</h2>
                </a>
                <div className="projects-card-image-container">
                    {projectImgs.length > 1 ?
                        (
                            <Gallery
                                items={
                                    projectImgs.map((imgURL) => (
                                        <img
                                            src={imgURL}
                                            width={400}
                                            height={180}
                                            className="projects-card-image"
                                            onClick={() => setShowImageModal(imgURL)}
                                            alt="Troy Feng - project sample unavailable"
                                        />
                                    ))
                                }
                                maxHeight={300}
                                showCircles={false}
                                arrowsInside={true}
                                timeoutSeconds={Math.random() * 5 + 8}
                            />
                        ) : (
                            <img
                                src={projectImgs[0]}
                                className="projects-card-image"
                                onClick={() => setShowImageModal(projectImgs[0])}
                                alt="Troy Feng - project sample unavailable"
                            />
                        )
                    }
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {subtext}
                </a>
                <p>
                    <a href={GHLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub
                </a>
                </p>
            </section>
        </section>
    )
}