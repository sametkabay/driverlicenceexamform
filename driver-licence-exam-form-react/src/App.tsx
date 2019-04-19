import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './scenes/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login></Login>
        </header>
      </div>
    );
  }
}

export default App;
