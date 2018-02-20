import React from 'react';
import { shallow } from 'enzyme';

import DropdownList from './DropdownList';
// import ListItem from '../ListItem';


describe('<DropdownList />', () => {

    it('Should render without crashing', () => {
        const wrapper = shallow(
            <DropdownList
                items={ [] }
                loading={ false }
                expanded={ false }
                search={ '' }
                selected={ [] } />
        );
    });

});