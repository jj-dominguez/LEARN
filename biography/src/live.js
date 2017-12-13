import React, { Component } from 'react';


class Lived extends Component{
  render() {
    return(
      <div>
        <div className="card">
          <div className="view overlay hm-white-slight">
              <img src="https://www.sandiego.org/-/media/images/sdta-site/articles/about-sd/1233x860/sdta-articles-11917-1230x860-0000s-0000-about-sd.jpg?bc=white&h=500&w=700&c=1" className="img-fluid" alt=""/>
              <a href="#">
                  <div className="mask"></div>
              </a>
          </div>

          <div className="card-body cardBody">

              <h4 className="card-title">Places I've Lived</h4>
              <hr/>
              <p className="card-text cardText">
                  <p> Manhattan Beach, California </p>
                  <p> San Diego, California </p>
                  <p> San Luis Obispo, California </p>
                  <p> Barcelona, España </p>
              </p>
              <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Lived;
