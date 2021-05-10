import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage'
import { NAV_LINKS, FOOTER_LINKS, SOCIAL_LINKS } from '../data'

import '../css/style.css';

const App = () => {
    return (
        <Router>
            <Header links={NAV_LINKS} />
            <Switch>
                <Route path="/ecomerce-site/" component={MainPage} />
                {/* <Route path="/ecomerce-site/computers" component={ComputerPage} /> */}
                {/* <Route path="/ecomerce-site/laptops" component={LaptopPage} /> */}
            </Switch>
            <Footer links={FOOTER_LINKS} social={SOCIAL_LINKS} />
        </Router>
    )
};

export default App;