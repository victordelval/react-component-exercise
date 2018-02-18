import React from 'react';
import { shallow } from 'enzyme';

import DropdownBox from './DropdownBox';


describe('<DropdownBox />', () => {

    it('Should render without crashing', () => {
        const wrapper = shallow(<DropdownBox
            selected={ [] } />);
    });

});