import React from 'react';

import LabelButton from '../LabelButton';


class LabelList extends React.Component {
    render() {
        const collection = [];

        this.props.selected.forEach((item) => {
            collection.push(
                <LabelButton
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

export default LabelList;