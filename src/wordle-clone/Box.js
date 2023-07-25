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
    this.handleChange = this.handleChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidUpdate() {
    const {colour, positionchange, wordpos, pos, wordposition, update} = this.props;
    const {prev} = this.state;
    if (wordpos === wordposition && pos === positionchange && update) {
      if (colour === "G" && prev !== colour) {
        this.setState({colour:{"backgroundColor":"green"},prev:"G"});
      } else if (colour === "Y" && prev !== colour) {
        this.setState({colour:{"backgroundColor":"orange"},prev:"Y"});
      } else if (prev !== colour) {
        this.setState({colour:{"backgroundColor":"#111111"},prev:"B"});
      }
    }
  }

  handleChange(event) {
    const {wordpos, pos,position} = this.props;
    if (!/[a-zA-Z]/.test(event.target.value)) {
        event.preventDefault();
    } else {
      var arrwords = [this.props.word0, this.props.word1, this.props.word2, this.props.word3, this.props.word4];
      var newwords = arrwords[wordpos];
      if (newwords[pos] !== "") {
        event.preventDefault();
        return;
      }
      var temp = event.target.value;
      this.setState({input:temp.toUpperCase()});
      newwords[pos] = temp.toUpperCase();
      this.props.dispatch({type:wordpos,word:newwords});
      if (position === 5) {
        return;
      }
      this.props.dispatch({type:7, pos:position+1});
    }
  }

  onKeyDown(event) {
    const {wordpos, pos, position} = this.props;
    this.props.dispatch({type:5,input:event.keyCode}); // check for backspace
    if (event.keyCode === 8) {
      this.setState({input:""});
      var arrwords = [this.props.word0, this.props.word1, this.props.word2, this.props.word3, this.props.word4];
      var newwords = arrwords[wordpos];
      newwords[pos] = "";
      if (position === 0) {
        return;
      }
      this.props.dispatch({type:wordpos,word:newwords});
      this.props.dispatch({type:7, pos:position-1});
    }
  }

  returnFalse() {
    return false;
  }

  render(){
    const {colour} = this.state;
    return (
      <input type="text" className="box" maxLength="1" 
      onChange={this.handleChange} value={this.state.input}
      onKeyDown={this.onKeyDown} style={colour}>
      </input>
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
    update: state.update
  }
}

export default connect(mapStateToProps)(Box);
