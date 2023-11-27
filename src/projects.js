import React, {Component} from "react";
import Snake from "./snake_image.png";
import Wordle from "./wordle_clone.png";
import ProjectText from "./projecttext";
import Line from "./line";
import FoodChoosing from "./food_choosing.png";
import OverwatchBlocker from "./overwatch_blocker.png";

import "./projects.css"

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="projectline">
                <Line/>
                <div className="projectcontainer">
                    <ProjectText img={Snake} id="snake">
                        Snake Game <br/>
                        I used pygame to make a playable version of Snake, with two algorithms to automatically play the game.
                    </ProjectText>
                    <ProjectText img={Wordle} id="wordle">
                        Wordle Clone <br/>
                        I created a clone of wordle. Feel free to play it!
                    </ProjectText>
                    <ProjectText img={FoodChoosing} id="foodchoosing">
                        Food Choosing App <br/>
                        I made an app to help choose what to eat for dinner. It's currently work in progress, hence the UI isn't great, and it isn't deployed.
                    </ProjectText>
                    <ProjectText img={OverwatchBlocker} id="overwatchblocker">
                        Overwatch Blocker <br/>
                        I made a tool to help block Overwatch from launching for my friend to help improve his productivity.
                    </ProjectText>
                </div>
            </div>
        )
    }
}

export default Projects;