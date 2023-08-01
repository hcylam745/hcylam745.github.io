import React, {Component} from "react";
import Body from "./body";
import CursorTracker from "./cursortracker";
import Navbar from "./navbar";
import { connect } from "react-redux";

import "./App_mobile.css"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0
        }

        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.props.dispatch({type:10, x_pos:0, y_pos:0});
        const height = this.myRef.current["clientHeight"];
        this.setState({
            height:height
        })
    }

    render() {
        const {height} = this.state;
        return (
            <div className="mobile" ref={this.myRef}>
                <Navbar/>
                <div className="main">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800&display=swap');
                    </style>
                    <Body/>
                </div>
                <CursorTracker height={height}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        height: state.height,
        experienceHeight: state.experienceHeight,
        projectsHeight: state.projectsHeight
    }
}


export default connect(mapStateToProps)(Main);