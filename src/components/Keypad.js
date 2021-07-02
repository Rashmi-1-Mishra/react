import React from 'react';
import {Component} from 'react';
import '../Css/Keypad.css';

class Keypad extends Component {
  render(){
    return(
      <div className='Keypad'>
        <div className='Keypad-items'>
        {this.props.children}
        </div>
      </div>
    )
  }
}
export default Keypad;
