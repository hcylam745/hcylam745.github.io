import React, {Component} from "react";

import { connect } from "react-redux";

import "./projects.css"

class ProjectText extends Component {
    constructor(props) {
        super(props);

        this.whiteBorder = this.whiteBorder.bind(this);
        this.removeBorder = this.removeBorder.bind(this);
    }

    componentDidUpdate(){
        const {focusProj, id} = this.props;
        let element = document.getElementById(id);
        if (focusProj != null && focusProj != id) {
            //element.style.opacity = 0.6;
            element.classList.remove('unfocusundo');
            element.classList.add('unfocused');
        } else if (focusProj == null || focusProj == id) {
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

        this.props.dispatch({type:18,focusProj:id});
    }

    removeBorder(id) {
        let element = document.getElementById(id);
        //element.style.backgroundColor = null;
        element.classList.remove('focused');

        element.classList.add('focusedundo');

        setTimeout(()=>{
            element.classList.remove('focusedundo');
        }, 200);

        this.props.dispatch({type:18,focusProj:null});
    }

    linkToWebsite(id) {
        if (id == "wordle") {
            window.location.href="#/wordle";
        } else if (id == "snake") {
            window.location.href="https://github.com/hcylam745/snakegame"
        } else if (id == "foodchoosing") {
            window.location.href="https://github.com/hcylam745/food-choosing-app"
        } else if (id == "overwatchblocker") {
            window.location.href="https://github.com/hcylam745/overwatch-blocker"
        }
    }

    render() {
        const image = this.props.img;

        const text_arr = this.props.children;

        const id = this.props.id;

        return (
            <div className="project" id={id} onClick={()=>this.linkToWebsite(id)} onMouseEnter={()=>this.whiteBorder(id)} onMouseLeave={()=>this.removeBorder(id)}>
                <div className="projectimage">
                    <img src={image} className="image" alt="Project Image"></img>
                </div>
                <div className="projecttext">
                    <div className="projectheader">
                        {text_arr[0]}
                    </div>
                    <div className="projectbody">
                        {text_arr[2]}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        focusProj:state.focusProj
    }
}

export default connect(mapStateToProps)(ProjectText);