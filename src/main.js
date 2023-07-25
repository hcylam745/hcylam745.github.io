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
            y_pos: 0,
            height: 0
        }
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.props.dispatch({type:0, x_pos:0, y_pos:0});
        const height = this.myRef.current["clientHeight"];
        this.setState({
            height:height
        })
    }

    async handleMouseMovement(pos) {
        const posX = pos["pageX"];
        const posY = pos["pageY"];
        this.setState({
            x_pos:posX,
            y_pos:posY
        })
        this.props.dispatch({type:0, x_pos:posX, y_pos:posY});
    }

    render() {
        const {height} = this.state;
        return (
            <div className="main" ref={this.myRef} onMouseMove={pos=>this.handleMouseMovement(pos)}>
                <NavBar/>
                <Body/>
                <CursorTracker height={height}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        x_pos: state.x_pos,
        y_pos: state.y_pos,
        height: state.height,
        experienceHeight: state.experienceHeight,
        projectsHeight: state.projectsHeight
    }
}

export default connect(mapStateToProps)(Main);