import React, { Component } from 'react';
import logo from './JDlogo.png';
import './App.css';
import Info from './info.js';
import basketball from './basketball.jpg';
import camera from './camera.jpg';
import surfing from './surfing.jpg';
import globe from './globe.gif'
import Travel from './travel.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        < Info />
        <div>
            <img className="images" src={basketball} />
            <img className="images" src={camera} />
            <img className="images" src={surfing} />
        </div>
        <br/>
        <hr/>

        <div>
          <img className="globe" src={globe} />
        </div>

        < Travel />

        <br/>

      </div>
    );
  }
}

export default App;
