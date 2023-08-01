import React, {Component} from "react";
import {connect} from "react-redux";

import "./navbar_mobile.css"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height:0,
            text:""
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(evt) {
        const height = window.pageYOffset - 40;
        const {experienceHeight, projectsHeight, homeHeight} = this.props;
        let words = "";
        if (height > homeHeight && height < experienceHeight && height < projectsHeight) {
            words = "Home";
            this.myRef.current.style.zIndex = 2;
        } else if (height > homeHeight && height > experienceHeight && height < projectsHeight) {
            words = "Experience";
            this.myRef.current.style.zIndex = 2;
        } else if (height > homeHeight && height > experienceHeight && height > projectsHeight) {
            words = "Projects";
            this.myRef.current.style.zIndex = 2;
        } else {
            words = "";
            this.myRef.current.style.zIndex = 0;
        }
        this.setState({
            height:height,
            text:words
        })
        this.forceUpdate();
    }

    render() {
        const {text} = this.state;
        return (
            <div className="navbar" ref={this.myRef}>
                {text}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        height: state.height,
        homeHeight: state.homeHeight,
        experienceHeight: state.experienceHeight,
        projectsHeight: state.projectsHeight
    }
}

export default connect(mapStateToProps)(Navbar);