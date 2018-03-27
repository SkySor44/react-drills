import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      userInput: ''
    }

    this.addToList = this.addToList.bind(this)
  }
  
  updateInput(e){
    this.setState({
      userInput: e
    })
  }
  
  addToList(){
    let newArr = this.state.list.slice(0);
    newArr.push(this.state.userInput)
    this.setState({
      list: newArr,
      userInput: ''
    })
  }

  render() {

    var myList = this.state.list.map((e, i)=>{
      return (
        <Todo key = {i} task = {e}/>
      )
    })

    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <input type = 'text' placeholder = 'New task here' onChange = {(e) => this.updateInput(e.target.value)}/>
        <button onClick = {() => this.addToList()}>Add</button>
        {myList}
      </div>
    );
  }
}

export default App;
