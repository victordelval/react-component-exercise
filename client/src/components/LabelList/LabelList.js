import React from 'react';
import PropTypes from 'prop-types';

import LabelButton from '../LabelButton';


class LabelList extends React.Component {

    static propTypes = {
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

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