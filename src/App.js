import React, {Component} from "react";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";


import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="container">
            a
          </div>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
