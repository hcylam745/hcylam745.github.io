import React, {Component} from "react";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { HashRouter, Routes, Route} from "react-router-dom";
import Main from "./main";
import Wordle from "./wordle-clone/App";
import Mobile from "./mobile/main";

import "./App.css";
import "./animations.css";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/wordle" element={<Wordle/>}/>
              <Route path="/mobile" element={<Mobile/>}/>
            </Routes>
          </HashRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
