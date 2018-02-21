import React, { Component } from 'react';

import './App.css';

import MultiSearchDropdown from '../MultiSearchDropdown';


class App extends React.Component {

  constructor(props) {
      super(props);

      // state (properties that change over time)
      this.state = {
          response: [],
          errorStatus: ''
      };
  }

  async componentDidMount() {
    const response = await fetch('/api/data')
    if (response.status >= 400) {
      this.setState({errorStatus: 'Error fetching countries'});
    } else {
      response.json().then(res => {
        this.setState({response: res.data})
      });
    }
  }

  render() {
    return (
      <main className="App">
          <h1 className="App-header">Dropdown component ;P</h1>
          <p className="App-title">Searchable and Multiple Selection Dropdown</p>
          <div className="row">
              <div className="four columns">&nbsp;</div>
              <div className="four columns">
              <MultiSearchDropdown
                data={this.state.response} />
              </div>
              <div className="four columns"></div>
          </div>
      </main>
    );
  }

}

export default App;
