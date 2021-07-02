import React from 'react';
import {Component} from 'react';
import '../Css/Display.css';

class Display extends Component {
  render(){
    return(
      <div className="Display">
        {this.props.data}
      </div>
    )
  }
}
export default Display;
