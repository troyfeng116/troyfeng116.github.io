import './Projects.css'
import { FaGithub } from 'react-icons/fa'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Gallery from '../Gallery/Gallery'
import { projectUrls, projectTitles, projectImgs, projectSubtext, projectGHLinks } from './ProjectsConstants'

export const Projects = () => {
	const [showImageModal, setShowImageModal] = useState<string | undefined>()

	const projectItems = projectUrls.map((url, index) => {
		return (
			<section className="card" key={`project-${index}`}>
				<section className="card-content">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<h2>{projectTitles[index]}</h2>
					</a>
					<div className="card-image-container">
						{projectImgs[index].length > 1 ?
							(
								<Gallery
									items={
										projectImgs[index].map((item) => (
											<img
												src={item}
												className='card-image'
												onClick={() => setShowImageModal(item)}
												alt={'Troy Feng - project sample unavailable'}
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
									src={projectImgs[index][0]}
									className='card-image'
									onClick={() => setShowImageModal(projectImgs[index][0])}
									alt={'Troy Feng - project sample unavailable'}
								/>
							)
						}
					</div>
					<a href={url} target='_blank' rel="noopener noreferrer">
						{projectSubtext[index]}
					</a>
					<p>
						<a href={projectGHLinks[index]} target="_blank" rel="noopener noreferrer">
							<FaGithub /> GitHub
						</a>
					</p>
				</section>
			</section>
		)
	})

	return (
		<div className='card-super-container'>
			{showImageModal && (
				<Modal onClick={() => setShowImageModal(undefined)}>
					<div className='project-modal-img-container'>
						<img
							src={showImageModal}
							className='project-modal-img'
							alt={`Failed to load. Click anywhere to exit`}
						/>
					</div>
				</Modal>
			)}
			<article className="card-container">
				{projectItems}
			</article>
		</div>
	)
}