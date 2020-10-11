import React from 'react'
import { MenuBar } from '../Components/MenuBar/MenuBar'
import { Home } from '../Components/Home/Home'
import { About } from '../Components/About/About'
import { Projects } from '../Components/Projects/Projects'
import { Other } from '../Components/Other/Other'
import { Contact } from '../Components/Contact/Contact'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'

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
        </BrowserRouter>
    )
}
