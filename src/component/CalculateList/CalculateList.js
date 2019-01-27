import React, { Component } from 'react';
import Calculate from '../Calculate'

class CalculateList extends Component{
  state ={
    value:0,
    valueFirst: 0,
    valueSecond: 0,
    sign: undefined,
    isFirst: true
  }

  render(){
      const articleElements = this.props.signs.map((article,index) =>
        <Calculate 
          key={index}
          sign={article} 
          onButtonClick={this.handleClick}
        />
      )
      return(
        <div className="form" >
          <a> Калькулятор </a>
          <br/>
          <input type="text" placeholder={this.state.value} className="inputtext"/>
          {articleElements}
      </div>  

      );
  }
  handleClick = article => {
    if(article !== "+" && article !== "-" && article !== "*" && article !== "/"){
    switch(article){
      case 'equal':
        this.insertResult();
        break;
      case 'clear':
        this.setState({
          value: 0
        });
        break;
      case 'delete':
        const newnum = parseInt(this.state.value/10);
        if(this.state.isFirst){
          this.setState({
            value: newnum,
            valueFirst:newnum
          });
        }else{
          this.setState({
            value: newnum,
            valueSecond: newnum
          });
        }
        break;
      default:
        const newnumb = this.state.value * 10 + +article;
        if(this.state.isFirst){
          this.setState({
            value: newnumb,
            valueFirst:newnumb
          });
        }else{
          this.setState({
            value: newnumb,
            valueSecond: newnumb
          });
        }
        break;
      }
    }
    else{
      this.insertResult();
      this.setState({
        sign: article,
        isFirst: false,
        value:0
      });
      
    }

  }
  insertResult = ()=>{
    let result;
    if(this.state.sign){
      switch(this.state.sign){
        case "+":
          result = this.state.valueFirst + this.state.valueSecond;
          break;
        case "-":
          result = this.state.valueFirst - this.state.valueSecond;
          break;
        case "*":
          result = this.state.valueFirst * this.state.valueSecond;
          break;
        case "/":
          result = this.state.valueFirst / this.state.valueSecond;
          break;
      }
      this.setState({
        isFirst: true,
        value: result,
        valueFirst:result,
        sign:undefined
      })
    }
  }
}

export default CalculateList