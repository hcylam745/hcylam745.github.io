import React, {Component} from "react";

class AboutMe extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="aboutme">
                <div className="aboutname">
                    Henry Lam
                </div>
                <div className="abouttext">
                    Hi! I'm a third year Computer Science student at the Hong Kong University of Science and Technology.
                </div>
            </div>
        )
    }
}

export default AboutMe;