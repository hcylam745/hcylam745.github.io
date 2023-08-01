import React, {Component} from "react";
import Snake from "./../snake_image.png";
import Wordle from "./../wordle_clone.png";
import ProjectText from "./projecttext";

import "./projects_mobile.css"

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="projectline">
                <div className="projectcontainer">
                    <ProjectText img={Snake} id="snake">
                        Snake Game <br/>
                        Used pygame to make a playable version of Snake, with two algorithms to play the game. 
                        The algorithms are both greedy algorithms, one takes the path that reduces the distance from the snake to the apple without dying, the other uses Djikstra's algorithm to find the shortest path and takes it.
                    </ProjectText>
                    <ProjectText img={Wordle} id="wordle">
                        Wordle Clone <br/>
                        I created a clone of wordle. Feel free to play it!
                    </ProjectText>
                </div>
            </div>
        )
    }
}

export default Projects;