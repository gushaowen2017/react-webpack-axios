import React from "react";
import {BrowserRouter as Router,Link} from "react-router-dom";

function SideNav() {
    return (
        <Router>
            <div id="SideNav" className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav side-nav">
                    <li className="active">
                        <Link to="/home"> <i className="fa fa-fw fa-dashboard"/>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about"> <i className="fa fa-fw fa-dashboard"/>
                            About
                        </Link>
                        {/*<a href="charts.html">*/}
                            {/*<i className="fa fa-fw fa-bar-chart-o"/> Charts*/}
                        {/*</a>*/}
                    </li>
                </ul>
            </div>
        </Router>
    );
}

export default SideNav;