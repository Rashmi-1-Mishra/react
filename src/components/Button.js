import React from 'react';
import {Component} from 'react';
import '../Css/Button.css';

class Button extends Component{
  render(){
    return(
      <>
        <div className="Button"
        id={this.props.id}
        onClick={this.props.onClick}
        value={this.props.value}>
          {this.props.label}
        </div>
      </>
    )
  }
}

export default Button;
