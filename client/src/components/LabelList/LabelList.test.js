import React from 'react';
import { shallow } from 'enzyme';

import LabelList from './LabelList';


describe('<LabelList />', () => {

    it('Should render without crashing', () => {
        const wrapper = shallow(<LabelList selected={ [] } />);
    });

});