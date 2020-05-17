import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {} from "react-bootstrap";


import Navbars from './components/Navbars/Navbars'

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Navbars}/>
            </Switch>
        </HashRouter>
    )

}

export default App;