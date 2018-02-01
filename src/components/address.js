import React from 'react';
import PropTypes from 'prop-types';

import FromAddress from './fromaddress';
import ToAddress from './toaddress';

const Address = ({addressType, ...props}) => {
  return (
  <div>
    {
      addressType
      ? <ToAddress {...props}/>
      : <FromAddress {...props}/>
    }
  </div>
)}

Address.propTypes = {
  addressType: PropTypes.number.isRequired
}

export default Address;
