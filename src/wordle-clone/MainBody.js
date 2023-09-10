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
    this.state = {
      finalword:word,
      win:false,
      input:null,
      wordpos:0,
      word0:null,
      word1:null,
      word2:null,
      word3:null,
      word4:null,
      gameEnded:false
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  findFirstInstance(arr, element, ignore_arr) {
    for (let i = 0; i < arr.length; i++) {
      if (element.toLowerCase() == arr[i] && ignore_arr[i] == false) {
        return i;
      }
    }
    return -1;
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate() {
    const {newletter} = this.props;
    let event = "";
    if (newletter == null) {
      return;
    } else if (newletter == "ENTER") {
      event = new KeyboardEvent('keydown', {'keyCode':13});
    } else if (newletter == "⌫") {
      event = new KeyboardEvent('keydown', {'keyCode':8});
    } else {
      event = new KeyboardEvent('keydown', {'keyCode':newletter.charCodeAt(0),'key':newletter});
    }
    this.handleKeyDown(event);
    this.props.dispatch({type:20,newletter:null});
  }

  checkIfEmpty(words) {
    var bool = false;
    for (let i = 0; i < 5; i++) {
      if (words[i] === null) {
        bool = true;
      }
    }
    return bool;
  }

  checkLose(){
    const {wordpos} = this.props;
    if (wordpos >= 5) {
      return true;
    } else {
      return false;
    }
  }

  updateGuess(){
    const {wordpos} = this.props;
    //this.myRef.current.children[wordpos+1].children[0].focus();
    this.props.dispatch({type:9,word:null,positionchange:-1});
    this.props.dispatch({type:8,color:"B",positionchange:-1});
    this.props.dispatch({type:6,wordpos:wordpos+1});
    this.props.dispatch({type:7,pos:0});
    this.props.dispatch({type:10,whiteletterpos:0,whitewordpos:wordpos+1});
    this.setState({
      word0:null,
      word1:null,
      word2:null,
      word3:null,
      word4:null
    })
  }

  handleKeyDown = event => {
    const {wordpos} = this.props;
    const {gameEnded, word0, word1, word2, word3, word4, finalword} = this.state;
    this.setState({
      input:event.key,
    })
    
    let skip = false;

    if (gameEnded) {
      return;
    }

    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
      if (word0 == null) {
        this.setState({
          word0:event.key.toUpperCase()
        })
        this.props.dispatch({type:9, letter:event.key.toUpperCase(),positionchange:0});
        this.props.dispatch({type:10, whiteletterpos:1,whitewordpos:wordpos});
      } else if (word1 == null) {
        this.setState({
          word1:event.key.toUpperCase()
        })
        this.props.dispatch({type:9, letter:event.key.toUpperCase(),positionchange:1});
        this.props.dispatch({type:10, whiteletterpos:2,whitewordpos:wordpos});
      } else if (word2 == null) {
        this.setState({
          word2:event.key.toUpperCase()
        })
        this.props.dispatch({type:9, letter:event.key.toUpperCase(),positionchange:2});
        this.props.dispatch({type:10, whiteletterpos:3,whitewordpos:wordpos});
      } else if (word3 == null) {
        this.setState({
          word3:event.key.toUpperCase()
        })
        this.props.dispatch({type:9, letter:event.key.toUpperCase(),positionchange:3});
        this.props.dispatch({type:10, whiteletterpos:4,whitewordpos:wordpos});
      } else if (word4 == null) {
        this.setState({
          word4:event.key.toUpperCase()
        })
        this.props.dispatch({type:9, letter:event.key.toUpperCase(),positionchange:4});
        this.props.dispatch({type:10, whiteletterpos:0,whitewordpos:-1});
      }
    } else if (event.keyCode == 8) {
      if (word4 != null) {
        this.setState({
          word4:null
        })
        this.props.dispatch({type:9, letter:null, positionchange:4});
        this.props.dispatch({type:10, whiteletterpos:4,whitewordpos:wordpos});
      } else if (word3 != null) {
        this.setState({
          word3:null
        })
        this.props.dispatch({type:9, letter:null, positionchange:3});
        this.props.dispatch({type:10, whiteletterpos:3,whitewordpos:wordpos});
      } else if (word2 != null) {
        this.setState({
          word2:null
        })
        this.props.dispatch({type:9, letter:null, positionchange:2});
        this.props.dispatch({type:10, whiteletterpos:2,whitewordpos:wordpos});
      } else if (word1 != null) {
        this.setState({
          word1:null
        })
        this.props.dispatch({type:9, letter:null, positionchange:1});
        this.props.dispatch({type:10, whiteletterpos:1,whitewordpos:wordpos});
      } else if (word0 != null) {
        this.setState({
          word0:null
        })
        this.props.dispatch({type:9, letter:null, positionchange:0});
        this.props.dispatch({type:10, whiteletterpos:0,whitewordpos:wordpos});
      }
    } else if (event.keyCode == 13) {
      var url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
      var words = [word0, word1, word2, word3, word4];
      if (!this.checkIfEmpty(words)) {
        url += words[0] + words[1] + words[2] + words[3] + words[4];
        axios.get(url)
        .catch(function async (error) {
          if (error.response) {
            //console.log(error.response);
            skip = true;
          }
        })
        .then(async (res)=>{
          if (!skip) {
            if (!this.checkLose()){
              let used = [false, false, false, false, false];
              let user_used = [false, false, false, false];
              let failed = false;
              // search for green, then yellow, then fill all remaining slots with black.
              for (let i = 0; i < 5; i++) {
                if (words[i].toLowerCase() == finalword[i]) {
                  this.props.dispatch({type:8, colour:"G", positionchange:i});
                  this.props.dispatch({type:13, greenWords:words[i]});
                  await new Promise(r => setTimeout(r, 100));
                  used[i] = true;
                  user_used[i] = true;
                } else {
                  failed = true;
                }
              }

              if (!failed) {
                this.props.dispatch({type:23, wonGame:true});
              }

              // now search for yellow & black.
              for (let i = 0; i < 5; i++) {
                if (user_used[i] != true) {
                  let found_wordpos = this.findFirstInstance(finalword, words[i], used);
                  if (found_wordpos != -1) {
                    this.props.dispatch({type:8, colour:"Y", positionchange:i});
                    this.props.dispatch({type:12, yellowWords:words[i]});
                    await new Promise(r => setTimeout(r, 100));
                    used[found_wordpos] = true;
                    user_used[i] = true;
                  } else {
                    this.props.dispatch({type:8, colour:"B",positionchange:i});
                    this.props.dispatch({type:11,badWords:words[i]});
                    await new Promise(r => setTimeout(r, 100));
                    user_used[i] = true;
                  }
                }
              }

              if (!failed) {
                this.setState({
                  gameEnded:true
                })
              } else if (wordpos == 4) {
                this.props.dispatch({type:22, failedGame:true, correctWord:finalword});
              } 
              
              this.props.dispatch({type:wordpos,word:words});

              this.updateGuess();
              
            } else {
              this.setState({
                gameEnded:true
              })
            }
          } else {
            this.props.dispatch({type:21, failedGuess:true});
            await new Promise(r => setTimeout(r, 700));
            this.props.dispatch({type:21, failedGuess:false});
            //console.log("skipped")
          }
        })
      }
    }
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
    wordpos:state.wordpos,
    newletter:state.newletter
  }
}

export default connect(mapStateToProps)(MainBody);
