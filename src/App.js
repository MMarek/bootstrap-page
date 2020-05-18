import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';


import Navbars from './components/Navbars';
import Alerts from './components/Alerts';
import Badges from "./components/Badges";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Navbars}/>
                <Route exact path='/alerts' component={Alerts}/>
                <Route exact path='/badges' component={Badges}/>
            </Switch>
        </HashRouter>
    )

}

export default App;