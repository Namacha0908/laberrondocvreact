import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "../Pages/Home";
import About from "../Pages/Projet";
import Cv from "../Pages/Cv";

const Rooter = () => (
    <Suspense>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/projet" component={About}/>
                <Route path="/cv" component={Cv}/>
            </Switch>
        </Router>
    </Suspense>
);

export default Rooter;