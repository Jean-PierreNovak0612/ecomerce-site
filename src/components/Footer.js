import React from 'react'
import { Link } from 'react-router-dom';

const Footer = ({ links = [], social = [] }) => {

    const renderLinks = (links) => {
        if(!links) return null;
        return links.map(link => <Link className="d-block d-lg-inline nav-link text-white fs-5" to={link.link}>{link.title}</Link>);
    }

    const renderSocialLinks = (social) => {
        if(!social) return null;
        return social.map(network => <Link to={network.link} className="nav-link d-inline text-white fs-5"><i className={`bi bi-${network.title}`}></i></Link>)
    }

    return (
        <footer className="container-fluid navbar-dark bg-dark navbar">
            <div className="row w-100 my-0 my-lg-3">
                <div className="col-12 text-center text-lg-start col-lg-6">
                    {renderLinks(links)}
                </div>
                <div className="col-12 col-lg-4 text-center text-lg-end my-2 my-lg-0 ">
                    {renderSocialLinks(social)}
                </div>
                <div className="col-12 text-center col-12 text-white fs-6 mt-0 mt-lg-2">All rights reserved &copy; 2021 - {new Date().getFullYear()}</div> 

            </div>
        </footer>
    )
};

export default Footer;