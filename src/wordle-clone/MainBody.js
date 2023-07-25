import React, { Component } from "react";
import InputBox from './InputBox';
import { connect } from "react-redux";
import axios from 'axios';
import data from "./word_list.json"

class MainBody extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    var word = "";
    var size = Object.keys(data).length;
    word = data[Math.floor(Math.random() * size) + 1];
    //console.log(word);
    this.props.dispatch({type:9, update:false});
    this.state = {
      finalword:word,
      win:false
    }
  }

  sleep(ms) {
    return new Promise(res => setTimeout(res,ms));
  }

  componentDidUpdate() {
    const {input, wordpos, pos, word0, word1, word2, word3, word4} = this.props;
    const {finalword} = this.state
    var skip = false;
    if (pos !== 5) {
      return;
    }
    if (input === 13) { // this checks for enter being hit
      var url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
      var words = [word0, word1, word2, word3, word4];
      if (!this.checkIfEmpty(words, wordpos)) {
        url += words[wordpos][0] + words[wordpos][1] + words[wordpos][2] + words[wordpos][3] + words[wordpos][4];
        axios.get(url)
        .catch(function (error) {
          if (error.response) {
            //console.log(error.response);
            skip = true;
          }
        })
        .then(async (res)=>{
          if (!skip) {
            if (!this.checkLose()){
              this.props.dispatch({type:9,update:true});
              for (let i = 0; i < 5; i++) {
                if (words[wordpos][i].toUpperCase() === finalword[i].toUpperCase()){
                  //console.log("setting " + i + "'th letter to green")
                  this.props.dispatch({type:8,colour:"G",positionchange:i});
                  //send packets to change ith square of wordpos into green
                } else if (finalword.includes(words[wordpos][i].toLowerCase())) {
                  this.props.dispatch({type:8,colour:"Y",positionchange:i});
                  //send packets to change ith square of wordpos into yellow
                } else {
                  //ignore / send packets to change ith square of wordpos into grey/black.
                  this.props.dispatch({type:8,colour:"B",positionchange:i});
                }
                // delay here
                await this.sleep(50);
              }
              this.props.dispatch({type:9,update:false});
            }
            this.updateGuess();
          } else {
            //console.log("skipped")
          }
        })
      } 
    }
  }

  checkIfEmpty(words, j) {
    var bool = false;
    for (let i = 0; i < 5; i++) {
      if (words[j][i] == "") {
        bool = true;
      }
    }
    return bool;
  }

  checkLose(){
    const {wordpos} = this.props;
    if (wordpos === 4) {
      console.log("YOU SUCK");
      return true;
    } else {
      return false;
    }
  }

  updateGuess(){
    const {wordpos} = this.props;
    this.myRef.current.children[wordpos+1].children[0].focus();
    this.props.dispatch({type:6,wordpos:wordpos+1});
    this.props.dispatch({type:7,pos:0});
  }

  render(){
    return (
      <div className="mainbody" ref={this.myRef}>
        <InputBox pos={0} />
        <InputBox pos={1} />
        <InputBox pos={2} />
        <InputBox pos={3} />
        <InputBox pos={4} />
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
    wordpos: state.wordpos,
    pos: state.pos
  }
}

export default connect(mapStateToProps)(MainBody);
