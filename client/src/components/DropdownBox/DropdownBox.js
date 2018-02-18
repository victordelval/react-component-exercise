import React from 'react';

import SearchBox from '../SearchBox';
import LabelList from '../LabelList';


class DropdownBox extends React.Component {
    render() {
        return (
            <div>
                <SearchBox />
                <LabelList selected={this.props.selected || []} />
            </div>
        );
    }
}

export default DropdownBox;