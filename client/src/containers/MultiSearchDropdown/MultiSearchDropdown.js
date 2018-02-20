import React from 'react';
import PropTypes from 'prop-types';

import './MultiSearchDropdown.css'
import DropdownBox from '../../components/DropdownBox';
import DropdownList from '../../components/DropdownList';


class MultiSearchDropdown extends React.Component {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

    constructor(props) {
        super(props);

        // state (properties that change over time)
        this.state = {
            loading: false,
            expanded: false,
            search: '',
            selected: []
        };
    }

    render() {
        const selectClassName = 'multi-search-dropdown';
        return (
            <div>
                <DropdownBox
                    search={ this.state.search }
                    selected={ this.state.selected }
                    dropdownCss={ selectClassName } />

                <DropdownList
                    items={ this.props.data }
                    loading={ this.state.loading }
                    expanded={ this.state.expanded }
                    search={ this.state.search }
                    selected={ this.state.selected }
                    dropdownCss={ selectClassName } />
            </div>
        );
    }
}

export default MultiSearchDropdown;