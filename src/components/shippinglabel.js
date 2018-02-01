import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ShippingLabel = ({...props}) => {
  return (
    <div>
      <h3 style={{paddingBottom: 30}} align="center">Your shipping label</h3>
      <Row>
        <Col sm={3}>
          <b>From Address</b>
        </Col>
        <Col sm={9}>
          <p>
            {`${props.fromAddress.name},
              ${props.fromAddress.street},
              ${props.fromAddress.city},
              ${props.fromAddress.state},
              ${props.fromAddress.zip}`
            }
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <b>To Address</b>
        </Col>
        <Col sm={9}>
          <p>
            {`${props.toAddress.name},
              ${props.toAddress.street},
              ${props.toAddress.city},
              ${props.toAddress.state},
              ${props.toAddress.zip}`
            }
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <b>Weight</b>
        </Col>
        <Col sm={9}>
          <p>{props.weight.weight}</p>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <b>Cost</b>
        </Col>
        <Col sm={9}>
          <p>{props.weight.weight * (props.shippingMode.mode === '1' ? 1 : 1.5)}</p>
        </Col>
      </Row>
    </div>
  )
}

ShippingLabel.prototype = {
  fromAddress: PropTypes.object.isRequired,
  toAddress: PropTypes.object.isRequired,
  weight: PropTypes.object.isRequired,
  shippingMode: PropTypes.object.isRequired
}

export default ShippingLabel;
