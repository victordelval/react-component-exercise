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
            data={mockedData.countries} />);

        expect(wrapper.find('DropdownBox').length).toBe(1);
        expect(wrapper.find('DropdownList').length).toBe(1);
    });

    it('should handle state changes', () => {
        const mockCallBack = jest.fn();
        const mockedData = {
            countries: [
                { code: "ES", name: "Spain" },
                { code: "PT", name: "Portugal" }
            ]
        };

        const component = shallow(<MultiSearchDropdown
            data={mockedData.countries} />);

        const subComponent = shallow(
            <DropdownBox
                onClick={ mockCallBack }
                search={ '' }
                selected={ [] } />
        );

        // expect(component.state().expanded).toEqual(false);
        subComponent.find('div').first().simulate('click');
        // expect(component.state().expanded).toEqual(true);
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

});
