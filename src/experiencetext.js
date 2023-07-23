import React, {Component} from "react";

import "./experience.css"

class ExperienceText extends Component {
    constructor(props) {
        super(props);
    }

    getSkillsList(skills) {
        var divList = [];
        for (let i = 0; i < skills.length; i++) {
            divList.push(<div className="skill">{skills[i]}</div>)
        }
        return divList;
    }

    render() {
        const children = this.props.children;

        const skill_arr = children[8].split(",");

        return (
            <div className="experience">
                <div className="timeframe">
                    {children[0]}
                </div>
                <div className="experiencebody">
                    <div className="experienceheader">
                        {children[2]}<br/>
                        <div className="experienceheadersub">
                            {children[4]}
                        </div>
                    </div>
                    <div className="experiencetext">
                        {children[6]}
                    </div>
                    <div className="experienceskills">
                        {this.getSkillsList(skill_arr)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperienceText;