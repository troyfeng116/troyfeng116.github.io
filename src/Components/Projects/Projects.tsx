import './Projects.css'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import { projectUrls, projectTitles, projectImgs, projectSubtext, projectGHLinks } from './ProjectsConstants'

export const Projects = () => {
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
						<img
							src={showImageModal}
							className="projects-modal-img"
							alt="Failed to load. Click anywhere to exit"
						/>
					</div>
				</Modal>
			)}
			<article className="projects-card-container">
				{projectCards}
			</article>
		</div>
	)
}