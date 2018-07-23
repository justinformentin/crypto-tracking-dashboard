import React from 'react';
import './ErrorMessage.css';

/**
* @function ErrorMessage
* @description React component that will only be rendered if user inputs invalid date range.
*/

const ErrorMessage = props => (
  <div className='error_container'>
    <p>Oops! Looks like your end date is earlier than your start date...</p>
  </div>
);

export default ErrorMessage;
