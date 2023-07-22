import React, {Component} from "react";
import Line from "./line";

import "./body.css"
import Experience from "./experience";
import Projects from "./projects";

class Body extends Component {
    render() {
        return (
            <div className="bodycontainer">
                <Line/>
                <div className="bodytext">
                    <div className="body">
                        <div className="bodydescription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis eget ligula id sollicitudin. Phasellus eu orci posuere, condimentum nisi vel, dignissim nunc. Integer sapien elit, hendrerit ut tincidunt quis, volutpat eget risus. Duis mollis hendrerit tristique. Nullam accumsan mi eget massa dignissim ullamcorper. Mauris id dignissim tortor, ac volutpat metus. Duis massa mauris, vulputate ac ullamcorper vel, mollis et quam. Etiam eget iaculis lorem, a pulvinar ante. Mauris dui diam, scelerisque sit amet rutrum ac, convallis ac lacus.
                        <br/><br/>Ut iaculis eros nec mauris scelerisque dictum. Nunc eget facilisis leo. Pellentesque sagittis suscipit dolor iaculis sagittis. Duis dui justo, ullamcorper in lobortis non, finibus non leo. Sed sed volutpat erat. Nunc metus orci, laoreet ut feugiat sed, commodo nec dui. Phasellus porta ex sit amet ultricies efficitur. Donec ullamcorper lectus et nulla mollis, eu blandit est hendrerit.
                        </div>
                    </div>
                    <Experience/>
                    <Projects/>
                </div>
            </div>
        )
    }
}

export default Body;