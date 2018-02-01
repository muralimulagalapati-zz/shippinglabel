import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button} from 'react-bootstrap';

const ShippingMode = ({handleSubmit, handlePrevious, stage, mode}) => (
  <div>
    <h3 style={{paddingBottom: 30}} align="center">Select mode of shipping</h3>
    <Form horizontal onSubmit={(event) =>handleSubmit(event, stage)}>
      <FormGroup>
        <Col componentClass={ControlLabel} sm={4}>Shipping Mode</Col>
        <Col sm={6}>
          <FormControl name="mode" componentClass="select" defaultValue={mode.mode}>
            <option value={1}>Ground</option>
            <option value={2}>Air</option>
          </FormControl>
        </Col>
      </FormGroup>
      <FormGroup style={{paddingTop: 20}}>
        <Col smOffset={3} sm={3} >
          <Button bsStyle="primary" onClick={() => handlePrevious(stage)}>Previous Step</Button>
        </Col>
        <Col smOffset={1} sm={3} >
          <Button type="submit" bsStyle="primary">Confirm</Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
)

ShippingMode.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  stage: PropTypes.number.isRequired,
  mode: PropTypes.object
}

ShippingMode.defaultProps = {
  mode: {
    mode: '1'
  }
}

export default ShippingMode;
