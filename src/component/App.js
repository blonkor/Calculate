import React, { Component } from 'react';
import './App.css';
import CalculateList from "./CalculateList/CalculateList";
import sign from '../signs'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <CalculateList signs={sign} />
        </div>
      </div>
    );
  }
}

export default App;