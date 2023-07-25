import React, {Component} from "react";
import {connect} from "react-redux";

import "./navbar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.homeRef = React.createRef();
        this.experienceRef = React.createRef();
        this.projectRef = React.createRef();
    }

    state = {
        experienceHeight:0,
        projectsHeight:0
    }

    componentDidUpdate() {
        if (this.props.experienceHeight !== this.state.experienceHeight && this.props.projectsHeight !== this.state.projectsHeight) {
            this.setState({
                experienceHeight:this.props.experienceHeight,
                projectsHeight:this.props.projectsHeight
            })
            window.addEventListener('scroll', this.handleScroll);
            window.myParam = this.props;
            window.homRef = this.homeRef;
            window.expRef = this.experienceRef;
            window.proRef = this.projectRef;
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(evt) {
        let y_offset = window.pageYOffset;
        let experienceHeight = evt.currentTarget.myParam.experienceHeight;
        let projectsHeight = evt.currentTarget.myParam.projectsHeight;
        if (y_offset > experienceHeight && y_offset < projectsHeight) {
            evt.currentTarget.homRef.current.style.color = null;
            evt.currentTarget.expRef.current.style.color = "white";
            evt.currentTarget.proRef.current.style.color = null;
        } else if (y_offset > projectsHeight) {
            evt.currentTarget.homRef.current.style.color = null;
            evt.currentTarget.expRef.current.style.color = null;
            evt.currentTarget.proRef.current.style.color = "white";
        } else {
            evt.currentTarget.homRef.current.style.color = "white";
            evt.currentTarget.expRef.current.style.color = null;
            evt.currentTarget.proRef.current.style.color = null;
        }
    }

    scrollToHome() {
        const element = document.getElementById("bodytitle");
        element.scrollIntoView({behavior:"smooth"});
    }

    scrollToExperience() {
        const element = document.getElementById("experiencetitle");
        element.scrollIntoView({behavior:"smooth"});
    }

    scrollToWork() {
        const element = document.getElementById("projecttitle");
        element.scrollIntoView({behavior:"smooth"});
    }

    render() {
        return (
            <div className="navcontainer">
                <div className="navbar">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800&display=swap');
                    </style>
                    <div className="headertext">
                        <div className="myname" >
                            Henry Chun Yin Lam
                        </div>
                        <div className="description">
                            Hi! I'm a third year Computer Science student at the Hong Kong University of Science and Technology.
                        </div>
                    </div>
                    <div className="headerbuttons">
                        <button onClick={this.scrollToHome} ref={this.homeRef} className="hbutton" style={{color:"white"}}>Home</button>
                        <button onClick={this.scrollToExperience} ref={this.experienceRef} className="hbutton">Experience</button>
                        <button onClick={this.scrollToWork} ref={this.projectRef} className="hbutton">Projects</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        experienceHeight: state.experienceHeight,
        projectsHeight: state.projectsHeight
    }
}

export default connect(mapStateToProps)(NavBar);