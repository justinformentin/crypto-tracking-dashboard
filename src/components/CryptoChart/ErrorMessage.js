import React from 'react';

/**
* @function ErrorMessage
* @description React component that will only be rendered if user inputs invalid date range.
*/

function ErrorMessage () {
  return (
    <div className='error_container'>
      <p>Oops! Looks like your end date is earlier than your start date...</p>
    </div>
  );
}

export default ErrorMessage;
