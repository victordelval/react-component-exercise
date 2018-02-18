import React from 'react';
import { shallow } from 'enzyme';

import MultiSearchDropdown from './MultiSearchDropdown';
import DropdownBox from '../../components/DropdownBox';
import DropdownList from '../../components/DropdownList';


describe('<MultiSearchDropdown />', () => {

    it('Should render without crashing', () => {

        const mockedData = {
            countries: [
                { code: "ES", name: "Spain" },
                { code: "PT", name: "Portugal" }
            ]
        };


        const wrapper = shallow(<MultiSearchDropdown
            data={ mockedData.countries } />);

        expect(wrapper.find('DropdownBox').length).toBe(1);
        expect(wrapper.find('DropdownList').length).toBe(1);
    });

});
