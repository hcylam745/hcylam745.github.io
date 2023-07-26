import React, {Component} from "react";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./main";
import Wordle from "./wordle-clone/App";


import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/website">
            <Routes>
              <Route path="" element={<Main/>}/>
              <Route path="/wordle" element={<Wordle/>} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
