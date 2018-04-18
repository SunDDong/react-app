import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.scss';
//@import('./reset')

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          孙冬冬.
        </p>
      </div>
    );
  }
}

export default App;
