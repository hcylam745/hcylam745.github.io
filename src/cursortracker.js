import React, {Component} from "react";
import {connect} from "react-redux";

import "./cursortracker.css"

class CursorTracker extends Component {
    constructor(props){
        super(props);
    }

    state = {
        y_pos:0,
        x_pos:0
    }

    componentDidUpdate() {
        const {x_pos, y_pos} = this.props;
    }

    render() {
        const {x_pos, y_pos} = this.props;

        return (
            <div className="cursortracker" style={{background: "radial-gradient(600px at " + x_pos + "px " + y_pos + "px, rgba(60, 21, 117, 0.3), transparent 70%)"}}>
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