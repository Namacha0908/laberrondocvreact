import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "../Pages/Home";
import About from "../Pages/Projet";
import Cv from "../Pages/Cv";
import Quizz from "../Pages/Quizz";
import SingleQuizz from "../Pages/SingleQuizz";

const Rooter = () => (
    <Suspense>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/projet" component={About}/>
                <Route path="/cv" component={Cv}/>
                <Route path="/quizz/:id" component={SingleQuizz}/>
                <Route path="/quizz" component={Quizz}/>
            </Switch>
        </Router>
    </Suspense>
);

export default Rooter;