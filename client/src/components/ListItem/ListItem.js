import React from 'react';
import PropTypes from 'prop-types';


class ListItem extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
    }

    render() {
        const item = this.props.item;
        return (
            <li className="item">
                {item.name}
            </li>
        );
    }
}

export default ListItem;