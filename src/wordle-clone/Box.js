import React, { Component } from "react";
import { connect } from "react-redux";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      colour: {
        "backgroundColor":"#111111"
      },
      prev: "B"
    }

    this.myRef = React.createRef();
  }

  componentDidMount() {
    const {wordpos, whitewordpos, pos, whiteletterpos} = this.props;
    if (wordpos === whitewordpos && pos === whiteletterpos) {
      this.myRef.current.style.border = "1px solid white";
    } else {
      this.myRef.current.style.border = "1px solid rgba(150, 150, 150, 0.6)";
    }
  }

  componentDidUpdate() {
    const {colour, positionchange, wordpos, pos, wordposition, letter, whiteletterpos, whitewordpos} = this.props;

    if (wordpos === wordposition && pos === positionchange) {
      if (colour == "B") {
        this.myRef.current.style.backgroundColor = "black";
      } else if (colour == "Y") {
        this.myRef.current.style.backgroundColor = "orange";
      } else if (colour == "G") {
        this.myRef.current.style.backgroundColor = "green";
      }

      if (wordpos === wordposition && pos === positionchange && colour == null) {
        if (letter != null) {
          this.myRef.current.innerHTML = letter;
        } else {
          this.myRef.current.innerHTML = null;
        }
      } 
    }

    if (wordpos === whitewordpos && pos === whiteletterpos) {
      this.myRef.current.style.border = "1px solid white";
    } else {
      this.myRef.current.style.border = "1px solid rgba(150, 150, 150, 0.6)";
    }
  }

  render(){
    const {pos} = this.state;
    return (
      <div className="box" id={pos} ref={this.myRef}>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    word0: state.word0,
    word1: state.word1,
    word2: state.word2,
    word3: state.word3,
    word4: state.word4,
    input: state.input,
    wordposition: state.wordpos,
    position: state.pos,
    colour: state.colour,
    positionchange: state.positionchange,
    letter: state.letter,
    whiteletterpos: state.whiteletterpos,
    whitewordpos: state.whitewordpos
  }
}

export default connect(mapStateToProps)(Box);
