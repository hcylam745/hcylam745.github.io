import React, {Component} from "react";
import {connect} from "react-redux";

class BodyTitle extends Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }

    componentDidMount() {
        let height = this.myRef.current.offsetTop;
        this.props.dispatch({type:17, homeHeight:height});
    }

    render() {
        return (
            <div className="bodytitle" id="bodytitle" ref={this.myRef}>
                Home
            </div>
        )
    }
}

export default connect()(BodyTitle);