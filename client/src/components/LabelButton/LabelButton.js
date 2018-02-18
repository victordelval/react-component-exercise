import React from 'react';
import PropTypes from 'prop-types';


class LabelButton extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
    }

    render() {
        const name = this.props.item.name;
        const code = this.props.item.code;
        return (
            <label className="button"
                data-code={code}>
                {name}
            </label>
        );
    }
}

export default LabelButton;