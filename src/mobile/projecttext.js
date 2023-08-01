import React, {Component} from "react";

import { connect } from "react-redux";

import "./projects_mobile.css"

class ProjectText extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    linkToWebsite(id) {
        if (id == "wordle") {
            window.location.href="#/wordle";
        } else if (id == "snake") {
            window.location.href="https://github.com/hcylam745/snakegame"
        }
    }

    render() {
        const image = this.props.img;

        const text_arr = this.props.children;

        const id = this.props.id;

        return (
            <div className="project" id={id} onClick={()=>this.linkToWebsite(id)} ref = {this.myRef}>
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