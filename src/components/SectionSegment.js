import React from 'react';
import { Link } from 'react-router-dom';

import '../css/SectionSegment.css';

const SectionSegment = ({textPosition = 'left', image, text="text", header="header", link=""}) => {

    const classes = textPosition === 'left' ? 'img-right' : 'img-left';
    const textClasses = textPosition === 'left' ? 'start-0' : 'end-0';
    const backgroundClass = textPosition === 'left' ? 'gray-left' : 'gray-right';

    const renderText = (txt, head, link) => {
        return (
            <div className={`${textClasses} width position-absolute mt-0 mt-lg-5 pt-0 pt-md-5 `}>
                <h2 className="ms-2 ms-md-5 ps-5 mb-4 mb-lg-5 mt-5 w-75 fs-1">{head}</h2>
                <p className="ms-2 ms-md-5 ps-5 w-75 fs-4 mb-4 mb-lg-4 max-width">
                    {txt}
                    {renderButton(link)}
                </p>
                
            </div>
        )
    }

    const renderButton = (link) => {
        if(!link) return null;
        return (
            <>
                <Link to={link} className="btn btn-primary d-block btn-width fw-bold fs-6 my-3">Let's go</Link>
            </>
        )
    }

    return (
        <div className={`${backgroundClass}`} >
            <div className={`${classes} height position-relative`} style={{ backgroundImage: `url(${image})` }}>
                {renderText(text, header, link)}
                
            </div>
        </div>
    )
};

export default SectionSegment;