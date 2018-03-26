import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ''
    }
  }
  

  updateValue(e){
    this.setState({
      userInput: e
    })
  }
  
  render() {
    return (
      <div className="App">
        <input type = "text" placeholder ="Type Here" onChange = { (e) => this.updateValue(e.target.value)}></input>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default App;
