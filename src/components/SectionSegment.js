import React from 'react';

import '../css/SectionSegment.css';

const SectionSegment = ({textPosition = 'left', image, text="text", header="header"}) => {

    const classes = textPosition === 'left' ? 'img-right' : 'img-left';
    const textClasses = textPosition === 'left' ? 'start-0 color' : 'end-0'

    const renderText = (txt, head) => {
        return (
            <div className={`${textClasses} width position-absolute mt-0 mt-md-5 pt-0 pt-md-5 h-100`}>
                <h2 className="mx-auto mt-5 w-75">{head}</h2>
                <p className="mx-auto w-75">{txt}</p>
            </div>
        )
    }

    console.log(image)

    return (
        <div className={`${classes} height position-relative`} style={{ backgroundImage: `url(${image})` }}>
            {renderText(text, header)}
        </div>
    )
};

export default SectionSegment;