import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import { NAV_LINKS } from '../data'

import '../css/style.css';

const App = () => {
    return (
        <Router>
            <Header links={NAV_LINKS} />
            <Switch>
                {/* <Route path="/ecomerce-site/" component={MainPage} /> */}
                {/* <Route path="/ecomerce-site/computers" component={ComputerPage} /> */}
                {/* <Route path="/ecomerce-site/laptops" component={LaptopPage} /> */}
            </Switch>
        </Router>
    )
};

export default App;