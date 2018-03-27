import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
class App extends Component {
  constructor(){
    super()
    this.state ={
      baseUrl: 'https://swapi.co/api/people/4/',
      darth: '' 
    }
  }
  
  componentDidMount(){
    axios.get(this.state.baseUrl).then(res => {
      this.setState({
        darth: res.data
      })
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.darth.name}</h1>
        <h2>Skin Color: {this.state.darth.skin_color}</h2>
        <h2>Eye Color: {this.state.darth.eye_color}</h2>
      </div>
    );
  }
}

export default App;
