import React, { Component } from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from "./components/GoodBandPassComponent";
import sketch2 from"./components/BadBandPassComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import {Container, Row, Col, Button, Jumbotron, Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap"

var counter = 1;

class RenderFilter extends Component
{
  render()
    {
    const renderingFilter2 = this.props.renderingFilter2
    if(renderingFilter2)
    {
      return(
        <P5Wrapper sketch={sketch2} renderingFilter2={this.props.renderingFilter2}/>
      )
    }
    else 
    {
      return(
        <P5Wrapper sketch={sketch} renderingFilter2={this.props.renderingFilter2}/>
      )
    }
  }
}

class App extends Component{

  constructor(props)
  {
    super(props);

    this.state = {
      renderingFilter2: true
    }

    this.ToggleFilters = this.ToggleFilters.bind(this);
  }

ToggleFilters(e)
{
  this.setState({renderingFilter2: !this.state.renderingFilter2});
  if(counter%2===0)
  {
    window.location.reload();
  }
  counter++;
}
	render () {
		return (
        <Container>
          <div><br></br></div>
          <h1 style={{"textAlign": "center",
            "margin" : "0 0 50px 0"}}
            >Digital Signal Processing (ENGR362) Project 2018</h1>
          <Row>
            <Col md={6}>
              <Card>
                <CardTitle>
                  Bandpass Filter
                  <hr></hr>
                  </CardTitle>
                <CardBody>
                  <RenderFilter renderingFilter2={this.state.renderingFilter2}/>
                </CardBody>
              </Card>
            </Col>
            <Col md={5}>
              <Card>
                <CardImg top width="100%" src="./362img1.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>DFT Plot of Frequency</CardTitle>
                  <CardText>We can see that the fundamental frequency of the signal is around 500Hz, 
                    this is really close to the actual frequency of my tuning fork 493.9Hz.
                    Go ahead and try adjusting the filter to that frequency.</CardText>
                </CardBody>
              </Card>
              <Button onClick={() => this.ToggleFilters()}>Change Filter</Button>
            </Col>
          </Row>
          <Row>
              <footer>
                <Jumbotron>
                  Developed with <i style={{color: "red"}} className="fa fa-heart" aria-hidden="true"></i> by Danilo Chiarlone
                </Jumbotron>
              </footer>
          </Row>
        </Container>
		);
  }
}

export default App;