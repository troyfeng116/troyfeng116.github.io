import './Projects.css'
import { FaGithub } from 'react-icons/fa'
import React from 'react'

export const Projects = () => {
    return (
        <section className="card-container">
		<article className="card">
			<header className="card-header">
				<a href="https://troyfeng116.github.io/chess-backtracking/index.html">
					<h2>Chess Backtracking Visualizers</h2>
					<div className="card-image-container">
						<img src="../media/n-queens-demo.png" className="card-image"/>
						<img src="../media/knights-tour-demo.png" className="card-image"/>
					</div>
				</a>
				<p>
					A Vanilla JavaScript interactive visualizer for the classic N Queens and Knight's Tour
					puzzles.
				</p>
				<p>
					<a href="https://github.com/troyfeng116/chess-backtracking">
						<FaGithub /> GitHub
					</a>
				</p>
			</header>
		</article>

		<article className="card">
			<header className="card-header">
				<a href="https://troyfeng116.github.io/sorting-visualizer">
					<h2>Sorting Visualizer</h2>
					<div className="card-image-container">
						<img src="../media/sorting-visualizer-demo-img.png" className="card-image"/>
					</div>
				</a>
				<p>
					A React+D3 Typescript web app visualizer for common sorting algorithms.
				</p>
				<p>
					<a href="https://github.com/troyfeng116/sorting-visualizer">
                    <FaGithub /> GitHub
					</a>
				</p>
			</header>
		</article>

		<article className="card">
			<header className="card-header">
				<a href="https://troyfeng116.github.io/matrix-operations/index.html">
					<h2>Matrix Operations Calculator</h2>
				</a>
                <p>
					<a href="https://github.com/troyfeng116/mastrix-operations">
                    <FaGithub /> GitHub
					</a>
				</p>
			</header>
		</article>

		<article className="card">
			<header className="card-header">
				<a href="">
					<h2>Project Euler</h2>
				</a>
			</header>
		</article>

		<article className="card">
			<header className="card-header">
				<a href="">
					<h2>Daily Coding Problem</h2>
				</a>
			</header>
		</article>
	</section>
    )
}