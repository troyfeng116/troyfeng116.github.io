import React from 'react'
import { NavBar } from '../Components/NavBar/NavBar'
import { Home } from '../Components/Home/Home'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => <NavBar /> } />
                <Route exact path="/bruh" render={() => <Home />} />
                <Route path="*" exact={true} render={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    )
}