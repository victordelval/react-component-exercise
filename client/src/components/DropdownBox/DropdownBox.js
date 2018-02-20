import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from '../SearchBox';
import LabelList from '../LabelList';


class DropdownBox extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        search: PropTypes.string,
        dropdownCss: PropTypes.string
    }

    render() {
        return (
            <div onClick={ this.props.onClick }
                 className={ this.props.dropdownCss }>
                <SearchBox />
                <LabelList selected={this.props.selected || []} />
            </div>
        );
    }
}

export default DropdownBox;