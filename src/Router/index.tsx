import React from 'react'
import { MenuBar } from '../Components/MenuBar/MenuBar'
import { Home } from '../Components/Home/Home'
import { About } from '../Components/About/About'
import { Projects } from '../Components/Projects/Projects'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory()

export const AppRouter: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/" component={Home} />
                <Route exact path="*" render={() => <Redirect to="/" />} />
            </Switch>
        </Router>
    )
}
