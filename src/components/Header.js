import React from 'react';
import { Link } from 'react-router-dom'

import '../css/Header.css';

const Header = ({ links }) => {

    const renderLinks = links.map(link => <Link className="nav-link ps-5 w-100 fw-bold fs-5" key={link.title} to={link.link}>{link.title}</Link>)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5 fw-bolder fs-2" to="/ecomerce-site/">ShopLogo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {renderLinks}
                </div>
                </div>
            </div>
        </nav>
    )
};

export default Header;