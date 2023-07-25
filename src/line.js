import React, {Component} from "react";

import "./line.css"



class Line extends Component {
    render() {
        return (
            <div className="linediv">
                <div className="circle">&nbsp;</div>
                <div className="line">&nbsp;</div>
                <div className="circle">&nbsp;</div>
            </div>
        )
    }
}

export default Line;