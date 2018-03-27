import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask'
import List from './List'
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
    this.addNewTask = this.addNewTask.bind(this)
  }
  
  addNewTask(task){
    var newArr = this.state.list.slice(0);
    newArr.push(task);
    this.setState({
      list: newArr
    })
  }
  
  render() {
    return (
      <div className="App">
        <NewTask myTaskFunction = {this.addNewTask}/>
        <List myList = {this.state.list}/>
      </div>
    );
  }
}

export default App;
