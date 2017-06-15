import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { ChildRoute1, ChildRoute2 } from '../components/ChildRoutes'

class Home extends Component {
    render() {
        return(
                <div>
                    <ul>
                        <li><NavLink to="/home/childroute1">ChildRoute1</NavLink></li>
                        <li><NavLink to="/home/childroute2">ChildRoute2</NavLink></li>
                    </ul>
                    This is the home component!
                    <Route path="/home/childroute1" component={ChildRoute1} />
                    <Route path="/home/childroute2" component={ChildRoute2} />
                </div>
        );
    }
}

export default Home;