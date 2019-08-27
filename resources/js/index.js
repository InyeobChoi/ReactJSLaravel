import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './components/home';
import ListOfThings from './components/list';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <nav className="container">
                <ul className="nav mt-2 mb-2">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/components/list">List</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/components/list" component={ ListOfThings } />
                <Route component={ Home } />
            </Switch>
        </div>
    </BrowserRouter>
), document.getElementById('root'));