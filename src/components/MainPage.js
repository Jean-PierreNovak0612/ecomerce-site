import React from 'react';

import SectionSegment from './SectionSegment';
import { IMG1_URL, IMG2_URL } from '../data'

const MainPage = () => {
    return (
        <div className="mt-5 pt-3">
            <SectionSegment image={IMG1_URL} />
            <SectionSegment image={IMG2_URL} textPosition="right" />
        </div>
    )
};

export default MainPage;