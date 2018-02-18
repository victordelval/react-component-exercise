import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../ListItem';


class DropdownList extends React.Component {

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

    render() {
        const collection = [];

        this.props.items.forEach((item) => {
            collection.push(
                <ListItem
                    item={item}
                    key={item.code} />
            );
        });

        return (
            <span className={ this.props.dropdownCss }>
                {collection}
            </span>
        );
    }
}

export default DropdownList;