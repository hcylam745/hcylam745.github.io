import React, {Component} from "react";

import "./App.css"

class TextBox extends Component {
    render(props) {
        return (
            <div className="textbox" style={{paddingTop: this.props.paddingtop}}>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto+Slab:wght@400;800&display=swap');
                </style>
                {this.props.text}
            </div>
        )
    }
}

export default TextBox;