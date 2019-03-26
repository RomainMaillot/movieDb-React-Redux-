import React, { Component } from 'react';
import styled from "styled-components";
import "./App.css";

import { Provider } from 'react-redux'
import store from './store'
import { fetchOffers } from './store'

const Button = styled.button`
  background-color: #74b9ff;
  color: white;
  outline: none;
`;

class App extends Component {
  state = {
    info: "",
    description: ""
  };

  onClick = () => {
    let title = store.getState()
    store.dispatch(fetchOffers('MOVIES'))
    .then(() => 
    {
      let description = store.getState()
      this.setState({
        info: title,
        description: description
      });
    })
  };

  render() {
    return (
      <Provider className="App" store={store}>
        <header className="App-header">
          <h1>{this.state.info}</h1>
          <p>{this.state.description}</p>
          <Button onClick={() => this.onClick()}>Movie Title</Button>
        </header>
      </Provider>
    );
  }
}

export default App;
