import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'

import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <h1>Portfolio</h1>
                    </Route>
                    <Route exact path='/about'>
                        <About /> 
                    </Route>
                    <Route exact path='/contact'>
                        <h1>Contact Me</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
