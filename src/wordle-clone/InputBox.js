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
    this.myRef = React.createRef();
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  componentDidMount() {
    const {pos, position, wordposition} = this.props;
    if (position === pos) {
      this.myRef.current.elements[wordposition].focus();
    }
  }

  componentDidUpdate() {
    const {pos, position,wordposition} = this.props;
    const {form, backspace} = this.state;
    var arrwords = [this.props.word0, this.props.word1, this.props.word2, this.props.word3, this.props.word4];
    var currword = arrwords[pos];
    if (form.elements != null && position != 5 && wordposition === pos) {
      form.elements[position].focus();
    }
  }

  handleKeypress(event){
    const form = event.target.form;
    this.setState({form:form})
  }
  
  render(){
    const {pos} = this.props;
    return (
      <form className="inputbox" onKeyDown={this.handleKeypress} ref={this.myRef}>
        <Box wordpos={pos} pos={0}/>
        <Box wordpos={pos} pos={1}/>
        <Box wordpos={pos} pos={2}/>
        <Box wordpos={pos} pos={3}/>
        <Box wordpos={pos} pos={4}/>
      </form>
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
