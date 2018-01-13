import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Link} from 'react-router-dom'
import './styles.css';
import {
    Col,
    Grid,
    Row
} from 'react-bootstrap';
import Cats from './pages/Cats';
import NewCat from './pages/NewCat';
import Home from './pages/Home'

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
          apiUrl: "http://localhost:3000",
          cats: [],
          newCatSuccess: false,
          errors: null
      }
  }

  newCatSubmit(){}

  componentWillMount(){
    fetch(`${this.state.apiUrl}/cats`)
    .then((rawResponse) =>{
        return rawResponse.json()
    })
    .then((parsedResponse)=>{
        this.setState({cats: parsedResponse.cats})
        console.log(this.state.cats);
    })
  }


  handleNewCat(params){
    fetch(`${this.state.apiUrl}/cats`,
        {
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST"
        }
    )
    .then((rawResponse)=>{
        return rawResponse.json()
    })
    .then((parsedResponse) =>{
        if(parsedResponse.errors){
            this.setState({errors: parsedResponse.errors})
        }else{
            const cats = Object.assign([], this.state.cats)
            cats.push(parsedResponse.cat)
            this.setState({
                cats: cats,
                errors: null,
                newCatSuccess: true
        })
       }
    })
  }

  render() {
    return (
    <Router>
            <div>
            <Route exact path="/" render={props => (
                <div class='container'>
                    <div class='item'>
                        <Grid>
                            <Row id="row">
                                <Col xs={8}>
                                    <h1>Cat Tinder</h1>
                                    <h3>Cat Creator</h3>
                                </Col>
                            </Row>

                          <NewCat
                            onSubmit={this.handleNewCat.bind(this)}
                            errors = {this.state.errors && this.state.errors.validations}
                          />

                          <Col xs={4}>
                            <small>
                              <Link
                              to='/cats'
                              id='cats-link'
                              onClick={()=>{this.setState({newCatSuccess: true})}}
                              >Show me the Cats</Link>
                            </small>
                          </Col>

                          {this.state.newCatSuccess &&
                            <Redirect to="/cats" />
                          }
                        </Grid>
                    </div>
                </div>
            )} />

            <Route exact path="/cats" render={props => (
                <div class='container'>
                    <div class='item'>
                        <Grid>
                                <Row>
                                    <Col xs={8}>
                                        <h1>Cat Tinder</h1>
                                        <h3>An Abundance of Cats</h3>
                                    </Col>
                                </Row>
                            <Cats cats={this.state.cats} />


                            <Col xs={4}>
                              <small>
                                <Link
                                  to='/'
                                  id='cats-link'
                                  onClick={()=>{this.setState({newCatSuccess: false})}}
                                >Add a Cat</Link>
                              </small>
                            </Col>

                        </Grid>
                    </div>
                </div>
            )} />

        </div>
    </Router>
    );
  }
}

export default App;
