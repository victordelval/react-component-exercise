import React from 'react';


class ListItem extends React.Component {
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