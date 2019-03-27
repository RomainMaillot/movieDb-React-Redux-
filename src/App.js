import React, { Component } from 'react';
import styled from "styled-components";
import "./App.css";

import { Provider } from 'react-redux';
import store from './store';
import CardComponent from './components/Card'
import { fetchOffers } from './store'

const Button = styled.button`
  background-color: #74b9ff;
  color: white;
  outline: none;
`;

const Cards = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`

class App extends Component {
  state = {
    showComponent: false,
    cards: [],
    numbers: [1,2,4,5,6,7,8,9,10]
  };
  
  render() {
    return (
      <Provider className="App" store={store}>
        <Cards className="App-header">
          {this.state.numbers.map((number) => (
            <CardComponent key={number} number={number} />
          ))}
          {this.state.showComponent ? <CardComponent /> : null}
          {this.state.showComponent2 ? <CardComponent /> : null}
          {/* <Card>
            <div className="cover"><img src={this.state.cover} alt="cover of the movie"/></div>
            <Title>{this.state.info}</Title>
            <CardFooter>
                <div className="card--footer--info"><h3>Year</h3><p>{this.state.year}</p></div>
                <div className="card--footer--info"><h3>Rating</h3><p>{this.state.rate}</p></div>
            </CardFooter>
          </Card> */}
        </Cards>
      </Provider>
    );
  }
}

export default App;
