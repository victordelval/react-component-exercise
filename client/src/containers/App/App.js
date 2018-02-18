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
      <div>
        <MultiSearchDropdown data={this.state.response} />
      </div>
    );
  }

}

export default App;
