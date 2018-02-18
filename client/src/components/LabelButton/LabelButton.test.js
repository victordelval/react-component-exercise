import React from 'react';
import { shallow } from 'enzyme';

import LabelButton from './LabelButton';


describe('<LabelButton />', () => {

    it('Should render without crashing', () => {
        const wrapper = shallow(<LabelButton item={ {} } />);
    });

});