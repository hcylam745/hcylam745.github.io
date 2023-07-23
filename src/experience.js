import React, {Component} from "react";

import ExperienceText from "./experiencetext"

import "./experience.css"

class Experience extends Component {
    render() {
        return (
            <div className="experiencecontainer">
                <ExperienceText>
                    June - Aug 2023<br/>
                    Summer Intern • Manulife<br/>
                    Technology Auditor<br/>
                    Conducted technology SOX testing among all internal systems and products in Manulife's Hong Kong. 
                    Developed cybersecurity testing tools with Python to secure 100+ internal development servers. 
                    Utilized Tesseract OCR & Python for various automation purposes, saving 10 hours of manual work per week.<br/>
                    Python, Tesseract
                </ExperienceText>
                <ExperienceText>
                    Jan - June 2022<br/>
                    Student Work Placement Intern • HSBC<br/>
                    Data Analytics & Automation <br/>
                    Automated data analytics tasks for myself and team members utilizing Python and VBA for Excel, resulting in a 10-hour reduction in manual work per week.
                    Developed VBA tools to improve efficiency and accessibility for coworkers to otherwise difficult to access data.
                    Conducted data analytics using SAS Enterprise on datasets containing millions of records to process and present on QlikSense in a digestible format. <br/>
                    Python, VBA, SAS Enterprise, Qliksense
                </ExperienceText>
                <ExperienceText>
                    June - Dec 2021<br/>
                    Summer Intern / Fall Intern<br/>
                    Full Stack Developer <br/>
                    I maintained and updated a dashboard website to display large amounts of information in a easily digestible format, which was then deployed in hospitals and clinics in Hong Kong.
                    The website used React.js for the frontend, with a Node.js API for the backend, which was linked to a MySQL database, such that the information on the website would be updated by information in the database. <br/>
                    React.js, Node.js, MySQL
                </ExperienceText>
            </div>
        )
    }
}

export default Experience;