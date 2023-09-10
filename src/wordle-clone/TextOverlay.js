import React, { Component } from "react";
import {connect} from "react-redux";

class TextOverlay extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidUpdate() {
    const {failedGuess, failedGame, wonGame, correctWord} = this.props;
    
    if (failedGuess) {
      this.myRef.current.innerHTML = "Invalid Word! Please try again with a new word!";
      this.myRef.current.style = "display:flex;";
    } else if (failedGame) {
      this.myRef.current.innerHTML = "You Lost! Better luck next time. Please refresh to try again. The correct word was " + correctWord;
      this.myRef.current.style = "display:flex;";
    } else if (wonGame) {
      this.myRef.current.innerHTML = "You Won! Please refresh to play again.";
      this.myRef.current.style = "display:flex;";
    } else {
      this.myRef.current.innterHTML = "";
      this.myRef.current.style = "display:none;"
    }
  }

  render(){
    return (
      <div className="textoverlay" ref={this.myRef}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    failedGuess: state.failedGuess,
    failedGame: state.failedGame,
    wonGame: state.wonGame,
    correctWord: state.correctWord
  }
}

export default connect(mapStateToProps)(TextOverlay);
