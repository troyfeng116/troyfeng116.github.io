import React from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'

import MenuBar from '../Components/MenuBar'
import Home from '../Components/Home'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Other from '../Components/Other'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

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
