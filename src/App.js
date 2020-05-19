import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Navbars from './components/Navbars';
import Alerts from './components/Alerts';
import Badges from "./components/Badges";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import Carousels from "./components/Carousels";
import Forms from './components/Forms';

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/navbars' component={Navbars}/>
                <Route exact path='/alerts' component={Alerts}/>
                <Route exact path='/badges' component={Badges}/>
                <Route exact path='/buttons' component={Buttons}/>
                <Route exact path='/cards' component={Cards}/>
                <Route exact path='/carousels' component={Carousels}/>
                <Route exact path='/forms' component={Forms}/>
            </Switch>
        </HashRouter>
    )

}

export default App;