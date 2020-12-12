import './Projects.css'
import { FaGithub } from 'react-icons/fa'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Gallery from '../Gallery/Gallery'
import ProjectsAnimation from './ProjectsAnimation/ProjectsAnimation'

export const Projects = () => {
	const [showImageModal, setShowImageModal] = useState<string | undefined>()

	const urls = [
		"https://troyfeng116.github.io/chess-backtracking/index.html",
		"https://troyfeng116.github.io/sorting-visualizer",
		"https://troyfeng116.github.io/matrix-operations/index.html",
		"https://github.com/troyfeng116/troy-feng-project-euler",
		"https://github.com/troyfeng116/daily-problem",
		"/projects",
	]

	const titles = [
		"Chess Backtracking Visualizers",
		"Sorting Visualizer",
		"Matrix Operations Calculator",
		"Project Euler+",
		"Daily Coding Problem",
		"Personal Website",
	]

	const imgs = [
		[
			'Media/Images/Projects/chess-backtracking/n-queens-demo.png',
			'Media/Images/Projects/chess-backtracking/knights-tour-demo.png',
		],
		[
			'Media/Images/Projects/sorting-visualizer/sorting-visualizer-demo.png',
			'Media/Images/Projects/sorting-visualizer/bsort.png',
			'Media/Images/Projects/sorting-visualizer/isort.png',
			'Media/Images/Projects/sorting-visualizer/hsort.png',
			'Media/Images/Projects/sorting-visualizer/qsort.png',
			'Media/Images/Projects/sorting-visualizer/msort.png',
		],
		[
			'Media/Images/Projects/matrix-operations/multiplication.png',
			'Media/Images/Projects/matrix-operations/determinant.png',
			'Media/Images/Projects/matrix-operations/rref.png',
			'Media/Images/Projects/matrix-operations/inverse.png',
		],
		[
			'Media/Images/Projects/project-euler/project-euler-1.png',
			'Media/Images/Projects/project-euler/project-euler-2.png',
		],
		[
			'Media/Images/Projects/daily-problem/daily-problem-1.png',
			'Media/Images/Projects/daily-problem/daily-problem-2.png',
		],
		[
			'Media/Images/Projects/personal-website-img.png',
		],
	]

	const subtext = [
		"A VanillaJS interactive visualizer for the classic N Queens and Knight's Tour puzzles.",
		"A React+D3 Typescript web app visualizer for common sorting algorithms.",
		"A VanillaJS-powered calculator that performs matrix computations based on user input.",
		"My Java solutions to the HackerRank ProjectEuler+ competition problems.",
		"My C++11 solutions to some daily coding and algorithm problems",
		"In order to understand recursion, one must first understand recursion.",
	]

	const GHLinks = [
		"https://github.com/troyfeng116/chess-backtracking",
		"https://github.com/troyfeng116/sorting-visualizer",
		"https://github.com/troyfeng116/matrix-operations",
		"https://github.com/troyfeng116/troy-feng-project-euler",
		"https://github.com/troyfeng116/daily-problem",
		"https://github.com/troyfeng116/troyfeng116.github.io",
	]

	const projectItems = urls.map((url, index) => {
		return (
			<section className="card" key={`project-${index}`}>
				<section className="card-content">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<h2>{titles[index]}</h2>
					</a>
					<div className="card-image-container">
						{imgs[index].length > 1 ?
							(
								<Gallery
									items={
										imgs[index].map((item) => (
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
									src={imgs[index][0]}
									className='card-image'
									onClick={() => setShowImageModal(imgs[index][0])}
									alt={'Troy Feng - project sample unavailable'}
								/>
							)
						}
					</div>
					<a href={url} target='_blank' rel="noopener noreferrer">
						{subtext[index]}
					</a>
					<p>
						<a href={GHLinks[index]} target="_blank" rel="noopener noreferrer">
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