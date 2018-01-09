import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ApartmentIndex from './ApartmentIndex.js';
import ApartmentPage from "./ApartmentPage.js";

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">

            <h1>Apartments for Rent </h1>

                <Route exact path="/" component={ApartmentIndex} />
                <Route path='/apartments/:id' component={ApartmentPage} />

          </div>
      </Router>
    );
  }
}

export default App;
