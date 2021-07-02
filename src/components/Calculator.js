import React from 'react';
import {Component} from 'react';
import Header from './Header.js';
import Display from './Display.js';
import Keypad from './Keypad.js';
import Button from './Button.js';

class Calculator extends Component {

  constructor(){
    super();
    this.state = {
      equation:"",
      display:"0"
    }
    this.numInput = this.numInput.bind(this);
    this.operInput = this.operInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.decInput = this.decInput.bind(this);
    this.calculate = this.calculate.bind(this);
    this.brackInput = this.brackInput.bind(this);
  }
  numInput(e){
    if(this.state.equation.match(/[0-9\.]$/) && !this.state.equation.includes("=")){
      if(this.state.equation.match(/[+\-*/]/) == null){
        let val = this.state.equation + e.currentTarget.attributes.value.value;
        this.setState({
          display: val,
          equation: val
        });
      } else {
        this.setState({
          display: this.state.display + e.currentTarget.attributes.value.value,
          equation : this.state.equation + +e.currentTarget.attributes.value.value
        });
      }
    } else if (this.state.equation.match(/[+\-*/\(\)]$/)) {
      let val = this.state.equation + e.currentTarget.attributes.value.value;
      this.setState({
        display : e.currentTarget.attributes.value.value,
        equation: val
      });
    } else if(this.state.display === "0" && e.currentTarget.attributes.value.value !=="0" || this.state.equation.includes("=")){
      this.setState({
        display : e.currentTarget.attributes.value.value,
        equation: e.currentTarget.attributes.value.value
      });
    }
  }
  operInput(e){
    if(this.state.equation.includes("=")){
      let val = this.state.display;
      val = val+e.currentTarget.attributes.value.value;
      this.setState({
        equation: val
      });
    } else {
      if(this.state.equation != "" && this.state.equation.match(/[*\-/+]$/) == null){
        let val = this.state.equation;
        val = val+ e.currentTarget.attributes.value.value;
        this.setState({
          equation: val
        });
      } else if (this.state.equation.match(/[*\-\/+]$/) != null) {
        let val = this.state.equation;
        val = val + val.substring(0 , (val.length-1));
        val = val + e.currentTarget.attributes.value.value;
        this.setState({
          equation: val
        });
      }
    }
  }
  brackInput(e){
    if(this.state.equation.includes("=")){
      let val = this.state.display;
      val = val+e.currentTarget.attributes.value.value;
      this.setState({
        equation: val
      });
    } else {
        let val = this.state.equation;
        val = val+ e.currentTarget.attributes.value.value;
        this.setState({
          equation: val
        });

    }
  }
  clearInput(e){
    this.setState({
      display:'0',
      equation:""
    });
  }
  decInput(e){
    if(this.state.equation =="" || this.state.equation.includes("=")){
      let val='0.';
      this.setState({
        display: val,
        equation: val
      });
    } else if(this.state.equation.match(/[+\-*\/]$/)){
      let val = '0.';
      this.setState({
        display: val,
        equation: this.state.equation+val
      });
    } else if(!this.state.display.includes(".")){
      this.setState({
        display: this.state.display + e.currentTarget.attributes.value.value ,
        equation: this.state.equation + e.currentTarget.attributes.value.value
      });
    }
  }
  calculate(e){
    if(this.state.equation.includes("=")){
      let val = `${this.state.display}`;
      this.setState({
        equation: val
      });
    } else if(this.state.equation != "" && this.state.equation.match(/[+\-*\/]/) != null && this.state.equation.match(/[+\-*\/]$/) == null) {
      let result = Number.isInteger(eval(this.state.equation)) ? eval(this.state.equation) : parseFloat(eval(this.state.equation).toFixed(5));
      let val = this.state.equation;
      val += ` =${result}`;
      this.setState({
        display: result,
        equation: val
      });
    }
  }
  render(){
    return(
      <>
        <Header data='Calculator' />
        <Display data={this.state.equation} />
        <Keypad>
          <Button value="clear" label="C" onClick={this.clearInput} />
          <Button value="/" label="/" onClick={this.operInput}/>
          <Button value="*" label="*" onClick={this.operInput}/>
          <Button value="-" label="-" onClick={this.operInput}/>
          <Button value="7" label="7" onClick={this.numInput}/>
          <Button value="8" label="8" onClick={this.numInput} />
          <Button value="9" label="9" onClick={this.numInput} />
          <Button value="+" id="add" label="+" onClick={this.operInput}/>
          <Button value="4" label="4" onClick={this.numInput} />
          <Button value="5" label="5" onClick={this.numInput} />
          <Button value="6" label="6" onClick={this.numInput} />
          <Button value="1" label="1" onClick={this.numInput} />
          <Button value="2" label="2" onClick={this.numInput} />
          <Button value="3" label="3" onClick={this.numInput} />
          <Button value="=" id="equal" label="=" onClick={this.calculate} />
          <Button value="0" id="zero" label="0" onClick={this.numInput} />
          <Button value="." label="." onClick={this.decInput} />
          <Button value="(" id="brack1" label="(" onClick={this.brackInput} />
          <Button value=")" id="brack2" label=")" onClick={this.brackInput} />
        </Keypad>

      </>

    )
  }
}
export default Calculator;
