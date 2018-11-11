import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.testStore)
    return (
      <div className="App">
      <div>
        <input type="text" />
        <button>Add Random String</button>
        <ul>
          {this.props.testStore.map((string, index) => 
            <li key = {index}>{string}</li>
          )}
        </ul>
      </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(
  state =>({
    testStore: state
  }),
  dispatch => ({})
  )(App)
