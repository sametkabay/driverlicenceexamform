import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'reactstrap/';
import Login from './scenes/login';
import 'bootstrap/dist/css/bootstrap.min.css';

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
