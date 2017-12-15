import React, { Component } from 'react';
import {
  Col,
  Button,
  Grid,
  PageHeader,
  Row,
} from 'react-bootstrap'

class App extends Component {
  constructor(props){
      super(props),
      this.state={
          buttonText: "Play Game",
          gameWon: false,
          result: "Congratulations!"
      }
  }

  toggleButton(){
      const newButtonText = this.state.gameWon ? "Play Game" : "Excellent!"
      const gameState = this.state.gameWon ? false : true
      this.setState({buttonText : newButtonText, gameWon: gameState})
  }



  render() {
    return (
      <Grid>
        <PageHeader>
          Testing Example
        </PageHeader>
        <Row>
          <Col xs={4}>
            <Button onClick={this.toggleButton.bind(this)}>
              {this.state.buttonText}
            </Button>
          </Col>
          <Col xs={8}>
            <span id="mainCont">
            {this.state.gameWon && <h2>{this.state.result}</h2>}
            </span>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
