import React from 'react';
import { shallow } from 'enzyme';

import ListItem from './ListItem';


describe('<ListItem />', () => {

    it('Should render without crashing', () => {
        const wrapper = shallow(<ListItem item={ {} } />);
    });

});