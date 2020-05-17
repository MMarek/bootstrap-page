import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';


import Navbars from './components/Navbars';
import Alerts from './components/Alerts';

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Navbars}/>
                <Route exact path='/' component={Alerts}/>
            </Switch>
        </HashRouter>
    )

}

export default App;