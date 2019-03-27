import React, { Component } from 'react';
import styled from "styled-components";
import store from '../store';

const Card = styled.div`
  width: 21%;
  background-color: white;
  box-shadow: 0px 2px 8px 0px #333333;
  margin-bottom: 5vh;
  color: #333333;
  .cover img {
    width: 100%;
  }
`

const Title = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 1.8rem;
  padding: 5px;
`

const CardFooter = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1rem;
  padding: 10px
  .card--footer--info {
    display: flex;
    flex-direction: column;
  }
  h3 {
    color: grey;
    font-size: 0.8rem;
  }
`

class CardComponent extends Component {
    state = {
        info: store.getState().title,
        year: store.getState().date,
        rate: store.getState().rate,
        cover: 'https://image.tmdb.org/t/p/original' + store.getState().coverLink
      };

    render() {
      return (
        <Card>
            <div className="cover"><img src={this.state.cover} alt="cover of the movie"/></div>
            <Title>{this.state.info}</Title>
            <CardFooter>
                <div className="card--footer--info"><h3>Year</h3><p>{this.state.year}</p></div>
                <div className="card--footer--info"><h3>Rating</h3><p>{this.state.rate}</p></div>
            </CardFooter>
        </Card>
      );
    }
  }
  
  export default CardComponent;