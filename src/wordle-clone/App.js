import React, { Component } from "react";
import MainBody from './MainBody';
import Header from './Header';
import Keyboard from "./Keyboard";
import TextOverlay from "./TextOverlay";
//import { Route, Switch, Redirect, HashRouter } from "react-router-dom"; 

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="wordle-clone">
        <TextOverlay/>
        <div className="container">
          <Header/>
          <MainBody/>
          <Keyboard/>
        </div>
      </div>
    )
  }
}

export default App;
