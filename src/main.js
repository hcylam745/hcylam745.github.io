import React, {Component} from "react";
import NavBar from "./navbar"
import Body from "./body"
import Line from "./line"

import "./App.css"

class Main extends Component {
    render() {
        return (
            <div className="main">
                <NavBar/>
                <Body/>
            </div>
        )
    }
}

export default Main;