import './Projects.css'
import { FaGithub } from 'react-icons/fa'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Gallery from '../Gallery/Gallery'

export const Projects = () => {
	const [showImageModal, setShowImageModal] = useState<string | undefined>()

	const urls = [
		"https://troyfeng116.github.io/chess-backtracking/index.html",
		"https://troyfeng116.github.io/sorting-visualizer",
		"https://troyfeng116.github.io/matrix-operations/index.html",
		"https://github.com/troyfeng116/troy-feng-project-euler",
		"https://github.com/troyfeng116/daily-problem",
		"https://troyfeng116.github.io",
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
		['Media/Images/n-queens-demo.png', '/Media/Images/knights-tour-demo.png'],
		['Media/Images/sorting-visualizer-demo-img.png'],
		['Media/Images/sorting-visualizer-demo-img.png'],
		['Media/Images/sorting-visualizer-demo-img.png'],
		['Media/Images/sorting-visualizer-demo-img.png'],
		['Media/Images/sorting-visualizer-demo-img.png'],
	]
	const subtext = [
		"A Vanilla JavaScript interactive visualizer for the classic N Queens and Knight's Tour puzzles.",
		"A React+D3 Typescript web app visualizer for common sorting algorithms.",
		"A Vanilla JS-powered HTML calculator that performs matrix computations based on user input.",
		"My Java solutions to the HackerRank ProjectEuler+ competition problems.",
		"My C++ solutions to daily coding problems",
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
				<section className="card-header">
					<a href={url} target="_blank">
						<h2>{titles[index]}</h2>
					</a>
					<div className="card-image-container">
						{imgs[index].length > 1 ? (
							<Gallery 
								items={
									imgs[index].map((item) => {
										return <img src={item} className='card-image' onClick={() => setShowImageModal(item)} />
									})
								}
								maxHeight={300}
								showCircles={false}
								arrowsInside={true}
							/>) : (
								<img src={imgs[index][0]} className='card-image' onClick={() => setShowImageModal(imgs[index][0])} />
							)
						}
					</div>
					<a href={url} target='_blank'>
						{subtext[index]}
					</a>
					<p>
						<a href={GHLinks[index]} target="_blank">
							<FaGithub /> GitHub
						</a>
					</p>
				</section>
			</section>
		)
	})
    return (
		<div className='card-super-container'>
			<article className="card-container">
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
				{projectItems}
			</article>
		</div>
    )
}