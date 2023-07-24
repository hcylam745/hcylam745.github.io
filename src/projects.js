import React, {Component} from "react";
import Snake from "./snake_image.png";
import ProjectText from "./projecttext";

import "./projects.css"

class Projects extends Component {
    render() {
        return (
            <div className="projectcontainer">
                <ProjectText img={Snake}>
                    Snake Game <br/>
                    Used pygame to make a playable version of Snake, with two algorithms to play the game. 
                    The algorithms are both greedy algorithms, one takes the path that reduces the distance from the snake to the apple without dying, the other uses Djikstra's algorithm to find the shortest path and takes it.
                </ProjectText>
            </div>
        )
    }
}

export default Projects;