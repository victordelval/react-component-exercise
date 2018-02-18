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
      <main className="countries-container">
          <h1 className="countries-container-text">Dropdown components</h1>
          <hr/>
          <p className="countries-container-text countries-container-p">This is a "Multiple Search Selection" Dropdown component:</p>
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
