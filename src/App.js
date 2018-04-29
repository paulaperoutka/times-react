import React, { Component } from 'react';

import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // console.log();
  render() {
    return (
      <div className="wrapper">
         <Jumbotron />

      </div>
    );
  }
}

export default App;
