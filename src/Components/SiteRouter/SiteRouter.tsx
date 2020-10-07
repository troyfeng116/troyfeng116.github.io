import React from 'react'
import { MenuBar } from '../MenuBar/MenuBar'
import { Home } from '../Home/Home'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { Switch, Route, Redirect } from 'react-router-dom'


export const SiteRouter = () => {
    return (
        <div>
            <MenuBar />
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/" component={Home} />
                <Route exact path="*" render={() => <Redirect to="/" />} />
            </Switch>
        </div>
    )
}