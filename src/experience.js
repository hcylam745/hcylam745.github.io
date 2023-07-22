import React, {Component} from "react";

import "./experience.css"

class Experience extends Component {
    render() {
        return (
            <div className="experiencecontainer">
                <div className="experience">
                    <div className="timeframe">
                        June - August 2023
                    </div>
                    <div className="experiencebody">
                        <div className="experienceheader">
                            Summer Intern • Manulife<br/>
                            <div className="experienceheadersub">
                                Technology Auditor
                            </div>
                        </div>
                        <div className="experiencetext">
                        Conducted technology SOX testing among all internal systems and products in Manulife's Hong Kong. 
                        Developed cybersecurity testing tools with Python to secure 100+ internal development servers. 
                        Utilized Tesseract OCR & Python for various automation purposes, saving 10 hours of manual work per week.
                        </div>
                        <div className="experienceskills">
                            <div className="skill">Python</div>
                            <div className="skill">Tesseract</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;