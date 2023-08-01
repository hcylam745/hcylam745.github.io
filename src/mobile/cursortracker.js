import React, {Component} from "react";
import {connect} from "react-redux";

import "./cursortracker_mobile.css"

class CursorTracker extends Component {
    constructor(props){
        super(props);

        this.state = {
            y_pos:40,
            x_pos:(window.pageXOffset + window.innerWidth)/2,
            h:document.body.scrollHeight
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(evt) {
        let y_offset = window.pageYOffset;
        let x_offset = (window.pageXOffset + window.innerWidth)/2;
        this.setState({
            x_pos:x_offset,
            y_pos:y_offset,
            h:document.body.scrollHeight
        })
    }

    

    render() {
        const {x_pos, y_pos, h} = this.state;
        let new_y_pos = y_pos + 60;
        return (
            <div className="cursortracker" style={{height:h, background: "radial-gradient(600px at " + x_pos + "px " + new_y_pos + "px, rgba(60, 21, 117, 0.3), transparent 60%)"}}>
                &nbsp;
            </div>
        )
    }
}

export default connect()(CursorTracker);