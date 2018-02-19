import React from 'react';

import './SearchBox.css'


class SearchBox extends React.Component {
    render() {
        return (
            <form>
                <input type="text" className="search-box" placeholder="Search..." />
            </form>
        );
    }
}

export default SearchBox;