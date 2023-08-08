import React, {Component} from "react";
import {connect} from "react-redux";

import "./cursortracker.css"

class CursorTracker extends Component {
    constructor(props){
        super(props);

        this.state = {
            h:document.body.scrollHeight
        }

        this.handleScroll = this.handleScroll.bind(this);
    }
    
    componentDidMount() {
        this.setState({
            h:document.body.scrollHeight
        })
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(evt) {
        this.setState({
            h:document.body.scrollHeight
        })
    }

    render() {
        const {x_pos, y_pos} = this.props;
        const {h} = this.state;
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