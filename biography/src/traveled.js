import React, { Component } from 'react';


class Traveled extends Component{
  render() {
    return(
      <div>
        <div className="card">
          <div className="view overlay hm-white-slight">
              <img src="https://cdn.shopify.com/s/files/1/0131/3682/products/vintage-pattern-swag-paper-exclusive-world-atlas-map-5_1024x1024.jpg?v=1483134436" className="img-fluid" alt=""/>
              <a href="#">
                  <div className="mask"></div>
              </a>
          </div>

          <div className="card-body cardBody">

              <h4 className="card-title">Countries I've Traveled To</h4>
              <hr/>
              <p className="card-text cardText">
                <p> Mexico </p>
                <p> Canada </p>
                <p> Spain </p>
                <p> United Kingdom </p>
                <p> Switzerland </p>
                <p> Monaco </p>
                <p> France </p>
                <p> Italy </p>
                <p> Morocco </p>
                <p> Germany </p>
                <p> Iceland </p>
                <p> USA </p>
              </p>
              <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Traveled;



