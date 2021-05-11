import React from 'react';

import '../css/SectionSegment.css';

const SectionSegment = ({textPosition = 'left', image, text="text", header="header"}) => {

    const classes = textPosition === 'left' ? 'img-right' : 'img-left';
    const textClasses = textPosition === 'left' ? 'start-0' : 'end-0';
    const backgroundClass = textPosition === 'left' ? 'gray-left' : 'gray-right';

    const renderText = (txt, head) => {
        return (
            <div className={`${textClasses} width position-absolute mt-0 mt-md-5 pt-0 pt-md-5 h-100 `}>
                <h2 className="mx-auto mt-5 w-75 fs-1">{head}</h2>
                <p className="mx-auto w-75 fs-4">{txt}</p>
            </div>
        )
    }

    return (
        <div className={`${backgroundClass}`} >
            <div className={`${classes} height position-relative`} style={{ backgroundImage: `url(${image})` }}>
                {renderText(text, header)}
            </div>
        </div>
    )
};

export default SectionSegment;