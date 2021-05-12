import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';
import ComputerPage from './ComputerPage';
import { NAV_LINKS, FOOTER_LINKS, SOCIAL_LINKS } from '../data'

import '../css/style.css';

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Header links={NAV_LINKS} />
            <Switch>
                <Route path="/ecomerce-site/" exact component={MainPage} />
                <Route path="/ecomerce-site/computers" component={ComputerPage} />
                {/* <Route path="/ecomerce-site/laptops" component={LaptopPage} /> */}
            </Switch>
            <Footer links={FOOTER_LINKS} social={SOCIAL_LINKS} />
        </Router>
    )
};

export default App;