import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router-dom";

import Home from "./pages/home/index";
import About from "./pages/about/index";
// import AppBar from "./components/AppBar";
// import SideNav from "./components/SideNav";

console.log(Home);
console.log(About);
function GRouter () {

    return (
        <div>
            <h1>App</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            {this.props.children}
        </div>

    );
}
export default GRouter;