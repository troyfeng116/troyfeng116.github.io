import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Home from '../Components/Home'
import MenuBar from '../Components/MenuBar'
import Other from '../Components/Other'
import Projects from '../Components/Projects'

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <MenuBar />
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/other" component={Other} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
                <Route path="*" render={() => <Redirect to="/" />} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
