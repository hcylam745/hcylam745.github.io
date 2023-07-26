import React, {Component} from "react";
import Line from "./line";

class BodyText extends Component {
    render() {
        return (
            <div className="body">
                <Line/>
                <div className="bodydescription">
                    In 2016, I programmed my first website, using HTML, CSS and Javascript. The difficulty made me appreciate the remarkable effort behind the various games and websites I used on a daily basis. This difficulty gave me an appreciation for software developers that I still hold to this day.
                <br/><br/> Over the years, I've taken significant strides towards achieving the level of expertise demonstrated by those who have built software before me. I have worked with various languages and framworks, including C/C++, Python, Javascript, Java, React.js and Node.js. 
                    Through my time at various firms and undertaking personal projects, I've found that I extensively enjoy problem solving and designing innovative solutions to problems that others face.
                </div>
            </div>
        )
    }
}

export default BodyText;