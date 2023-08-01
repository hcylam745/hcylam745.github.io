import React, {Component} from "react";

import { connect } from "react-redux";

import "./body_mobile.css"
import Experience from "./experience";
import Projects from "./projects";
import BodyText from "./bodytext";
import ExperienceTitle from "./experiencetitle";
import ProjectsTitle from "./projectstitle";
import BodyTitle from "./bodytitle";
import AboutMe from "./aboutme";

class Body extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="bodycontainer">
                <div className="bodytext">
                    <AboutMe/>
                    <BodyTitle/>
                    <BodyText/>
                    <ExperienceTitle/>
                    <Experience/>
                    <ProjectsTitle/>
                    <Projects/>
                </div>
            </div>
        )
    }
}

export default connect()(Body);