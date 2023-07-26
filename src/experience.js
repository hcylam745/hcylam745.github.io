import React, {Component} from "react";

import ExperienceText from "./experiencetext"
import Line from "./line";

import "./experience.css"

class Experience extends Component {
    render() {
        return (
            <div className="experienceline">
                <Line/>
                <div className="experiencecontainer">
                <ExperienceText>
                    Jun - Aug 2023<br/>
                    Manulife • Summer Intern<br/>
                    Technology Auditor<br/>
                    Conducted IT SOX testing, ensuring sections of the DevOps pipeline were followed, including the progression from a request on JIRA to a System Integration/User Acceptance Test to deployment, among 7 applications across Manulife Hong Kong.
                    Developed cybersecurity testing tools with Python to check WAFs and cipher suites, as well as performing 15+ penetration tests across 100+ internal development servers.
                    Utilized Tesseract OCR & Python to automate downloading files and inputting data, saving 10 hours of manual work per week. <br/>
                    Python, Tesseract
                </ExperienceText>
                <ExperienceText>
                    Jan - Jun 2022<br/>
                    HSBC • Student Work Placement Intern<br/>
                    Data Analytics & Automation <br/>
                    Automated weekly data analytics tasks for using Python and VBA, resulting in a 10-hour reduction in manual work per week.
                    Used VBA to develop a user-friendly interface to an internal data access system that utilized IBM's Personal Communications 14, which contained millions of records across all of HSBC, improving the efficiency of the entire system by 5 times.
                    Used SAS Enterprise to filter and combine millions of records across 3 databases, then analyzed the impacts of a policy change on customers and revenue, as well as presenting the information using QlikSense to create comprehensible graphs and tables.<br/>
                    Python, VBA, SAS Enterprise, Qliksense
                </ExperienceText>
                <ExperienceText>
                    Jun - Dec 2021<br/>
                    HKBN • Summer Intern / Fall Intern  <br/>
                    Full Stack Developer <br/>
                    Gradually became the lead developer that reported to management for a dashboard website with a React.js front-end, and a Node.js API server which connected to a MySQL database by collaborating with client developer team, which was then deployed in 50+ hospitals and clinics across Hong Kong.
                    The dashboard displayed information from 30+ databases, including alerts, HVAC information, total harmonic distortion, etc. <br/>           
                    React.js, Node.js, MySQL
                </ExperienceText>
                </div>
            </div>
        )
    }
}

export default Experience;