import React from 'react';
import './Button.css';

/**
* @function Button
* @description React component that renders a button.
* Displays active class and handles ability to change time range and selected crypto currency.
*/

const Button = props => (
  <button
    className='timespan_button'
    onClick={props.clickHandler}
  >
    {props.label}
  </button>
);

export default Button;
