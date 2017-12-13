import React, { Component } from 'react';
// import Lived from './lived.js';
import Traveled from './traveled.js';
import Live from './live.js';


class Travel extends Component{
 render() {
  return(
    <div>
      <div className="container">

        <div className="row">
          <div className="col">
            <h1 id="placesText"> The World Is Yours </h1>
          </div>
        </div>

        <div className="row travelText">
          <div className="col">
            < Live />
          </div>


          <div className="col">
            < Traveled />
          </div>

        </div>
      </div>
    </div>
  )
 }
}

export default Travel;
