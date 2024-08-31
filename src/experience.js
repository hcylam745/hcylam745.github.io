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
                <ExperienceText id="hsbcdigitalinnovation">
                    Jun - Aug 2024 <br/>
                    HSBC • Digital Innovation Summer Intern <br/>
                    Full Stack Software Engineer <br/>
                    Deployed an existing productivity tracking internal tool to AWS with Terraform and Jenkins, reducing runtime by 200%.
                    Identified a limitation of an internal tool and proposed a solution in Python, increasing efficiency by over 900%.
                    Visualized productivity data across 600+ repositories and 300+ members, enhancing decision-making and performance tracking.
                    Collaborated with stakeholders across 5+ different teams to ensure code quality and proper testing for frontend Angular tickets.<br/>
                    Terraform, AWS, AngularJS, React.js
                </ExperienceText>
                <ExperienceText id="manulife">
                    Jun - Aug 2023<br/>
                    Manulife • Summer Intern<br/>
                    Technology Auditor<br/>
                    Conducted IT SOX testing for DevOps pipeline compliance across 7 applications across Manulife Hong Kong, ensuring seamless progression from JIRA requests to system integration tests / user acceptance tests to deployment.
                	Developed cybersecurity testing tools with Python to check servers for WAFs, ensure that their cipher suites are up to date, and automatically scan for Bitbucket secrets, as well as performing 15+ penetration tests across 100+ internal development servers.
                    Created a custom secret scanner to automatically clone and scan 800+ repositories from Bitbucket, safeguarding 200+ secrets.<br/>
                    Python, Tesseract
                </ExperienceText>
                <ExperienceText id="hsbc">
                    Jan - Jun 2022<br/>
                    HSBC • Student Work Placement Intern<br/>
                    Data Analytics & Automation <br/>
                    Used VBA to develop a user-friendly interface to an internal data access system that utilized IBM's Personal Communications 14, which contained millions of records across all of HSBC.
                    Used SAS Enterprise to filter and combine millions of records, and analyzed the impacts of a policy change on customers and revenue.<br/>
                    Python, VBA, SAS Enterprise, Qliksense
                </ExperienceText>
                <ExperienceText id="hkbn">
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