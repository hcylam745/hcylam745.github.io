import React, {Component} from "react";

import "./navbar.css"

class NavBar extends Component {

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
                        <a href="/" className="hbutton" style={{color:"white"}}>Home</a>
                        <a href="/projects" className="hbutton">Experience</a>
                        <a href="/about" className="hbutton">Projects</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;