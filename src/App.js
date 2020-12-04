import React from "react";
import GRouter from "./route";
import { Router, Route } from 'react-router-dom'

import Home from "./pages/home/index";
import About from "./pages/about/index";
export default function (){
    return (
        <Router history="">
            <Route path="/" component={GRouter}>
                <div>
                    <Route path="home" component={Home}/>
                    <Route path="about" component={About} />

                </div>
            </Route>
        </Router>
    );
}