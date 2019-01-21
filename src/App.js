import React, { Component } from 'react';
import './App.css';
import Calc from "./component/calc";

class App extends Component {
  state = {
    numbers: "",
  }

  allAdd = (a) => {//добавление в наши строку символа
    let num = String(this.state.numbers);
    const size = num.length;
    if(a == "D"){
      if(size >0 ){
        num = num.substring(0,size-1) ;
      }
    }
    else if (a == "C"){
      num = "";
    }
    else if(size > 0){
      if (a == "+" || a == "-" || a == "*" || a == "/"){
        if(num[size - 1] == "+"  || num[size - 1] == "-" || num[size - 1] == "*" || num[size - 1] == "/"){
              num = num.substring(0, size-1);
              num += a;
        }else {
          num += a;
        }
      }
      else {
          num += a;
        }
    } else if(size == 0 && +a >= 0){
        num += a;
    }
    this.setState({
      numbers: num,
    });
  }

  prov = (stacNum,stacSign, sign) => {//проверка с свериванием по приоритетности
    const size = stacNum.length;
    if(size > 1 ){
      let signStac = stacSign[stacSign.length - 1];
      while( +sign[0] <= +signStac[0] ){
        const c = stacNum.pop();
        const b = stacNum.pop();
        let rez = 0;
        if(signStac[1] == "+"){
          rez = (c + b);
        }else if(signStac[1] == "-"){
          rez = (b - c);
        }else if(signStac[1] == "/"){
          rez = (b / c);
        }else if(signStac[1] == "*"){
          rez = (c * b);
        }

        stacNum.push(rez);
        stacSign.pop();

        if(stacSign.length > 0){
          signStac = stacSign[stacSign.length - 1];
        }else{
          signStac="00";
        }
      }
    }
  }

  equall = () => {//после нажатия = вызывается эта функция она читает нашу строку и запускает проверку после считывания число это все что до какого знака
    let stacNum = [];
    let stacSign = [];
    let size = this.state.numbers.length;

    const a = this.state.numbers;
    if (a[size-1] == "+" || a[size-1] == "-" || a[size-1] == "*" || a[size-1] == "/"){
      a = a.substring(0,size-1);
      size-=1;
    }

    let inter = 0;
    for( var i in a ){
        const k = a[i];
        if(k == "+" || k == "-" || k == "/" || k == "*"){
          stacNum.push(inter);
          inter = 0;

          if(k == "+"){
            this.prov(stacNum, stacSign,"1+");
            stacSign.push("1+");
          }else if(k == "-"){
            this.prov(stacNum, stacSign,"1-");
            stacSign.push("1-");
          }else if(k == "/"){
            this.prov(stacNum, stacSign,"2/");
            stacSign.push("2/");
          }else if(k == "*"){
            this.prov(stacNum, stacSign,"2*");
              stacSign.push("2*");
          }
        } else {
        inter *= 10;
        inter += ( +k);
      }

        if(i==a.length-1){
            stacNum.push(inter);
      }
    }
    this.prov(stacNum, stacSign,"1+");
    var numb = stacNum.pop();
    this.setState({
      numbers: numb
    });

}
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <Calc
            Change = {this.Change}
            butt={this.allAdd}
            num={this.state.numbers}
            equally={this.equall}
          />
        </div>
      </div>
    );
  }
}

export default App;
