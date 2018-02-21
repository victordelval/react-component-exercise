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

        // events bindings
        this.handleClickBox = this.handleClickBox.bind(this);

        // state (properties that change over time)
        this.state = {
            loading: false,
            expanded: false,
            search: '',
            selected: []
        };
    }

    // onClickBox(e) {
    //     // exit if click over label button (selected items)
    //     if (e.target.nodeName === 'LABEL') return;

    //     // expand dropdown
    //     if (!this.state.expanded) {
    //         if (e.target.nodeName === 'INPUT') e.target.focus();
    //         else e.target.getElementsByTagName('input')[0].focus();
    //         this.setState({ expanded: true });
    //     }
    // }

    handleClickBox(target) {
        // exit if click over label button (selected items)
        if (target.nodeName === 'LABEL') return;

        // expand dropdown
        if (!this.state.expanded) {
            if (target.nodeName === 'INPUT') target.focus();
            else target.getElementsByTagName('input')[0].focus();
            this.setState({ expanded: true });
        }
    }

    render() {
        const selectClassName = 'multi-search-dropdown';
        return (
            <div>
                <DropdownBox
                    search={ this.state.search }
                    selected={ this.state.selected }
                    dropdownCss={ selectClassName }
                    onClickBox={ this.handleClickBox } />

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