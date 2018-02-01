// Core
import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
// instruments

// Components
import Barchik from '../../components/Barchik';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Shishnaya    _へ__(‾◡◝ )</h1>
        </header>
        <Barchik />
      </div>
    );
  }
}

export default App;
