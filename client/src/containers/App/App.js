import React, { Component } from 'react';

import './App.css';

import MultiSearchDropdown from '../MultiSearchDropdown';


class App extends Component {

  state = {
    response: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ response: res.data })
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/data');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
