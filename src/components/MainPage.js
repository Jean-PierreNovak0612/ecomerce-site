import React from 'react';

import SectionSegment from './SectionSegment';
import { IMG1_URL, IMG2_URL } from '../data'

import '../css/MainPage.css'

const MainPage = () => {
    return (
        <div className="mt-5 pt-5 background">
            <SectionSegment image={IMG1_URL} textPosition="right" />
            {/* <SectionSegment image={IMG2_URL} /> */}
        </div>
    )
};

export default MainPage;