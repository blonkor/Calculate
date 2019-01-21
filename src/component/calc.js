import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';

class Calc extends Component {
  render(){
    return(
      <div className="form">
        <form>
          <a> Калькулятор </a>
          <br/>
          <InputBase type="text" className="text" value={this.props.num} placeholder="0"/>
        </form>
        <div>
          <div>
            <Button className="buttonT" onClick={()=>this.props.butt("C")} >C</Button>
            <Button className="buttonT" onClick={()=>this.props.butt("D")} >del</Button>
            <Button className="buttonT" onClick={()=>this.props.butt("/")} >/</Button>
          </div>
          <div>
            <Button className="buttonM" onClick={()=>this.props.butt("7")}>7</Button>
            <Button className="buttonM" onClick={()=>this.props.butt("8")}>8</Button>
            <Button className="buttonM" onClick={()=>this.props.butt("9")}>9</Button>
            <Button className="buttonM" onClick={()=>this.props.butt("*")}>*</Button>
          </div>
          <div>
            <Button className="buttonM" onClick={()=>this.props.butt("4")}>4</Button>
            <Button className="buttonM" onClick={()=>this.props.butt("5")}>5</Button>
            <Button className="buttonM" onClick={()=>this.props.butt("6")}>6</Button>
            <Button className="buttonM" onClick={()=>this.props.butt("-")}>-</Button>
          </div>
          <div>
            <Button className="buttonM" onClick={()=>this.props.butt("1")}>1</Button>
            <Button className="buttonM" onClick={()=>this.props.butt("2")}>2</Button>
            <Button className="buttonM" onClick={()=>this.props.butt("3")}>3</Button>
            <Button className="buttonM" onClick={()=>this.props.butt("+")}>+</Button>
          </div>
          <div>
            <Button  className="buttonB" onClick={()=>this.props.butt("0")} >0</Button>
            <Button  className="buttonB" onClick={this.props.equally} >=</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calc;
