import React, {Component} from "react";

import "./projects.css"

class ProjectText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const image = this.props.img;

        const text_arr = this.props.children;

        return (
            <div className="project">
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

export default ProjectText;