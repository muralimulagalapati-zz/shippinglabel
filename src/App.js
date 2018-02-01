import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import Address from './components/address';
import Weight from './components/weight';
import ShippingMode from './components/shippingmode';
import ShippingLabel from './components/shippinglabel';

class App extends Component {

  state = {
    step: 0
  }

  handlePreviousClick = (stage) => {
    if (stage > 0 && stage < 5) {
      this.setState({step: stage - 1});
    }
  }

  handleNextClick = (event, stage) => {
    event.preventDefault();
    let data = new FormData(event.target);
    const dataObject = {};
    for (let [key, value] of data) {
      dataObject[key] = value;
    }
    switch(stage) {
      case 0:
        this.setState({
          step: stage + 1,
          fromAddress: dataObject
        })
        break;
      case 1:
        this.setState({
          step: stage + 1,
          toAddress: dataObject
        })
        break;
      case 2:
        this.setState({
          step: stage + 1,
          weight: dataObject
        })
        break;
      case 3:
        this.setState({
          step: stage + 1,
          shippingMode: dataObject
        })
        break;
      default:
        console.error("We're in unexpected step ", this.step);
    }
  }

  render() {
    const { step } = this.state;
    const steps = [
      <Address
        addressType={0}
        handleSubmit={this.handleNextClick}
        handlePrevious={this.handlePreviousClick}
        stage={step}
        address={this.state.fromAddress || {}}
      />,
      <Address
        addressType={1}
        handleSubmit={this.handleNextClick}
        handlePrevious={this.handlePreviousClick}
        stage={step}
        address={this.state.toAddress || {}}
      />,
      <Weight
        handleSubmit={this.handleNextClick}
        handlePrevious={this.handlePreviousClick}
        stage={step}
        weight={this.state.weight || {}}
      />,
      <ShippingMode
        handleSubmit={this.handleNextClick}
        handlePrevious={this.handlePreviousClick}
        stage={step}
        mode={this.state.shippingMode || {}}
      />,
      <ShippingLabel {...this.state}/>
    ]
    return (
      <div style={{marginTop: 40}}>
        <Row>
          <Col mdOffset={4} md={4}>
            { steps[step] }
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
