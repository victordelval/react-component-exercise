import React from 'react';


class LabelButton extends React.Component {
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