import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from '../SearchBox';
import LabelList from '../LabelList';


class DropdownBox extends React.Component {

    static propTypes = {
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        dropdownCss: PropTypes.string
    }

    render() {
        return (
            <div className={ this.props.dropdownCss }>
                <SearchBox />
                <LabelList selected={this.props.selected || []} />
            </div>
        );
    }
}

export default DropdownBox;