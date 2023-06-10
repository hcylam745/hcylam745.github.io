import React, {Component} from "react";

import NavBar from "./navbar";

import "./App.css"



class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavBar/>
            </div>
        )
    }
}

export default Header;