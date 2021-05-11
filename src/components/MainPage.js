import React from 'react';

import SectionSegment from './SectionSegment';
import { IMG1_URL, IMG2_URL, HEADER1, HEADER2, TEXT1, TEXT2 } from '../data'

const MainPage = () => {
    return (
        <div className="mt-5 pt-3">
            <SectionSegment image={IMG1_URL} link="/ecomerce-site/computers" header={HEADER1} text={TEXT1} />
            <SectionSegment image={IMG2_URL} textPosition="right" link="/ecomerce-site/laptops" header={HEADER2} text={TEXT2} />
        </div>
    )
};

export default MainPage;