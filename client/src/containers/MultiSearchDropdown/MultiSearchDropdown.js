import React from 'react';
import PropTypes from 'prop-types';

import './MultiSearchDropdown.css'
import DropdownBox from '../../components/DropdownBox';
import DropdownList from '../../components/DropdownList';


class MultiSearchDropdown extends React.Component {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

    render() {
        const data = this.props.data;
        const selectClassName = 'countries-dropdown multi-search-dropdown';

        return (
            <div>
                <DropdownBox
                    selected={ [] }
                    dropdownCss={ selectClassName } />
                <DropdownList
                    items={data}
                    dropdownCss={ selectClassName } />
            </div>
        );
    }
}

export default MultiSearchDropdown;