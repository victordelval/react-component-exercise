import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

import MultiSearchDropdown from './containers/MultiSearchDropdown';


const COUNTRIES = [
  { name: 'Spain', code: 'SP' },
  { name: 'Portugal', code: 'PT' },
  { name: 'France', code: 'FR' },
  { name: 'Italy', code: 'IT' },
  { name: 'Germany', code: 'DE' },
  { name: 'Netherlands', code: 'NL' }
];


class App extends Component {
  render() {
    return (
      <div>
        <MultiSearchDropdown data={COUNTRIES} />
      </div>
    );
  }

}

export default App;