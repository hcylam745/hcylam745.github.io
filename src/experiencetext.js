import React, {Component} from "react";
import {connect} from "react-redux";

import "./experience.css"

class ExperienceText extends Component {
    constructor(props) {
        super(props);

        this.whiteBorder = this.whiteBorder.bind(this);
        this.removeBorder = this.removeBorder.bind(this);
    }

    componentDidUpdate() {
        const {focusExper, id} = this.props;
        let element = document.getElementById(id);
        if (focusExper != null & focusExper != id) {
            //element.style.opacity = 0.6;
            element.classList.remove('unfocusundo');
            element.classList.add('unfocused');
            
        } else if (focusExper == null || focusExper == id) {
            //element.style.opacity = 1.0;
            if (element.classList.contains('unfocused')) {
                element.classList.remove('unfocused');
                if (!element.classList.contains('focused')) {
                    element.classList.add('unfocusundo');
                    setTimeout(() => {
                        element.classList.remove('unfocusundo')
                    }, 200);
                }
            }
        }
    }

    whiteBorder(id) {
        let element = document.getElementById(id);
        //element.style.backgroundColor = "rgba(255,255,255,0.08)";
        element.classList.add('focused');
        element.classList.remove('unfocusundo');

        this.props.dispatch({type:19,focusExper:id});
    }

    removeBorder(id) {
        let element = document.getElementById(id);
        element.classList.remove('focused');

        element.classList.add('focusedundo');

        setTimeout(()=>{
            element.classList.remove('focusedundo');
        }, 200);

        this.props.dispatch({type:19,focusExper:null});
    }

    getSkillsList(skills) {
        var divList = [];
        for (let i = 0; i < skills.length; i++) {
            divList.push(<div className="skill" key={i}>{skills[i]}</div>)
        }
        return divList;
    }

    linkToWebsite(id) {
        if (id == "manulife") {
            window.location.href="https://manulife.com/";
        } else if (id == "hsbc" || id == "hsbcdigitalinnovation") {
            window.location.href="https://www.hsbc.com/";
        } else if (id == "hkbn") {
            window.location.href="https://www.hkbnes.net/web/";
        }
    }

    render() {
        const {id} = this.props;

        const children = this.props.children;

        const skill_arr = children[8].split(",");

        return (
            <div id={id} onClick={()=>this.linkToWebsite(id)} onMouseEnter={()=>this.whiteBorder(id)} onMouseLeave={()=>this.removeBorder(id)} className="experience">
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

const mapStateToProps = state => {
    return {
        focusExper: state.focusExper
    }
}

export default connect(mapStateToProps)(ExperienceText);