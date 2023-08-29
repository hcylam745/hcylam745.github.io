import React, { Component } from "react";
import Key from "./Key";

class Keyboard extends Component {
  render(){
    return (
      <div className="keyboard">
        <div className="firstrow">
          <Key id={'Q'}/>
          <Key id={'W'}/>
          <Key id={'E'}/>
          <Key id={'R'}/>
          <Key id={'T'}/>
          <Key id={'Y'}/>
          <Key id={'U'}/>
          <Key id={'I'}/>
          <Key id={'O'}/>
          <Key id={'P'}/>
        </div>
        <div className="secondrow">
          <Key id={'A'}/>
          <Key id={'S'}/>
          <Key id={'D'}/>
          <Key id={'F'}/>
          <Key id={'G'}/>
          <Key id={'H'}/>
          <Key id={'J'}/>
          <Key id={'K'}/>
          <Key id={'L'}/>
        </div>
        <div className="thirdrow">
          <Key id={'ENTER'}/>
          <Key id={'Z'}/>
          <Key id={'X'}/>
          <Key id={'C'}/>
          <Key id={'V'}/>
          <Key id={'B'}/>
          <Key id={'N'}/>
          <Key id={'M'}/>
          <Key id={'⌫'}/>
        </div>
      </div>
    )
  }
}

export default Keyboard;
