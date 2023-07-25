import React, {Component} from "react";

import { connect } from "react-redux";

import "./projects.css"

class ProjectText extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    whiteBorder(id) {
        let element = document.getElementById(id);
        element.style.backgroundColor = "rgba(255,255,255,0.08)";
    }

    removeBorder(id) {
        let element = document.getElementById(id);
        element.style.backgroundColor = null;
    }

    render() {
        const image = this.props.img;

        const text_arr = this.props.children;

        const id = this.props.id;

        return (
            <div className="project" id={id} onMouseEnter={()=>this.whiteBorder(id)} onMouseLeave={()=>this.removeBorder(id)} ref = {this.myRef}>
                <div className="projectimage">
                    <img src={image} className="image" alt="Project Image"></img>
                </div>
                <div className="projecttext">
                    <div className="projectheader">
                        {text_arr[0]}
                    </div>
                    <div className="projectbody">
                        {text_arr[2]}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(ProjectText);