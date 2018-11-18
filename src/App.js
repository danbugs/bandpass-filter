import React, { Component } from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from "./components/p5SketchComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import {Container, Row, Col, Jumbotron, Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap"

class App extends Component{

	render () {
		return (
        <Container>
          <div><br></br></div>
          <h1 style={{"text-align": "center",
            "margin" : "0 0 50px 0"}}
            >Digital Signal Processing (ENGR362) Project 2018</h1>
          <Row>
            <Col md={6}>
              <Card>
                <CardTitle>
                  <h3>Bandpass Filter</h3>
                  <hr></hr>
                  </CardTitle>
                <CardBody>
                  <P5Wrapper sketch={sketch}/>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardImg top width="100%" src="./362img1.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>DFT Plot of Frequency</CardTitle>
                  <CardText>We can see that the fundamental frequency of the signal is around 500Hz, 
                    this is really close to the actual frequency of my tuning fork 493.9Hz.
                    Go ahead and try adjusting the filter to that frequency.</CardText>
                </CardBody>
              </Card>
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