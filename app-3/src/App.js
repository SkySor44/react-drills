import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      foods: ["Apples", "Oranges", "Bananas", "Pears"],
      userInput: ''
    }
  }
  
  updateValue(e){
    let foodList = this.state.foods.map( (e, i) => {
      return (
        <div key = {i}>
          <h2>{e}</h2>
        </div>
      )
    })
    
    this.setState({
      userInput: e
    })
    var unfiltered = this.state.foods.slice(0);
    var filtered = unfiltered.filter( (val) => {
      return val.includes(this.state.userInput)
    })
   if (this.state.userInput !== ''){
     this.setState({
       foods: filtered
     })
   } else if (this.state.userInput === ''){
     this.setState({
       foods: foodList
     })
   }
    }
  
  

  render() {
    var foodList = this.state.foods.map( (e, i) => {
      return (
        <div key = {i}>
        <h2>{e}</h2>
        </div>
      )
    })


    return (
      <div className="App">
      <input type = "text" placeholder = "Type Here to Filter" onChange = { (e) => this.updateValue(e.target.value)}></input>
      <h2>{foodList}</h2>
      </div>
    );
  }
}

export default App;
