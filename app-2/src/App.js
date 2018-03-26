import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor(){
   super();
   this.state = {
     codeList: ["Javascript", "React", "Git", "HTML", "CSS"]
   }
 }
  

render() {
  var finalCode = this.state.codeList.map( (e, i) => {
    return (
      <div key = {i}>
        <h3>{e}</h3>
      </div>
    )
  })


    return (
      <div className="App">
        <h3>{finalCode}</h3>
      </div>
    );
  }
}

export default App;
