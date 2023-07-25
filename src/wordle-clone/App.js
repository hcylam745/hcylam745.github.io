import React, { Component } from "react";
import MainBody from './MainBody';
import Header from './Header';
//import { Route, Switch, Redirect, HashRouter } from "react-router-dom"; 

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <MainBody></MainBody>
      </div>
    )
  }
}

export default App;
