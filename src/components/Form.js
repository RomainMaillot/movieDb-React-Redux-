// Import requirement
import React, { Component } from 'react';
import styled from "styled-components";

// Create style for the form
const Form = styled.form`
  width: 20%;
  height: 60vh;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    position: relative;
  }
  label input {
    margin-top: 30px;
  }
  label p {
    bottom: 20%;
    font-size: 0.6rem;
    position: absolute;
  }
`

const Search = styled.input`
  background: #e67e22;
  color: #ecf0f1;
  width: 150px;
  height: 50px;
  font-size: 0.8rem;
  font-weight: bold;
  align-self: center;
`

// Create the component
class FormComponent extends Component {
    state = {
      genre: "",
      year: "2004",
      rate: "5",
      runtime: "150"
    };

    onSubmit = e => {
      e.preventDefault()
      console.log(this.props.info)
    }

    onChange = event => {
      if (event.target.name === 'genre') 
      {
        this.setState({genre: event.target.value})
      }
      else if(event.target.name === 'year')
      {
        this.setState({year: event.target.value})
      }
      else if(event.target.name === 'rating')
      {
        this.setState({rate: event.target.value})
      }
      else if(event.target.name === 'runtime')
      {
        this.setState({runtime: event.target.value})
      }
    }

    render() {
      return (
        <Form onSubmit={this.onSubmit} action="">
            <label>
              Genre
              <select id="genre-select" name="genre" value={this.state.genre} onChange={this.onChange}>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="animation">Animation</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="documentary">Documentary</option>
                <option value="drama">Drama</option>
                <option value="family">Family</option>
                <option value="fantasy">Fantasy</option>
                <option value="history">History</option>
                <option value="horror">Horror</option>
                <option value="music">Music</option>
                <option value="mystery">Mystery</option>
                <option value="romance">Romance</option>
                <option value="scienceFiction">Science Fiction</option>
                <option value="tvMovie">TV Movie</option>
                <option value="thriller">Thriller</option>
                <option value="war">War</option>
                <option value="western">Western</option>
              </select>
            </label>
            <label>
              Year
              <p>{this.state.year}</p>
              <input type="range" name="year" min="1990" max="2017" value={this.state.year} onChange={this.onChange}/>
            </label>
            <label>
              Rating
              <p>{this.state.rate}</p>
              <input type="range" name="rating" min="0" max="10" value={this.state.rate} onChange={this.onChange}/>
            </label>
            <label>
              Runtime
              <p>{this.state.runtime}</p>
              <input type="range" name="runtime" min="0" max="300" step="10" value={this.state.runtime} onChange={this.onChange}/>
            </label>
            <Search type="submit" value="Search" />
        </Form>
      );
    }
  }
  
  export default FormComponent;