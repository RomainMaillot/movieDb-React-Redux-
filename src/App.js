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

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

class App extends Component {
  state = {
    showComponent: false,
    showComponent2: false
  };

  onClick = () => {
    // let infos = store.getState()
    // let title = infos.title
    // let year = infos.date
    // let rate = infos.rate
    // let coverLink = 'https://image.tmdb.org/t/p/original' + infos.coverLink

    // this.setState({
    //     info: title,
    //     year: year,
    //     rate: rate,
    //     cover: coverLink
    //   });
    this.setState({
      showComponent: true
    })
  };

  onClick2 = () => {
    store.dispatch(
      fetchOffers('MOVIES', 106)
    ).then(() => {
      this.setState({
        showComponent2: true
      })
    });
  };

  
  render() {
    return (
      <Provider className="App" store={store}>
        <Cards className="App-header">
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
        <Button onClick={() => this.onClick()}>START</Button>
        <Button onClick={() => this.onClick2()}>NEW</Button>
      </Provider>
    );
  }
}

export default App;
