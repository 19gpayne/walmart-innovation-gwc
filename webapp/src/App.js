import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/main';
import Home from './pages/home';
import Design from './pages/design';

const App = () => (
    <Switch>
        <Route exact path="/">
            <Main/>
        </Route>  
        <Route path="/home">
            <Home/>
        </Route>
        <Route path="/design">
            <Design/>
        </Route>
        <Route path="/connect">
            <Home/>
        </Route>  
    </Switch>
);

export default App;
