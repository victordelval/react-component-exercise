import React from 'react';

import ListItem from '../ListItem';


class DropdownList extends React.Component {
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
            <span>
                {collection}
            </span>
        );
    }
}

export default DropdownList;