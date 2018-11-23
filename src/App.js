import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Main from './containers/Main'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
