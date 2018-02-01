import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button} from 'react-bootstrap';

const Weight = ({handleSubmit, handlePrevious, stage, weight}) => (
  <div>
    <h3 style={{paddingBottom: 30}} align="center">Enter weight of your package</h3>
    <Form horizontal onSubmit={(event) =>handleSubmit(event, stage)}>
      <FormGroup>
        <Col componentClass={ControlLabel} sm={4}>Weight</Col>
        <Col sm={6}>
          <FormControl type="text" name="weight" defaultValue={weight.weight}/>
        </Col>
      </FormGroup>
      <FormGroup style={{paddingTop: 20}}>
        <Col smOffset={3} sm={3} >
          <Button bsStyle="primary" onClick={() => handlePrevious(stage)}>Previous Step</Button>
        </Col>
        <Col smOffset={1} sm={3} >
          <Button type="submit" bsStyle="primary">Next Step</Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
)

Weight.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  stage: PropTypes.number.isRequired,
  weight: PropTypes.object
}

Weight.defaultProps = {
  weight: {
    weight: ''
  }
}

export default Weight;
