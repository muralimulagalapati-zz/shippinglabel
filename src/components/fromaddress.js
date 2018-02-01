import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormControl, FormGroup, Col, ControlLabel, Button, Row} from 'react-bootstrap';

const FromAddress = ({stage, address, ...props}) => (
  <div>
    <Row align="center">
      <h3 style={{paddingBottom: 30}}>Enter from address</h3>
    </Row>
    <Form horizontal onSubmit={(event) => props.handleSubmit(event, stage)}>
      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>Name</Col>
        <Col sm={10}>
          <FormControl type="text" name="name" defaultValue={address.name}/>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>Street</Col>
        <Col sm={10}>
          <FormControl type="text" name="street" defaultValue={address.street}/>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col componentClass={ControlLabel} smOffset={1} sm={1}>City</Col>
        <Col sm={3}>
          <FormControl type="text" name="city" defaultValue={address.city}/>
        </Col>
        <Col componentClass={ControlLabel} sm={1}>State</Col>
        <Col sm={3}>
          <FormControl type="text" name="state" defaultValue={address.state}/>
        </Col>
        <Col componentClass={ControlLabel} sm={1}>Zip</Col>
        <Col sm={2}>
          <FormControl type="text" name="zip" defaultValue={address.zip}/>
        </Col>
      </FormGroup>
      <FormGroup style={{paddingTop: 20}}>
        <Col smOffset={7} sm={3} >
          <Button type="submit" bsStyle="primary">Next Step</Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
)

FromAddress.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  stage: PropTypes.number.isRequired,
  address: PropTypes.object
}

FromAddress.defaultProps = {
  address: {
    'name': '',
    'street': '',
    'city': '',
    'state': '',
    'zip': ''
  }
}

export default FromAddress;
