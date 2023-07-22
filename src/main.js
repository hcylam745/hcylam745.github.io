import React, {Component} from "react";
import NavBar from "./navbar"
import Body from "./body"
import { connect } from "react-redux";
import CursorTracker from "./cursortracker"

import "./App.css"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x_pos: 0,
            y_pos: 0
        }
    }

    componentDidMount() {
        this.props.dispatch({type:0, x_pos:0, y_pos:0});
    }

    handleMouseMovement = (pos) => {
        const posX = pos["nativeEvent"]["clientX"]
        const posY = pos["nativeEvent"]["clientY"]
        this.setState({
            x_pos:posX,
            y_pos:posY
        })
        this.props.dispatch({type:0, x_pos:posX, y_pos:posY});
    }

    render() {
        return (
            <div className="main" onMouseMove={pos=>this.handleMouseMovement(pos)}>
                <NavBar/>
                <Body/>
                <CursorTracker/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        x_pos: state.x_pos,
        y_pos: state.y_pos
    }
}

export default connect(mapStateToProps)(Main);