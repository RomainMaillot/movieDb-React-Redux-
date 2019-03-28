// Importing all requirement
import React, { Component } from 'react';
import styled from "styled-components";
import store from '../store';
import { fetchOffers } from '../store';

// Create card component style
const Card = styled.div`
  width: 23%;
  background-color: white;
  box-shadow: 0px 2px 8px 0px #33333340;
  margin-bottom: 5vh;
  color: #333333;
  .cover img {
    width: 100%;
  }
  &.hidden {
    display: none;
  }
`

const Title = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 1.6rem;
  padding: 5px;
  margin-bottom: 0;
`

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1rem;
  padding: 10px;
  justify-self: flex-end;
  .card--footer--info {
    display: flex;
    flex-direction: column;
  }
  p {
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
  }
  .rating {
    text-align: right;
  }
  h3 {
    color: grey;
    font-size: 0.8rem;
    margin-bottom: 0;
  }
`

// Create the class
class CardComponent extends Component {
    state = {
      info: "",
      year: "",
      rate: "",
      cover: "",
      genres: [],
      visible: "visible"
    };

    componentDidMount() {
        store.dispatch(
            fetchOffers('MOVIES', this.props.number)
        ).then(() => {
            this.setState({
                info: store.getState().title,
                year: store.getState().date,
                rate: store.getState().rate,
                cover: store.getState().coverLink,
                genres: store.getState().genres
            })
            if (this.state.info==="No info") {
                this.setState({
                    visible: "hidden"
                })
            }
            else if(this.state.cover === 'https://image.tmdb.org/t/p/originalnull')
            {
                this.setState({
                    cover: 'https://via.placeholder.com/547x821'
                })
            }
        });
    }

    render() {
      return (
        <Card className={this.state.visible}>
            <div className="cover"><img src={this.state.cover} alt="cover of the movie"/></div>
            <Title>{this.state.info}</Title>
            <CardFooter>
                <div className="card--footer--info"><h3>Year</h3><p>{this.state.year}</p></div>
                <div className="card--footer--info"><h3>Rating</h3><p className="rating">{this.state.rate}</p></div>
            </CardFooter>
        </Card>
      );
    }
  }
  
  export default CardComponent;