import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navibar from './Components/Navibar'
import Movies from './Components/Movies'
import Users from './Components/Users'

function App() {
    return (
        <>
            <Router>
                <Navibar />
                <Switch>
                    <Route exact path="/" component={Movies} />
                    <Route exact path="/Users" component={Users} />
                </Switch>
            </Router>
        </>
    )
}

export default App
