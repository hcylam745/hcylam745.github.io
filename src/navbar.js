import React, {Component} from "react";

import "./App.css"

class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto+Slab:wght@400;800&display=swap');
                </style>
                <div className="headertext">
                    Henry Chun Yin Lam
                </div>
                <div className="headerbuttons">
                    <button className="hbutton" style={{color:"white"}}>Main</button>
                    <button className="hbutton">Education</button>
                    <button className="hbutton">Work</button>
                    <button className="hbutton">Projects</button>
                </div>
            </div>
        )
    }
}

export default NavBar;