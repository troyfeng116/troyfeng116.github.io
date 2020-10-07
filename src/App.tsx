import './App.css'
import React from 'react'
import logo from './logo.svg'
import { MenuBar } from './Components/MenuBar/MenuBar'
import { AppRouter } from './Router/index'

function App() {
  	return (
    	<div className="App">
      		<AppRouter />
    	</div>
  	)
}

export default App
