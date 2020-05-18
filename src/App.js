import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';


import Navbars from './components/Navbars';
import Alerts from './components/Alerts';
import Badges from "./components/Badges";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Navbars}/>
                <Route exact path='/alerts' component={Alerts}/>
                <Route exact path='/badges' component={Badges}/>
                <Route exact path='/buttons' component={Buttons}/>
                <Route exact path='/cards' component={Cards}/>
            </Switch>
        </HashRouter>
    )

}

export default App;