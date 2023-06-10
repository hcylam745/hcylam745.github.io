import React, {Component} from "react";
import TextBox from "./textbox";
import Line from "./line";

import "./App.css"

class Body extends Component {
    render() {
        return (
            <div className="body">
                <Line/>
                <TextBox text="Hi, I'm Henry Lam, a third year Computer Science student at HKUST."
                paddingtop="30vh"/>
            </div>
        )
    }
}

export default Body;