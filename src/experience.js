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
                    Conducted IT SOX testing, ensuring sections of the DevOps pipeline were followed, including the progression from a request on JIRA to a System Integration/User Acceptance Test to deployment.
                	Developed cybersecurity testing tools with Python to check servers for WAFs, ensure that their cipher suites are up to date, and automatically scan for Bitbucket secrets, as well as performing 15+ penetration tests across 100+ internal development servers.<br/>
                    Python, Tesseract
                </ExperienceText>
                <ExperienceText>
                    Jan - Jun 2022<br/>
                    HSBC • Student Work Placement Intern<br/>
                    Data Analytics & Automation <br/>
                    Used VBA to develop a user-friendly interface to an internal data access system that utilized IBM's Personal Communications 14, which contained millions of records across all of HSBC.
                    Used SAS Enterprise to filter and combine millions of records, and analyzed the impacts of a policy change on customers and revenue.<br/>
                    Python, VBA, SAS Enterprise, Qliksense
                </ExperienceText>
                <ExperienceText>
                    Jun - Dec 2021<br/>
                    HKBN • Summer Intern / Fall Intern  <br/>
                    Full Stack Developer <br/>
                    Built a React.js dashboard that displayed information from a MySQL database by collaborating with a client developer team to develop a Node.js API, which was then deployed across 50+ hospitals and clinics across Hong Kong. 
                	Visualized data from 30+ tables to speed up information retrieval by 10 times and improve clarity for end users.<br/>           
                    React.js, Node.js, MySQL
                </ExperienceText>
                </div>
            </div>
        )
    }
}

export default Experience;