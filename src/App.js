// Import all requierement
import React, { Component } from 'react';
import styled from "styled-components";
import "./App.css";

import { Provider } from 'react-redux';
import store from './store';
import CardComponent from './components/Card'
import FormComponent from './components/Form'

// Create styles
const Cards = styled.ul`
  width: 80%;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px;
  opacity: 1;
  transition: opacity 1s;
  &.hidden {
    opacity: 0;
  }
`
const Loader = styled.div`
  width: 80%;
  height: 100vh;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  opacity: 1;
  transition: opacity 1s;
  &.hidden {
    opacity: 0;
  }
  .circle {
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid;
    border-color: #e67e22 transparent #e67e22 transparent;
    animation: loading 1.2s linear infinite;
  }
`

// Create App component
class App extends Component {
  state = {
    showComponent: false,
    cards: [],
    numbers: []
  };

  componentDidMount() {
    let i = 0
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
    setTimeout(() => {
      this.setState({
        showComponent: true
      })
    }, 2000);
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
        <Loader className={this.state.showComponent ? "hidden" : "App-header"}><div className="circle"></div></Loader>
        <Cards className={this.state.showComponent ? "App-header" : "hidden"}>
          {this.state.numbers.map((number) => (
            <CardComponent key={number} number={number} />
          ))}
        </Cards>
        <FormComponent info={this.state.showComponent} />
      </Provider>
    );
  }
}

export default App;
