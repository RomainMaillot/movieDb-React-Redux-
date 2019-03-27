import React, { Component } from 'react';
import styled from "styled-components";
import "./App.css";

import { Provider } from 'react-redux';
import store from './store';
import CardComponent from './components/Card'

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
    numbers: []
  };

  componentDidMount() {
    let i = 0
    const fetchMovies = setInterval(() => {
      let max = i+10
      let numbers = [...this.state.numbers]
      while(numbers.length < max)
      {
        i++
        numbers.push(i)
      }
      this.setState({
        numbers: numbers
      })
      if(i===100)
      {
        clearInterval(fetchMovies)
      }
    }, 2000);
  }
  
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
