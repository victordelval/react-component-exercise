import React from 'react';

import DropdownBox from '../../components/DropdownBox';
import DropdownList from '../../components/DropdownList';


class MultiSearchDropdown extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                <DropdownBox />
                <DropdownList items={data} />
            </div>
        );
    }
}

export default MultiSearchDropdown;