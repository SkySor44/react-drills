import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage = 'https://images.unsplash.com/photo-1519709539940-93832710ecda?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f23631c00a4769967f0250c154524466&auto=format&fit=crop&w=751&q=80'/>
      </div>
    );
  }
}

export default App;
