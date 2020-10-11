import './Projects.css'
import { FaGithub } from 'react-icons/fa'
import React from 'react'
import NQueensDemo from '../Media/Images/n-queens-demo.png'
import KnightsTourDemo from "../Media/Images/knights-tour-demo.png"
import SortingVisualizerDemo from "../Media/Images/sorting-visualizer-demo-img.png"

export const Projects = () => {
	const urls = [
		"https://troyfeng116.github.io/chess-backtracking/index.html",
		"https://troyfeng116.github.io/sorting-visualizer",
		"https://troyfeng116.github.io/matrix-operations/index.html",
		"",
		"",
	]
	const titles = [
		"Chess Backtracking Visualizers",
		"Sorting Visualizer",
		"Matrix Operations Calculator",
		"Project Euler+",
		"Daily Coding Problem",
	]
	const imgs = [
		NQueensDemo,
		SortingVisualizerDemo,
		SortingVisualizerDemo,
		SortingVisualizerDemo,
		SortingVisualizerDemo,
	]
	const subtext = [
		"A Vanilla JavaScript interactive visualizer for the classic N Queens and Knight's Tour puzzles.",
		"A React+D3 Typescript web app visualizer for common sorting algorithms.",
		"A Vanilla JS-powered HTML calculator that performs matrix computations based on user input.",
		"My Java solutions to the HackerRank ProjectEuler+ competition problems.",
		"My C++ solutions to daily coding problems",
	]
	const GHLinks = [
		"https://github.com/troyfeng116/chess-backtracking",
		"https://github.com/troyfeng116/sorting-visualizer",
		"https://github.com/troyfeng116/matrix-operations",
		"https://github.com/troyfeng116/troy-feng-project-euler",
		"https://github.com/troyfeng116/daily-problem",
	]
	
	const projectItems = urls.map((url, index) => {
		return (
			<article className="card">
				<header className="card-header">
					<a href={url}>
						<h2>{titles[index]}</h2>
						<div className="card-image-container">
							<img src={imgs[index]} className="card-image"/>
						</div>
					</a>
					<p>
						{subtext[index]}
					</p>
					<p>
						<a href={GHLinks[index]}>
							<FaGithub /> GitHub
						</a>
					</p>
				</header>
			</article>
		)
	})
    return (
        <section className="card-container">
			{projectItems}
		</section>
    )
}