import React, {Component} from "react";
import {connect} from "react-redux";

import "./experience_mobile.css"

class ExperienceTitle extends Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }

    componentDidMount() {
        let height = this.myRef.current.offsetTop;
        this.props.dispatch({type:15, experienceHeight:height});
    }

    render() {
        return (
            <div className="experiencetitle" id="experiencetitle" ref={this.myRef}>
                Experience
            </div>
        )
    }
}

export default connect()(ExperienceTitle);