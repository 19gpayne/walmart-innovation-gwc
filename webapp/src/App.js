import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Design from './pages/design';
import Connect from './pages/connect';;

const App = () => (
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>  
        <Route path="/home">
            <Home/>
        </Route>  
        <Route path="/design">
            <Design/>
        </Route>
        <Route path="/connect">
            <Connect/>
        </Route>  
    </Switch>
);

export default App;
