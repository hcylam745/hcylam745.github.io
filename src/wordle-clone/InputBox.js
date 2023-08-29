import React, { Component } from "react";
import Box from "./Box"
import { connect } from "react-redux";

class InputBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      previous: "",
      form: "",
      backspace: false
    }
  }
  
  render(){
    const {pos} = this.props;
    return (
      <div className="inputbox">
        <Box wordpos={pos} pos={0}/>
        <Box wordpos={pos} pos={1}/>
        <Box wordpos={pos} pos={2}/>
        <Box wordpos={pos} pos={3}/>
        <Box wordpos={pos} pos={4}/>
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
    position: state.pos
  }
}

export default connect(mapStateToProps)(InputBox);
