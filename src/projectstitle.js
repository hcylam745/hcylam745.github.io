import React, {Component} from "react";
import {connect} from "react-redux";

import "./projects.css"

class ProjectsTitle extends Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }

    componentDidMount() {
        let height = this.myRef.current.offsetTop;
        this.props.dispatch({type:12, projectsHeight:height});
    }

    render() {
        return (
            <div className="projecttitle" id="projecttitle" ref={this.myRef}>
                Projects
            </div>
        )
    }
}

export default connect()(ProjectsTitle);