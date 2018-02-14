import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

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

class LabelList extends React.Component {
    render() {
        const collection = [];

        this.props.items.forEach((item) => {
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

class SearchBox extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
            </form>
        );
    }
}

class DropdownBox extends React.Component {
    render() {
        return (
            <div>
                <SearchBox />
                <LabelList items={this.props.items} />
            </div>
        );
    }
}

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

class MultiSearchDropdown extends React.Component {
    render() {
        return (
            <div>
                <DropdownBox items={this.props.data} />
                <DropdownList items={this.props.data} />
            </div>
        );
    }
}


const COUNTRIES = [
    { name: 'Spain', code: 'SP' },
    { name: 'Portugal', code: 'PT' },
    { name: 'France', code: 'FR' },
    { name: 'Italy', code: 'IT' },
    { name: 'Germany', code: 'DE' },
    { name: 'Netherlands', code: 'NL' }
];

ReactDOM.render(
    <MultiSearchDropdown data={COUNTRIES} />,
    document.getElementById('root')
);
