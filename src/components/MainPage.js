import React from 'react';

import SectionSegment from './SectionSegment';
import { IMG1_URL, IMG2_URL } from '../data'

import '../css/MainPage.css'

const MainPage = () => {
    return (
        <div className=" background">
            <SectionSegment image={IMG1_URL} />
            <SectionSegment image={IMG2_URL} textPosition="right" />
        </div>
    )
};

export default MainPage;