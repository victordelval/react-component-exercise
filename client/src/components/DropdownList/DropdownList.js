import React from 'react';
import PropTypes from 'prop-types';

import './DropdownList.css'
import ListItem from '../ListItem';


class DropdownList extends React.Component {

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        expanded: PropTypes.bool.isRequired,
        search: PropTypes.string,
        dropdownCss: PropTypes.string
    }

    render() {
        if (!this.props.expanded) return null;

        const collection = [];
        this.props.items.forEach((item) => {
            collection.push(
                <ListItem
                    item={item}
                    key={item.code} />
            );
        });

        return (
            <ul className={`dropdown-list ${this.props.dropdownCss}`}>
                {collection}
            </ul>
        );
    }
}

export default DropdownList;