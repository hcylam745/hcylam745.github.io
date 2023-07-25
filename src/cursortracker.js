import React, {Component} from "react";
import {connect} from "react-redux";

import "./cursortracker.css"

class CursorTracker extends Component {
    constructor(props){
        super(props);
    }

    state = {
        y_pos:0,
        x_pos:0,
        min_height:0
    }

    render() {
        const {x_pos, y_pos} = this.props;
        let h = document.body.scrollHeight;
        return (
            <div className="cursortracker" style={{height:h, background: "radial-gradient(600px at " + x_pos + "px " + y_pos + "px, rgba(60, 21, 117, 0.3), transparent 70%)"}}>
                &nbsp;
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        x_pos: state.xPos,
        y_pos: state.yPos
    }
}

export default connect(mapStateToProps)(CursorTracker);